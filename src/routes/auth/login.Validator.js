const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["email", "password"],
};

const validator = ajv.compile(schema);

//validation middleware

module.exports = (req, res, nxt) => {
  if (validator(req.body)) {
    return nxt();
  }
  res.status(400).send("bad data !!");
};
