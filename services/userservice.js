// File: services/userservice.js
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = async (username, password, role = 'student') => {
  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
  const user = new User({ username, password: hashedPassword, role });
  return await user.save(); // Save the user to the database
};

// Login a user
const loginUser = async (username, password) => {
  const user = await User.findOne({ username }); // Find the user by username
  if (!user) throw new Error('Invalid username or password');

  const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
  if (!isMatch) throw new Error('Invalid username or password');

  // Generate a JWT token
  const token = jwt.sign(
    { userId: user._id, role: user.role }, // Payload
    process.env.JWT_SECRET, // Secret key from environment variable
    { expiresIn: '1h' } // Token expiration time
  );

  return token;
};

module.exports = { registerUser, loginUser };