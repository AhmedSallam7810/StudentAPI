const usersModel = require("../../models/users.Model");
const bcrypt = require("bcrypt");
const asynFunction = require("../../middlewares/asynFun");

usersRigester = asynFunction(async (req, res, nxt) => {
  //check if user already exists
  const user = await usersModel.findOne({ email: req.body.email });

  if (user) {
    return res.status(403).send("user already exists !");
  }

  //hasing password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  //add new user
  newUser = new usersModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await newUser.save();

  //send token
  const Token = newUser.genToken();

  return res.header("X-auth-token", Token).send("user added succefully !");
});

module.exports = {
  usersRigester,
};
