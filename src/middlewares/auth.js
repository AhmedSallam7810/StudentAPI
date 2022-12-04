const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, nxt) => {
  //check if token found
  const token = req.header("X-auth-token");
  if (!token) return res.status(401).send("Access denied...");

  //check if token correct
  try {
    uncodedToken = jwt.verify(token, config.get("jwtsec"));
  } catch (err) {
    res.status(401).send("access denied.."); //uncorrect token
  }

  //check if user admin
  if (!uncodedToken.adminRole) res.status(401).send("access denied..");
  nxt();
};
