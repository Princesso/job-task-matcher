const User = require('../models/User');

exports.signup = async (req, res) => {
  const { name, email, password, role, skills, profileDescription } = req.body;
  try {
    const newUser = new User({ name, email, password, role, skills, profileDescription });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = (req, res) => {
  // Implement login logic (e.g., checking password, JWT token)
  res.status(200).json({ message: 'Login successful!' });
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
