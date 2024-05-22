const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: String,
    required: true,
  },
  schoolOrCollegeName: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
  targetExam: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = Student;
