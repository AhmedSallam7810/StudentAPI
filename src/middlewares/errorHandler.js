module.exports = (err, req, res, nxt) => {
  let arr = [];
  for (e in err.errors) {
    arr.push(err.errors[e].message);
  }
  return res.status(500).send(arr);
};
