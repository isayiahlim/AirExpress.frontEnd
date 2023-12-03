import './App.css';
import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight';
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';

const TitleComponent = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#E5E5E5' }}>
      {/* Header */}
      <header className="title-header">
        <h1>AirExpress</h1>
      </header>

      {/* Location Component */}
      <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
        <div style={{ marginBottom: '30px', marginRight: '100px' }}>
          <LocationComponent />
        </div>
      </div>

      {/* Info Text */}
      <div className="info-text" style={{ margin: '0 auto' }}>
        <p>Place in your Info</p>
      </div>

      {/* Airport Dropdown */}
      <div className="input-box" style={{ margin: '0 auto' }}>
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '20px' }}>Choose your Airport</p>
          <div style={{ marginBottom: '30px' }}>
            <AirportDropdown />
          </div>
        </div>

        {/* Flight Input */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '20px' }}>Input Flight Number</p>
          <div className="flight-selector" style={{ marginBottom: '8px' }}>
            <FlightInput />
          </div>
        </div>

        {/* Drive Checkbox */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '20px', marginBottom: '130px' }}></p>
          <div className="flight-selector">
            <DriveCheckBox />
          </div>
        </div>

        {/* TSA Checkbox */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '20px' }}></p>
          <div className="flight-selector">
            <TsaCheckBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleComponent;
