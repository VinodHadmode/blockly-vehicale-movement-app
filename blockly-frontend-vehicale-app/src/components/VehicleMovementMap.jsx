import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import CarIcon from "../assets/bluecar.png"

const baseUrl=`https://backend-vehicale-movement-app.onrender.com`

const VehicleMovementMap = () => {
  const initialPosition = [17.385044, 78.486671];
  const [vehiclePosition, setVehiclePosition] = useState(initialPosition);
  const [route, setRoute] = useState([]);
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    // Fetch vehicle data from the backend
    const fetchVehicleData = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/vehicle`);  // Replace with your backend API endpoint
        const data = await response.json();
        setVehicleData(data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicleData();
  }, []);

  useEffect(() => {
    if (vehicleData.length > 0) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < vehicleData.length) {
          const { latitude, longitude } = vehicleData[index];
          setVehiclePosition([latitude, longitude]);
          setRoute((prevRoute) => [...prevRoute, [latitude, longitude]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1000);  // Update position every second

      return () => clearInterval(interval);
    }
  }, [vehicleData]);  // This effect depends on the vehicleData

  const carIcon = new L.Icon({
    iconUrl: CarIcon,  
    iconSize: [60, 60],        
    iconAnchor: [16, 32],     
  });

  return (
    <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Route polyline */}
      <Polyline positions={route} color="blue" />

      {/* Vehicle marker */}
      <Marker position={vehiclePosition} icon={carIcon}>
        <Popup>
          <div>
            <h3>Vehicle Details</h3>
            <p>Latitude: {vehiclePosition[0]}</p>
            <p>Longitude: {vehiclePosition[1]}</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default VehicleMovementMap;
