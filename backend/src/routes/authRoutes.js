const express = require('express'); // Import Express
const { register, login } = require('../controllers/authController'); // Import auth controllers
const router = express.Router(); // Create a new router

// Route for user registration
router.post('/register', register);

// Route for user login
router.post('/login', login);

module.exports = router; // Export the router
