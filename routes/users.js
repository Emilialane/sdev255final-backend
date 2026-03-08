const express = require('express');
const router = express.Router();
const User = require('../models/users'); // lowercase users

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json({ message: 'User registered', user });
});

module.exports = router;
