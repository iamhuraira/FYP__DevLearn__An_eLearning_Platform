//importing AppError class
const AppError = require("../utils/appError");

//handling invalid ID
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

//handling Duplicate Fields
const handleDuplicateFieldsDB = (err) => {
  const value = err.message.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate Field Value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

//handling Duplicate Fields
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid Input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

//Invalid Token
const handleJWTError = () =>
  new AppError("Invalid Token! Please Log In again", 401);

//Expired Token
const handleJWTExpiredError = () =>
  new AppError("Your token has expired! Please Log In again.", 401);

//Development Function
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

//Production Function
const sendErrorProd = (err, res) => {
  //in case of operational error, send this to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    //in case of programming error or unknown errors, send this to client
  } else {
    //1) log error for developer
    //console.error('ERROR', err);
    //2) send generic message
    res.status(500).json({
      status: "error",
      message: "Something went wrong!",
    });
  }
};

//error handling middleware
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    if (err.name === "CastError") err = handleCastErrorDB(err);

    if (err.code === 11000) err = handleDuplicateFieldsDB(err);

    if (err.name === "ValidationError") err = handleValidationErrorDB(err);

    if (err.name === "JSONWebTokenError") err = handleJWTError();

    if (err.name === "TokenExpiredError") err = handleJWTExpiredError();

    sendErrorProd(err, res);
  }
};
