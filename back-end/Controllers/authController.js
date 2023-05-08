const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

//creating sign token function
const signToken = (id) =>
  jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

//creating send token to the user function
const createSendToken = (user, statusCode, res) => {
  //creating TOKEN
  const token = signToken(user._id);

  //deleting password field
  user.password = undefined;

  //sending response
  res.status(statusCode).json({
    //JSEND FORMAT
    status: "success",
    //sending token back to client
    token,
    data: {
      user: user,
    },
  });
};

//sign up
exports.signup = catchAsync(async (req, res, next) => {
  //creating user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cpassword: req.body.cpassword,
    role: req.body.role,
    gender: req.body.gender,
    dob: req.body.dob,
    phone: req.body.phone,
    profilePic: req.body.profilePic,
    userdescription: req.body.userdescription,
    active: req.body.active,
  });
  //creating TOKEN
  createSendToken(newUser, 201, res);
});

//Login
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1) check if email and password exists.
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  //2) check if user exists  && password is correct.
  const user = await User.findOne({ email: email }).select("+password");

  //if user don't exit and password not matched
  if (!user || !(await user.correctPassword(password, user.password))) {
    next(new AppError("Incorrect Email or Password!", 401));
  }

  //3) If everything ok, send token to client.
  createSendToken(user, 200, res);
});

//Protect middleware
exports.protect = catchAsync(async (req, res, next) => {
  //1) getting token and checking does it exists.
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  //console.log(token);

  //if token don't exist, print error
  if (!token) {
    return next(
      new AppError("You are not logged In! Please log In to get Access", 401)
    );
  }
  //2) verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  //3) if verification passed, then checking if user still exists.
  const CurrentUser = await User.findById(decoded.id);
  if (!CurrentUser) {
    return next(
      new AppError(
        "The user belonging to this Token does no longer exists.",
        401
      )
    );
  }
  //4) check if user changed the password after the token was issued.
  if (CurrentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User Recently Changed Password! Please Log In again", 401)
    );
  }

  //5) next middleware will be called.
  //Grant Access to the next middleware
  req.user = CurrentUser;
  next();
});

//restrictTo('admin','teacher') middleware
exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    //roles ['admin','teacher] and role = 'user'
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };

//forgotPassword
exports.forgotPassword = catchAsync(async (req, res, next) => {
  //1) Get user based on the posted email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("No User exists with that email Address", 404));
  }
  //2) generate the random reset token
  const resetToken = user.createPasswordResetToken();

  //we are trying to save document but didn't provide the fields which we marked as required. so to avoid that will deactivate all the validations.
  await user.save({ validateBeforeSave: false });

  //3) send it to the user email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/users/resetPassword/${resetToken}`;

  //message
  const message = `Forgot your password? Submit a PATCH request with your new password and confirm Password to ${resetURL} . If you didn't forget the password then please ignore it.`;

  try {
    //awaiting the email function
    await sendEmail({
      email: user.email,
      subject: "Your Password reset token ( valid for 10 minutes)",
      message,
    });

    //sending some response
    res.status(200).json({
      status: "success",
      message: "Token send via Email!",
    });
  } catch (err) {
    //in case of error while sending email we modifies both properties to undefined.
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    //as we only modified now will save
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was a problem while sending the email", 500)
    );
  }
});

//resetPassword
exports.resetPassword = catchAsync(async (req, res, next) => {
  //1) get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token) //coming from url (:token)
    .digest("hex");

  //getting user from db based on the token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //2) set new password only if token has not expired and user exist.
  if (!user) {
    return next(new AppError("Token is invalid or Expired!", 400));
  }

  //updating the password in the database.
  user.password = req.body.password;
  user.cpassword = req.body.cpassword;
  //Deleting passwordResetToken and passwordResetExpires:
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  //As it just got modified only so now will also save it.
  await user.save();

  //3) update passwordChangedAt property for the user.

  //4) log the user in and send JWT
  createSendToken(user, 200, res);
});
