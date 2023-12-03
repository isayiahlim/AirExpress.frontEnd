import React, { useState } from 'react';
import axios from 'axios';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log('got coords');
          setLocation({ latitude, longitude });
          setButtonVisible(false); // Hide the button after obtaining the location

          // Send the obtained location to backend
          sendLocationToBackend({ latitude, longitude });

        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
    }
  };

// Function to send location data to the backend and trigger route calculation
const sendLocationToBackend = async (latitude, longitude) => {
  const backendApiUrl = 'http://localhost:5000/getRoute';

  // JavaScript object to send as the request body
  const requestData = {
    latitude,
    longitude,
  };

  // Make a POST request to the backend API
  axios.post(backendApiUrl, requestData)
    .then(console.log("POSTING"))
    .then(response => {
      if (response.status === 200) {
        console.log('User location sent to the backend successfully.');
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Error sending user location:', error);
    });
};

  return (
    <div className="location-selector" style={{ marginTop: '50px'}}>
      {buttonVisible && <button className="button" onClick={handleGetLocation} >Get My Location</button>}
      {location && (
        <div style={{ marginTop: '30px' }}>
          <p>Starting Location: {location.latitude}, {location.longitude}</p>
        </div>
      )}
    </div>
  );
  
};

export default LocationComponent;
