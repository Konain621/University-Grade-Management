const userservice = require('../services/userservice');

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const user = await userservice.registerUser(username, password, role);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userservice.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };