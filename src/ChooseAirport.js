// AirportDropdown.js

import React from 'react';

const AirportDropdown = () => {
  const airports = [
    { id: 1, name: 'SeaTac' },
    { id: 2, name: 'San Francisco' },
    { id: 3, name: 'Los Angelss' },
    // Add more airports as needed
  ];

  const handleChange = (e) => {
    // Handle selected airport change if needed
    const selectedAirportId = e.target.value;
    console.log('Selected Airport ID:', selectedAirportId);
    // Perform any actions based on the selected airport
  };

  return (
    <div className="airport-selector" style={{ marginTop: '50px', marginLeft: '100px'}}>
      <div className="custom-dropdown" style={{ marginTop: '30px'}}>
        <select id="airportDropdown" style={{ border: 'none',  marginLeft: '50px' }} onChange={handleChange}>
          <option value="">Select an airport</option>
          {airports.map((airport) => (
            <option key={airport.id} value={airport.id}>
              {airport.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AirportDropdown;
