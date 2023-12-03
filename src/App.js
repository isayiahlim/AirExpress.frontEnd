import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight';
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';
import Calculate from './Calculations';
import './styles.css';

const TitleComponent = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F3F3F3' }} className="Quicksand">
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
        <p>Place in your Information</p>
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
          <p style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '130px' }}></p>
          <div className="flight-selector">
            <DriveCheckBox />
          </div>
        </div>

        {/* TSA Checkbox */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <p style={{ fontSize: '30px', fontWeight: 'bold' }}></p>
          <div className="flight-selector">
            <TsaCheckBox />
          </div>
        </div>

        {/* Calculate */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
          <div style={{ marginBottom: '30px', marginRight: '100px' }}>
            <Calculate />
          </div>
        </div>
      </div>

      {/* Three boxes aligned horizontally */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {/* Box 1 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '200px', height: '150px', marginRight: '10px' }}>
          {/* Your content for Box 1 */}
          {/* Example content: */}
          <h2>Box 1</h2>
        </div>

        {/* Box 2 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '200px', height: '150px', marginRight: '10px' }}>
          {/* Your content for Box 2 */}
          {/* Example content: */}
          <h2>Box 2</h2>
        </div>

        {/* Box 3 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '200px', height: '150px' }}>
          {/* Your content for Box 3 */}
          {/* Example content: */}
          <h2>Box 3</h2>
        </div>
      </div>

      {/* Bottom Box */}
      <div style={{ backgroundColor: '#A4B7FF', padding: '20px 0', marginTop: '100px' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>I hope this is useful</p>
      </div>
    </div>
  );
};

export default TitleComponent;
