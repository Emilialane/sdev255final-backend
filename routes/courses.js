const express = require('express');
const router = express.Router();
const course = require('../models/courses');

router.get('/', async (req, res) => {
  const courses = await course.find();
  res.json(courses);
});

router.post('/', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.json(course);
});

module.exports = router;