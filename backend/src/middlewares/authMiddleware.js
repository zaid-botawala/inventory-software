const jwt = require('jsonwebtoken'); // For verifying tokens

// Middleware to verify the JWT token
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Get the token from request headers
  if (!token) return res.status(403).json({ error: 'Token is required' }); // If no token, return error

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
    req.user = decoded; // Attach the decoded user info to the request
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' }); // Handle invalid tokens
  }
};

// Middleware to restrict access to specific roles
exports.restrictTo = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      // Check if user's role is in the allowed roles
      return res.status(403).json({ error: 'Access denied' }); // If not, deny access
    }
    next(); // Otherwise, proceed
  };
};
