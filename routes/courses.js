const express = require('express');
const router = express.Router();

// Must exactly match filename in models/
const Course = require('../models/courses'); // lowercase 'courses'

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