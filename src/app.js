const express = require("express");
const studentsRouter = require("./routes/students/students.Router");
const usersRouter = require("./routes/users/users.Router");
const loginRouter = require("./routes/auth/login.Router");
const errorHandlerMW = require("./middlewares/errorHandler");
const adminRouter = require("./routes/admin/admin.Router");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students", studentsRouter);
app.use("/rigester", usersRouter);
app.use("/login", loginRouter);
app.use("/admin", adminRouter);

//error handler middleware
app.use(errorHandlerMW);

module.exports = app;
