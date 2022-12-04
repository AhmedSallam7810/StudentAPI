module.exports = function asynFunction(routeHandler) {
  return async function (req, res, nxt) {
    try {
      await routeHandler(req, res);
    } catch (err) {
      nxt(err);
    }
  };
};
