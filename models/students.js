const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    enrolledDate: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model("student", studentSchema);