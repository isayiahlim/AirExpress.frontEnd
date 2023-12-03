import './App.css';
import React from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight';
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';
import Calculate from './Calculations';

const TitleComponent = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F3F3F3' }}>
      {/* Header */}
      <header className="title-header">
        <h1 style = {{fontSize : 115}}> -- AirExpress -- </h1>
        <p style = {{fontSize : 30}}> Saving Time For Travelers Since 2023 </p>
      </header>

      <header className='box'>
        <h1 style = {{fontSize : 5}}> </h1>
      </header>

      {/*Description*/}
      <body style = {{marginTop : 30, fontSize : 20}}>
        <p> Tired of missing flights? Tired of waiting in the terminal for hours? Tired of sitting in the phone lot, never knowing if your loved </p>
        <p> one will ever arrive? With AirExpress, we calculate when to leave for the airport? taking into account traffic, security check times,</p> 
        <p> updated flight delays, and everything else under the sun (pun intended). Simply plug in your starting point(or current location), </p>
        <p> your destination airport, your flight number, whether you're parking, getting dropped off, or picking someone up, and your security </p>
        <p> check status, and you'll never be left wondering when to leave ever again! </p>
      </body>

      {/* Location Component */}
      <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
        <div style={{}}>
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

        {/* Calculate */}
        <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
        <div style={{ marginBottom: '30px', marginRight: '100px' }}>
          <Calculate />
        </div>
      </div>
      </div>
    </div>
  );
};

export default TitleComponent;
