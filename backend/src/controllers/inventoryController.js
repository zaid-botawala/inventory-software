const Inventory = require('../models/Inventory'); // Import the Inventory model

// Controller to fetch all inventory items
exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findAll(); // Fetch all inventory items
    res.json(inventory); // Send inventory data in response
  } catch (error) {
    res.status(500).json({ error: 'Error fetching inventory' }); // Handle errors
  }
};

// Controller to add a new inventory item
exports.addInventory = async (req, res) => {
  try {
    const { sku, name, quantity, price } = req.body; // Get data from the request body
    const item = await Inventory.create({ sku, name, quantity, price }); // Create a new inventory item
    res.status(201).json({ message: 'Inventory added', item }); // Send success response
  } catch (error) {
    res.status(500).json({ error: 'Error adding inventory' }); // Handle errors
  }
};
