// Controllers/transactionController.js
const User = require('../Models/userModel');

const deposit = async (req, res) => {
  try {
    const { accountNumber, amount } = req.body;

    // Find the user by account number
    const user = await User.findOne({ accountNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's account balance
    user.accountBalance += amount;

    // Add transaction record to transactions array
    user.transactions.push({
      amount,
      type: 'deposit'
    });

    // Save the updated user data
    await user.save();

    // Return the updated user object as response
    res.status(200).json({ message: 'Deposit successful', user });
  } catch (error) {
    console.error('Error depositing amount:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const transfer = async (req, res) => {
  const { fromAccountNumber, toAccountNumber, amount, narration } = req.body;

  try {
    // Find the sender and recipient by their account numbers
    const sender = await User.findOne({ accountNumber: fromAccountNumber });
    const recipient = await User.findOne({ accountNumber: toAccountNumber });

    if (!sender || !recipient) {
      return res.status(404).json({ error: 'Sender or recipient not found' });
    }

    // Check if the sender has sufficient balance
    if (sender.accountBalance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Deduct the transfer amount from the sender's account balance
    sender.accountBalance -= amount;

    // Add a transaction record for the outgoing transfer
    sender.transactions.push({
      amount: -amount,
      type: 'transfer',
      narration: `Transferred ${amount} to ${recipient.name} (${toAccountNumber}) - ${narration}`,
      timestamp: new Date()
    });

    // Add the transfer amount to the recipient's account balance
    recipient.accountBalance += amount;

    // Add a transaction record for the incoming transfer
    recipient.transactions.push({
      amount,
      type: 'transfer',
      narration: `Received ${amount} from ${sender.name} (${fromAccountNumber}) - ${narration}`,
      timestamp: new Date()
    });

    // Save the updated sender and recipient data
    await sender.save();
    await recipient.save();

    // Respond with a success message
    return res.status(200).json({ message: 'Transfer successful' });
  } catch (error) {
    console.error('Error transferring funds:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const purchaseAirtime = async (req, res) => {
  const { accountNumber, amount, network } = req.body;

  try {
    // Find the user by account number
    const user = await User.findOne({ accountNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if user has sufficient balance
    if (user.accountBalance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Deduct the airtime purchase amount from user's account balance
    user.accountBalance -= amount;

    // Add airtime purchase transaction to user's transaction history
    user.transactions.push({
      amount: -amount,
      type: 'airtime_purchase',
      narration: `Airtime purchase for ${network} network`,
      timestamp: new Date()
    });

    // Save the updated user data
    await user.save();

    // Respond with a success message
    return res.status(200).json({ message: 'Airtime purchase successful' });
  } catch (error) {
    console.error('Error purchasing airtime:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getNetworks = (req, res) => {
  const networks = ['MTN', 'GLO', 'AIRTEL', '9MOBILE'];
  res.status(200).json({ networks });
};

const getTransactionHistory = async (req, res) => {
  const { accountNumber } = req.params;

  try {
    // Find the user by account number
    const user = await User.findOne({ accountNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the transaction history for the user
    return res.status(200).json({ transactionHistory: user.transactions });
  } catch (error) {
    console.error('Error fetching transaction history:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { deposit, transfer, purchaseAirtime, getNetworks, getTransactionHistory };
