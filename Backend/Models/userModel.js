const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },
  accountNumber: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Function to generate 11-digit account number from phone number
userSchema.pre('save', function(next) {
  if (!this.accountNumber) {
    const phoneNumber = this.phoneNumber;
    const accountNumber = phoneNumber.slice(-11);
    this.accountNumber = accountNumber.padStart(11, '0');
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
