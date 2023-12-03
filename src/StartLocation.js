import React, { useState } from 'react';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setButtonVisible(false); // Hide the button after obtaining the location
        },
        (error) => {
          console.error('Error getting location:', error);
          // Handle errors such as user denying location access
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser');
      // Handle cases where geolocation is not supported
    }
  };

  return (
    <div className="location-selector" style={{ marginTop: '30px', marginLeft: '100px' }}>
      <p>Click this for location</p>
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
