const express = require("express");

//importing user controller
const userController = require("../Controllers/userController");
const authController = require("../Controllers/authController");

//routes
const router = express.Router();

//authController routes
router.post("/signup", authController.signup);
router.post("/adminSignup", authController.signup);
router.post("/login", authController.login);
router.post("/forgotpassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

//protect middleware -- protect all routes after this middleware
router.use(authController.protect);

//get all users
router.get("/", authController.restrictTo("user"), userController.getAllUsers);

//exporting
module.exports = router;
