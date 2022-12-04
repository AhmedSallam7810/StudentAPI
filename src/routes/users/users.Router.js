const usersController = require("./users.Controller");
const usersValidator = require("./users.Validator");
const express = require("express");

const router = express.Router();

router.post("/", usersValidator, usersController.usersRigester);

module.exports = router;
