const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseName: String,
  description: String,
  subject: String,
  credits: Number,
  teacherId: String
});

module.exports = mongoose.model('Course', CourseSchema);