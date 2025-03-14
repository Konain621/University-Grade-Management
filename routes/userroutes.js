const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const authmiddleware = require('../middleware/authmiddleware');
const checkrole = require('../middleware/checkrole');

// Register a new user
router.post('/register', usercontroller.register);

// Login a user
router.post('/login', usercontroller.login);

// Admin-only route
router.get('/admin', authmiddleware, checkrole(['admin']), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

// Teacher-only route
router.get('/teacher', authmiddleware, checkrole(['admin', 'teacher']), (req, res) => {
  res.json({ message: 'Welcome, teacher!' });
});

// Student-only route
router.get('/student', authmiddleware, checkrole(['admin', 'teacher', 'student']), (req, res) => {
  res.json({ message: 'Welcome, student!' });
});

module.exports = router;