const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    fn: {
      type: "string",
    },
    ln: {
      type: "string",
    },
    dp: {
      type: "string",
    },
    id: {
      type: "integer",
    },
  },
  required: ["fn", "ln", "id"],
};

validator = ajv.compile(schema);
module.exports = (req, res, nxt) => {
  const valid = validator(req.body);
  if (!valid) res.status(400).send("student data isn't correct !");
  nxt();
};
