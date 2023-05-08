//Error class so don't have to write it each time in function.
class AppError extends Error {
  constructor(message, statusCode) {
    super(message); //it also contains message property.

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
