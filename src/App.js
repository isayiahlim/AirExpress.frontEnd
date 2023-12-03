
import './App.css';
import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight'
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';


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
      <div className="flight-selector">
        <LocationComponent />
      </div>
      <div className="flight-selector">
        <DriveCheckBox />
      </div>
      <div className="flight-selector">
        <TsaCheckBox />
      </div>
    </div>
  );
};

export default TitleComponent;
