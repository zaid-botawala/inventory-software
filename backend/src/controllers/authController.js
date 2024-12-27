const bcrypt = require('bcryptjs'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating tokens
const User = require('../models/User'); // Import the User model

// Controller for user registration
exports.register = async (req, res) => {
  try {
    const { email, password, role } = req.body; // Get data from the request body
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const user = await User.create({ email, password: hashedPassword, role }); // Save the user to the database
    res.status(201).json({ message: 'User registered successfully', user }); // Send success response
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' }); // Handle errors
  }
};

// Controller for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Get login details from the request body
    const user = await User.findOne({ where: { email } }); // Find the user by email

    if (!user || !(await bcrypt.compare(password, user.password))) {
      // Check if user exists and passwords match
      return res.status(401).json({ error: 'Invalid credentials' }); // If not, return error
    }

    // Generate a JWT token with the user's ID and role
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token }); // Send the token in the response
  } catch (error) {
    res.status(500).json({ error: 'Login failed' }); // Handle errors
  }
};
