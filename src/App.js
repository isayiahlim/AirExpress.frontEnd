
import './App.css';
import React, {useState, useEffect} from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight'
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';


const TitleComponent = () => {
  return (
    <div>
      <header className="title-header">
<<<<<<< Updated upstream
        <h1>AirExpress</h1>
      </header>
      <div className="dropdown-container">
        <AirportDropdown />
=======
        <h1 style = {{fontSize : 120}}> -- AirExpress -- </h1>
        <p1 style = {{fontSize : 50, fontWeight: 'bold'}}> Saving Time For Travelers Since 2023 </p1>
      </header>

      <header className='box'>
        <h1 style = {{fontSize : 5}}> </h1>
      </header>

      {/*Description*/}
      <body style = {{marginTop : 50, fontSize: 18, marginBottom : 45}}>
        <p> Tired of missing flights? Tired of waiting in the terminal for hours? Tired of sitting in the phone lot, never knowing if your loved one will ever arrive? With  AirExpress,</p>
        <p> we calculate when to leave for the airport? taking into account traffic, security check times, updated flight delays, and everything else under the sun (pun intended).</p> 
        <p> Plug in your starting point(or current location), your destination airport, your flight number, whether you're parking, getting dropped off, or picking someone up, and</p>
        <p> your security check status, and you'll never be left wondering when to leave ever again! </p>
      </body>

      {/* Location Component */}
      <div className="dropdown-container" style={{ display: 'flex', alignItems: 'center', margin: '0 auto', width: 'fit-content' }}>
        <div style={{}}>
          <LocationComponent />
        </div>
>>>>>>> Stashed changes
      </div>
      <div className="flight-selector">
        <FlightInput />
      </div>
      <div className="flight-selector">
        <LocationComponent />
      </div>
<<<<<<< Updated upstream
      <div className="flight-selector">
        <DriveCheckBox />
      </div>
      <div className="flight-selector">
        <TsaCheckBox />
=======

      {/* Four boxes aligned horizontally */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {/* Box 1 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '250px', height: '150px'}}>
          {/* Your content for Box 1 */}
          {/* Example content: */}
          <h2>Box 1</h2>
        </div>

        {/* Box 2 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '250px', height: '150px'}}>
          {/* Your content for Box 2 */}
          {/* Example content: */}
          <h2>Box 2</h2>
        </div>

        {/* Box 3 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '250px', height: '150px' }}>
          {/* Your content for Box 3 */}
          {/* Example content: */}
          <h2>Box 3</h2>
        </div>

        {/* Box 2 (similar to Airport Dropdown) */}
        <div className="input-box" style={{ backgroundColor: '#FFF', width: '250px', height: '150px'}}>
          {/* Your content for Box 4 */}
          {/* Example content: */}
          <h2>Box 4</h2>
        </div>
      </div>
      {/* Bottom Box */}
      <div style={{ backgroundColor: '#A4B7FF', padding: '20px 0', marginTop: '100px' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>I hope this is useful</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default TitleComponent;
