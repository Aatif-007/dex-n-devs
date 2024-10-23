const mongoose = require("mongoose");

const connectionDB = async (url) => {
    try {
        const connect = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectionDB;
