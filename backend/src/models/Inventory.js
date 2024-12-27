const { DataTypes } = require('sequelize'); // Import Sequelize data types
const sequelize = require('../config/db'); // Import the database connection

// Define the Inventory model
const Inventory = sequelize.define('Inventory', {
  sku: {
    type: DataTypes.STRING, // SKU is a string
    allowNull: false, // SKU cannot be null
    unique: true, // SKU must be unique
  },
  name: {
    type: DataTypes.STRING, // Name is a string
    allowNull: false, // Name cannot be null
  },
  quantity: {
    type: DataTypes.INTEGER, // Quantity is an integer
    defaultValue: 0, // Default quantity is 0
  },
  price: {
    type: DataTypes.FLOAT, // Price is a floating-point number
    allowNull: false, // Price cannot be null
  },
});

module.exports = Inventory; // Export the model
