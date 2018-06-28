const router = require('express').Router();
const bookRoutes = require('./books');

// Book routes
router.use('/books', bookRoutes);

// Magazine routes


module.exports = router;