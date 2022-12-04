const http = require("http");
const mongoose = require("mongoose");
const app = require("./app.js");
PORT = process.env.PORT || 5000;

process.on("uncaughtException", (excep) => {
  console.log("uncaught Exception");
  process.exit(1);
});
process.on("unhandledRejection", () => {
  console.log("unhandled Rejection");
  process.exit(1);
});

mongoose
  .connect("mongodb://localhost:27017/School", {})
  .then(() => {
    console.log("conneted succesfully ..");
  })
  .catch((err) => {
    console.log(err);
  });

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
