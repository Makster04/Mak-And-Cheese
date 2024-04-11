// headEditorCommunication.js

// Import necessary modules
const nodemailer = require('nodemailer'); // Assuming you're using nodemailer for sending emails
const { User } = require('./models'); // Assuming you have a User model

// Function to send email to user
async function sendEmailToUser(userEmail, message) {
    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your Gmail email address
            pass: 'your-email-password' // Your Gmail password
        }
    });

    // Define email options
    let mailOptions = {
        from: 'your-email@gmail.com', // Sender address
        to: userEmail, // Recipient address
        subject: 'Notification from Head Editor', // Email subject
        text: message // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
}

// Function to notify user
async function notifyUser(userId, message) {
    try {
        // Retrieve user's email from the database
        const user = await User.findOne({ where: { id: userId } });
        if (user) {
            // Send email to the user
            await sendEmailToUser(user.email, message);
            console.log('Notification sent to user:', user.email);
        } else {
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error notifying user:', error);
    }
}

// Export the functions if needed
module.exports = {
    sendEmailToUser,
    notifyUser
};
