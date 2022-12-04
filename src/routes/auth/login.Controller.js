const usersModel = require("../../models/users.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const asynFunction = require("../../middlewares/asynFun");

loginFun = asynFunction(async (req, res) => {
  //check if email(user) found
  const user = await usersModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send(`Invalid email`);
  }
  //check if password correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).send("Invalid password");
  }
  //send token
  const token = user.genToken();

  res.header("X-auth-token", token).send("login in successfully !!");
});

module.exports = loginFun;
