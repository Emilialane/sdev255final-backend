const express = require('express');
const router = express.Router();

let users = [];

// register user
router.post('/register', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json({ message: "User registered", user });
});

// login user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid login" });
  }

  res.json({ message: "Login successful", user });
});

module.exports = router;

