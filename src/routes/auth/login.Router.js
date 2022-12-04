const express = require("express");
const loginController = require("./login.Controller");
const loginValidator = require("./login.Validator");

const router = express.Router();

router.post("/", loginValidator, loginController);

module.exports = router;
