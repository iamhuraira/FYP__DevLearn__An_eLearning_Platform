const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  //creating user
  const newUser = await User.find();

  res.status(200).json({
    //JSEND FORMAT
    status: "success",
    //sending token back to client
    data: {
      user: newUser,
    },
  });
};
