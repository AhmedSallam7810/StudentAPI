const Students = require("../../models/students.model");
const asynFunction = require("../../middlewares/asynFun");

addNewStudent = (req, res, nxt) => {
  let std = new Students({
    fn: req.body.fn,
    ln: req.body.ln,
    dp: req.body.dp,
    id: req.body.id,
  });
  std
    .save()
    .then(() => {
      res.send(std);
    })
    .catch((err) => {
      nxt(err);
    });
};

getStudentById = asynFunction(async (req, res) => {
  let std = await Students.findById(req.params.id);
  if (!std) {
    res.status(404).send("Student not found");
  } else {
    res.send(std);
  }
});

getAllStudents = asynFunction(async (req, res) => {
  let std = await Students.find();
  res.send(std);
});

updateStudent = asynFunction(async (req, res) => {
  let std = await Students.findOneAndUpdate(req.params.id, req.body, {
    returnOriginal: false,
  });
  if (!std) return res.status(404).send("not found");
  res.send(std);
});

removeStudent = asynFunction(async (req, res) => {
  let std = await Students.findByIdAndDelete(req.params.id);
  if (!std) return res.status(404).send("not found");
  res.send(std);
});

module.exports = {
  addNewStudent,
  getStudentById,
  getAllStudents,
  updateStudent,
  removeStudent,
};
