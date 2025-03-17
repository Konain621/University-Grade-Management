const bcrypt = require('bcryptjs');
const User = require('../models/users');
const jwt = require('jsonwebtoken');

const registerUser = async (username, password, role = 'student') => {
const hashedpassword = await bcrypt.hash(password, 10);
const user = new User ({ username, password: hashedpassword, role });
return await user.save();
};

const loginUser = async (username, password) => {
  console.log("username", username);
  console.log("password", password);
  const user = await User.findOne({ username });
  if (!user) throw new Error ('Username not found');

  console.log("user", user);

  const hashedPassword= await bcrypt.hash(password, 10);
  console.log('hashedpassword', hashedPassword);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error ('Invalid password');

  const token = jwt.sign(
    { userID: user ._id, role: user.role },
    process.env.JWT_SECRET,
    {expiresIn: '1h'}
  );
    return token;
    }
  
module.exports = { registerUser, loginUser };