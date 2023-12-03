import './App.css';
import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight';
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';

const TitleComponent = () => {
  return (
    <div>
      {/* Header */}
      <header className="title-header">
        <h1>AirExpress</h1>
      </header>

      {/* Location Component */}
      <div className="flight-selector">
        <LocationComponent />
      </div>

      {/* Info Text */}
      <div className="info-text">
        <p>Place in your info</p>
      </div>

      {/* Airport Dropdown */}
      <div className="input-box">
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '200px' }}>Place in your info</p>
          <div style={{ marginBottom: '30px'}}>
            <AirportDropdown />
          </div>
        </div>

        {/* Flight Input */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '160px' }}>Input Flight Number</p>
          <div className="flight-selector" style={{ marginBottom: '8px'}} >
            <FlightInput />
          </div>
        </div>

        {/* Drive Checkbox */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '300px' }}></p>
          <div className="flight-selector">
            <DriveCheckBox />
          </div>
        </div>

        {/* TSA Checkbox */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginLeft: '320px' }}></p>
          <div className="flight-selector">
            <TsaCheckBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
