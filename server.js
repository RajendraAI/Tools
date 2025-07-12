// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost/social-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User model
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
});

// Routes
app.post('/api/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
