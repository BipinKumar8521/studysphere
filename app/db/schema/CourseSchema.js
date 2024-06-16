const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        // enum: ["JEE", "NEET", "Boards"], 
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

module.exports = Course;
