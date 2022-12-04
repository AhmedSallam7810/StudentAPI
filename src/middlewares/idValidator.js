module.exports = (req, res, nxt, val) => {
  if (val.match(/^[0-9a-fA-F]{24}$/)) nxt();
  else res.status(400).send("Invalid id !!");
};
