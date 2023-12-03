// FlightInput.js

import React from 'react';
import './App.css'; // Import the FlightInput CSS file

const FlightInput = ({ onFlightInputChange }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onFlightInputChange(inputValue);
  };


  return (
    <div className="flight-selector" style={{ marginTop: '30px', marginLeft: '100px'}}>
      <div className="custom-input" style={{ marginTop: '30px'}}>
        <input
          type="text"
          id="flightInput"
          placeholder="Enter flight number"
          onChange={handleInputChange}
          className="flight-input"
          style={{ border: 'none',  marginLeft: '50px' }}
        />
      </div>
    </div>
  );
};

export default FlightInput;
