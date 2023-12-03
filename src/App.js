
import './App.css';
import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight'


const TitleComponent = () => {
  return (
    <div>
      <header className="title-header">
        <h1>AirExpress</h1>
      </header>
      <div className="dropdown-container">
        <AirportDropdown />
      </div>
      <div className="flight-selector">
        <FlightInput />
      </div>
    </div>
  );
};

export default TitleComponent;
