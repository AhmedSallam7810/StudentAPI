const usersModel = require("../../models/users.Model");
const asynFunction = require("../../middlewares/asynFun");

addAdmin = asynFunction(async (req, res) => {
  console.log(req.params.id);
  let std = await usersModel.findByIdAndUpdate(
    req.params.id,
    { isAdmin: true },
    {
      returnOriginal: false,
    }
  );
  if (!std) res.status(404).send("user not found..");
  res.send("user is set admin successfully..");
});

module.exports = addAdmin;
