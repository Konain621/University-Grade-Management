const express = require('express');
const router = express.Router();
const gradecontroller = require('../controllers/gradecontroller');
const authmiddleware = require('../middleware/authmiddleware');
const checkrole = require('../middleware/checkrole');

// Add a grade (admin-only route)
router.post('/', authmiddleware, checkrole(['admin']), gradecontroller.CreateGrade);

router.get('/', authmiddleware, checkrole(['admin']), gradecontroller.getAllGrades);

module.exports = router;