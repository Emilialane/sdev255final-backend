const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const coursesRoute = require('./routes/courses');
const usersRoute = require('./routes/users');

app.use('/courses', coursesRoute);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sdev255';
mongoose.connect(mongoUri)