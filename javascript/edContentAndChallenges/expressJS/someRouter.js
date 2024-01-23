// Import Express
const express = require('express');
// Create an instance of an Express Router
const router = express.Router();

// Configure routes attached to the router instance
router.get('/', (request, response) => {
    response.send("This is from a route! Tada!");
});

router.get('/namedRoute', (request, response) => {
    response.send("This is from a named route! Tada!");
});

// Export the router so that other files can use it:
module.exports = router;