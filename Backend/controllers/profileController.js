// Controllers/profileController.js
const User = require('../Models/userModel');

const updateProfile = async (req, res) => {
  const { accountNumber, name, email, phoneNumber } = req.body;
  
  try {
    // Find the user by account number
    const user = await User.findOne({ accountNumber });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user's personal information
    user.name = name;
    user.email = email;
    user.phoneNumber = phoneNumber;

    // Save the updated user data
    await user.save();

    // Send a notification to the user
    const notificationMessage = 'Your profile information has been updated.';
    
    // Respond with a success message and notification
    return res.status(200).json({ message: 'Profile updated successfully', notification: notificationMessage });
  } catch (error) {
    console.error('Error updating profile:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { updateProfile };
