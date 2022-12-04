const express = require("express");
const studentsController = require("./students.Controller");
const studentsValidator = require("./students.Validator");
const idValidator = require("../../middlewares/idValidator");
const auth = require("../../middlewares/auth");
const router = express.Router();

router.param("id", idValidator);

router.post("/", studentsValidator, auth, studentsController.addNewStudent);
router.get("/", studentsController.getAllStudents);
router.get("/:id", studentsController.getStudentById);
router.put("/:id", auth, studentsController.updateStudent);
router.delete("/:id", auth, studentsController.removeStudent);

module.exports = router;
