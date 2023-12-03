
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
      <div className="flight-selector">
        <LocationComponent />
      </div>
      <div className="info-text">
        <p>Place in your info</p>
      </div>
      <div className="input-box">
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', marginRight: '20px' }}>Place in your info</p>
          <div style={{ marginBottom: '30px' }}>
            <AirportDropdown />
          </div>
        </div>
        <div className="flight-selector">
          <FlightInput />
        </div>
        <div className="flight-selector">
        <DriveCheckBox />
        </div>
        <div className="flight-selector">
          <TsaCheckBox />
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
