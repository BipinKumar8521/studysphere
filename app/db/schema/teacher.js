const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  highestQualification: {
    type: String,
    required: true,
  },
  teachingInterest: {
    type: [String],
    required: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Teacher =
  mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
