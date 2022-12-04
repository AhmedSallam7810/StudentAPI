const mongoose = require("mongoose");
const valid = require("validator");
const jwt = require("jsonwebtoken");
const config = require("config");

usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validat: {
      validator: (val) => {
        return valid.isEmail(val);
      },
      message: "not valid email",
    },
  },
  isAdmin: { type: Boolean },
  password: {
    type: String,
    required: true,
  },
});

usersSchema.methods.genToken = function () {
  const token = jwt.sign(
    { userid: this._id, adminRole: this.isAdmin },
    config.get("jwtsec")
  );

  return token;
};

module.exports = mongoose.model("users", usersSchema);
