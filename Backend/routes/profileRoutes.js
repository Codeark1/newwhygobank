// Routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/profileController');

// Route to update personal information
router.put('/profile', updateProfile);

module.exports = router;
