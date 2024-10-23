const express = require('express');
const cors = require('cors'); // Import cors
const connectionDB = require('./Config');
const Controller = require('./Controller/userController');
const dashboard = require('./Controller/dashBoard');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000
connectionDB(process.env.MONGO_URL)

// Use cors middleware
app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
    res.send("Hello");
});

app.post("/message",Controller)

app.get('/dashboard', dashboard )

app.listen(PORT, () => console.log(`The server is running on ${PORT}`));
