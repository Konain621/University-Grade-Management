// File: middleware/authmiddleware.js
const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract the token from the header
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authmiddleware;