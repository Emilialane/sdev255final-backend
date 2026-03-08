const express = require('express');
const router = express.Router();

let courses = [];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// POST new course
router.post('/', (req, res) => {
  const course = req.body;
  courses.push(course);
  res.json(course);
});


// DELETE a course
router.delete('/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.json({ message: 'Course deleted' });
});

module.exports = router;