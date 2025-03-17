const userservice = require('../services/userservice');

// Register a new user
const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await userservice.registerUser(username, password, role);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userservice.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// File: controllers/usercontroller.js

const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// File: controllers/usercontroller.js

const getStudentProfile = async (req, res) => {
  try {
    const student = await User.findById(req.user.userId); // Get the student's ID from the JWT payload
    if (!student) throw new Error('Student not found');
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = { register, login, getAllUsers, getAllStudents, getStudentProfile };