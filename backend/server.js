// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());

// Load dummy data from JSON file
const vehicleData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
let currentIndex = 0;

// API endpoint to return vehicle's current location
app.get('/vehicle-location', (req, res) => {
    if (currentIndex >= vehicleData.length) {
        currentIndex = 0; // Reset to simulate continuous movement
    }
    res.json(vehicleData[currentIndex]);
    currentIndex++;
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
