
# Vehicle Movement on a Map

This web application displays a vehicle moving on a map in real-time using the Leaflet mapping library. The vehicle's current location and the route it follows are shown, with the data fetched from a backend API.

## Demo

You can view the live demo of the project [here](#).

## Features

- Displays a vehicle icon on a map.
- Real-time vehicle movement updates every few seconds.
- Route polyline is drawn to show the path taken by the vehicle.
- Backend API provides vehicle location and route data.

## Tech Stack

- **Frontend:** React, Leaflet (for mapping), Axios (for making API requests)
- **Backend:** Node.js, Express (for API creation)
- **Mapping Library:** Leaflet (alternative to Google Maps)
- **Deployment:** Vercel/Netlify/Render (if deployed)

## Installation

Follow the steps below to set up the project locally.

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/vehicle-movement-map.git
```

### 2. Navigate to the project directory:

```bash
cd vehicle-movement-map
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Start the development server:

```bash
npm start
```

This will start the React app on `http://localhost:3000` and the backend server on `http://localhost:5000` (or the appropriate port).

### 5. Backend API Setup

Ensure the backend API is running by following these steps:

```bash
cd backend
npm install
npm start
```

The API will be available at `http://localhost:5000/api/vehicle`.

## API Endpoints

### `GET /api/vehicle`

This endpoint provides vehicle movement data in JSON format.

#### Response Format:

```json
[
  {
    "latitude": 17.385044,
    "longitude": 78.486671,
    "timestamp": "2024-07-20T10:00:00Z"
  },
  {
    "latitude": 17.385045,
    "longitude": 78.486672,
    "timestamp": "2024-07-20T10:00:05Z"
  },
  
]
```

## Project Structure

```plaintext
vehicle-movement-map/
│
├── backend/                   # Backend API code
│   ├── server.js              # Main server file
│   └── vehicleData.json       # Dummy vehicle data
│
├── frontend/                  # Frontend React app
│   ├── public/                # Public assets (index.html)
│   └── src/                   # React components and source code
│       ├── components/        # Reusable UI components
│       ├── pages/             # Page components
│       ├── App.js             # Main app component
│       └── index.js           # Entry point for React app
│
├── .gitignore                 # Git ignore file
├── package.json               # Project dependencies and scripts
└── README.md                  # This README file
```



