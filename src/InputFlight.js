// FlightInput.js

import React from 'react';
import './App.css'; // Import the FlightInput CSS file

const FlightInput = () => {
  const handleFlightInputChange = (e) => {
    // Handle changes in the flight input textbox
    const flightNumber = e.target.value;
    console.log('Flight Number:', flightNumber);
    // Perform any actions based on the flight number input
  };


  return (
    <div className="flight-selector" style={{ marginTop: '30px', marginLeft: '100px'}}>
      <label htmlFor="airportDropdown">Input Flight Number  </label>
      <div className="custom-input" style={{ marginTop: '30px'}}>
        <input
          type="text"
          id="flightInput"
          placeholder="Enter flight number"
          onChange={handleFlightInputChange}
          className="flight-input"
          style={{ border: 'none',  marginLeft: '50px' }}
        />
      </div>
    </div>
  );
};

export default FlightInput;
