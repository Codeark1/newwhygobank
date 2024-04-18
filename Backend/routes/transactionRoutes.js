// Routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const {
  deposit,
  transfer,
  purchaseAirtime,
  getNetworks,
  getTransactionHistory
} = require('../controllers/transactionController');

// Deposit route
router.post('/deposit', deposit);

// Transfer route
router.post('/transfer', transfer);

// Airtime purchase route
router.post('/purchase-airtime', purchaseAirtime);

// Network providers route
router.get('/networks', getNetworks);

// Transaction history route
router.get('/transaction-history/:accountNumber', getTransactionHistory);

module.exports = router;
