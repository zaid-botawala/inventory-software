const express = require('express'); // Import Express
const { getInventory, addInventory } = require('../controllers/inventoryController'); // Import inventory controllers
const { verifyToken, restrictTo } = require('../middlewares/authMiddleware'); // Import middlewares
const router = express.Router(); // Create a new router

// Route to fetch inventory (protected)
router.get('/', verifyToken, getInventory);

// Route to add inventory (restricted to 'admin' and 'manager' roles)
router.post('/', verifyToken, restrictTo(['admin', 'manager']), addInventory);

module.exports = router; // Export the router
