const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

//MW
app.use(cors());

const vehicleData = [
  { latitude: 17.385044, longitude: 78.486671, timestamp: "2024-07-20T10:00:00Z" },
  { latitude: 17.385045, longitude: 78.486672, timestamp: "2024-07-20T10:00:05Z" },
  { latitude: 17.385050, longitude: 78.486680, timestamp: "2024-07-20T10:00:10Z" },
  
];

//routes
app.get('/', (req, res) => {
  res.json('Welcome to Vehicle movement app API');
});

//vehicle API
app.get('/api/vehicle', (req, res) => {
  res.json(vehicleData);
});

//Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
