const userModel = require("../Models/userModel");

const Controller = async (req, res) => {
    try {
        const { name, email, contact, message } = req.body;

        // Check for mandatory fields
        if (!name || !email || !contact || !message) {
            return res.status(400).json({
                message: "All fields are mandatory, Bruh!",
                success: false,
            });
        }

        // Create a new message instance
        const newMessage = new userModel({
            name,
            email,
            contact,
            message,
        });

        // Save the message to the database
        await newMessage.save();

        res.status(201).json({
            message: "Message sent successfully!",
            success: true, // Change success to true
            data: newMessage,
        });
    } catch (error) {
        console.error(error); // Optional: Log the error for debugging
        res.status(500).json({
            message: "Error while sending message",
            success: false,
            error: error.message,
        });
    }
};

module.exports = Controller;
