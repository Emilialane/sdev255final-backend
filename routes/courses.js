const express = require('express');
const router = express.Router();

// Correct path to the model
const Course = require('../models/courses');  // must match filename exactly

router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

router.post('/', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

module.exports = router;
