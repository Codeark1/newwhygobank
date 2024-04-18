// Routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, test } = require('../controllers/authController');

router.post('/login', login);
router.post('/', test);

module.exports = router;
