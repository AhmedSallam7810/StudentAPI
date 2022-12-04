const mongoose = require("mongoose");

studentSchema = new mongoose.Schema({
  fn: {
    type: String,
    required: true,
    trim: true,
  },
  ln: {
    type: String,
    required: true,
    default: "NAN",
    trim: true,
  },
  dp: {
    type: String,
    minlength: 2,
    default: "CS",
    trim: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("students", studentSchema);
