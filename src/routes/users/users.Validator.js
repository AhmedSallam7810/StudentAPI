const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["name", "password", "email"],
};

const validator = ajv.compile(schema);

module.exports = (req, res, nxt) => {
  if (validator(req.body)) {
    nxt();
  } else res.status(400).send("bad data !!");
};
