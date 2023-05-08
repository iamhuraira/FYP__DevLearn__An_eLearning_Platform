const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./Controllers/errorController");

const app = express(); //created app variable and assigning the result of calling express

//importing routes
const userRouter = require("./Routes/userRoutes");

//GLOBAL MIDDLEWARES

//Body parser -- reading data from body into req.body
app.use(express.json({ limit: "10kb" })); //limiting body size to 10KB.

//morgan middleware
if (process.env.NODE_ENV === "development") {
  //Morgan Middleware
  app.use(morgan("dev"));
}

//Routes
app.use("/api/v1/users", userRouter); //middleware

//Defining handler for the routes that are not cached by our routes.
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//global middleware for error handling
app.use(globalErrorHandler);

//exporting app to server.js
module.exports = app;
