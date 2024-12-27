const { DataTypes } = require('sequelize'); // Import Sequelize data types
const sequelize = require('../config/db'); // Import the database connection

// Define the User model
const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING, // Email is a string
    allowNull: false, // Email cannot be null
    unique: true, // Email must be unique
  },
  password: {
    type: DataTypes.STRING, // Password is a string
    allowNull: false, // Password cannot be null
  },
  role: {
    type: DataTypes.ENUM('admin', 'manager', 'operator'), // User role can be 'admin', 'manager', or 'operator'
    defaultValue: 'operator', // Default role is 'operator'
  },
});

module.exports = User; // Export the model
