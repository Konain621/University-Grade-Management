const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');
const authmiddleware = require('../middleware/authmiddleware');
const checkrole = require('../middleware/checkrole');

// Register a new user
router.post('/register', usercontroller.register);

// Login a user
router.post('/login', usercontroller.login);

// Admin-only route: Get all users
router.get('/admin/users', authmiddleware, checkrole(['admin']), usercontroller.getAllUsers);

// Teacher-only route: Get all students' records
router.get('/teacher/students', authmiddleware, checkrole(['teacher']), usercontroller.getAllStudents);

// Student-only route: Get their own record
router.get('/student/profile', authmiddleware, checkrole(['student']), usercontroller.getStudentProfile);

module.exports = router;