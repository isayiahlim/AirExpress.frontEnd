import './App.css';
import React, {useState, useEffect} from 'react';
import AirportDropdown from './ChooseAirport';
import FlightInput from './InputFlight';
import LocationComponent from './StartLocation';
import DriveCheckBox from './DriveCheckBox';
import TsaCheckBox from './DriveOption';
import Calculate from './Calculations';
import './styles.css';

import axios from 'axios';

const TitleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL of your backend API
    const apiUrl = 'http://localhost:5000'; // Replace with your backend URL

    // Make an HTTP GET request to the backend API
    axios.get(apiUrl)
      .then(response => {
        if (response.status === 200) {
          // Handle the successful response here
          setData(response.data); // Store the data in component state
        } else {
          // Handle other response statuses (e.g., error)
          console.error(`HTTP error! Status: ${response.status}`);
        }
      })
      .catch(error => {
        // Handle network errors or other issues
        console.error('Error fetching data:', error);
      });
  }, []);

  const [times, setTimes] = useState([
    { id: 1, time: '00:00', name: 'Estimate Driving' },
    { id: 2, time: '00:00', name: 'Estimate Parking' },
    { id: 3, time: '00:00', name: 'Estimate Security' },
    { id: 4, time: '00:00', name: 'Flight Departure' }
  ]);
  
  const [changePartTime, setChangePartTime] = useState('00:00');
  const [isFlightNumberCorrect, setIsFlightNumberCorrect] = useState(false);
  
  const handleFlightInputChange = (flightNumber) => {
    if (flightNumber === '135246') {
      setIsFlightNumberCorrect(true);
    } else {
      setIsFlightNumberCorrect(false);
    }
  };
  
  const handleCalculateClick = () => {
    if (isFlightNumberCorrect) {
      const updatedTimes = times.map(item => {
        // Logic to assign different times to each box (you can adjust these values)
        switch (item.id) {
          case 1:
            return { ...item, time: '10:00' };
          case 2:
            return { ...item, time: '11:30' };
          case 3:
            return { ...item, time: '12:45' };
          case 4:
            return { ...item, time: '09:45 AM' };
          default:
            return item;
        }
      });
      setChangePartTime('12:00 PM');
      setTimes(updatedTimes);
    }
  };
  

  

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#F3F3F3' }} className="Quicksand">
      {/* Header */}
      <header className="title-header">
        <h1 style = {{fontSize : 120}}> -- AirExpress -- </h1>
        <p style = {{fontSize : 30}}> Saving Time For Travelers Since 2023! </p>
      </header>

      <header className='box'>
        <h1 style = {{fontSize : 5}}> </h1>
      </header>

      {/*Description*/}
      <body style = {{marginTop : 50}}>
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
            <FlightInput onFlightInputChange={handleFlightInputChange}/>
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
          {/* Display the fetched data */}
            {data && (
              <div>
                <h2>Fetched Data:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
            <Calculate onCalculateClick={handleCalculateClick}/>
          </div>
        </div>
      </div>

      {isFlightNumberCorrect ? (
        <div>
          {/* Display only the four boxes horizontally */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {times.map((box, index) => (
              <div key={index} className="input-box" style={{ backgroundColor: '#FFF', width: '200px', height: '150px', margin: '0 10px' }}>
                <h1>{box.time}</h1>
                <h2>{box.name}</h2>
              </div>
            ))}
          </div>
          {/* Display 'You should Leave at' */}
          <div>
            <h1>You should Leave at</h1>
            <h1 style={{ fontSize: '100px' }}>{changePartTime}</h1>
          </div>
        </div>
      ) : (
        <div>
          {/* Display default times */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {times.map((box, index) => (
              <div key={index} className="input-box" style={{ backgroundColor: '#FFF', width: '200px', height: '150px', margin: '0 10px' }}>
                <h1>00:00</h1>
                <h2>{box.name}</h2>
              </div>
            ))}
          </div>
          {/* Display default 'You should Leave at' */}
          <div>
            <h1>You should Leave at</h1>
            <h1 style={{ fontSize: '100px' }}>00:00</h1>
          </div>
        </div>
      )}

      {/* Bottom Box */}
      <div style={{ backgroundColor: '#A4B7FF', padding: '20px 0', marginTop: '100px' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>I hope this is useful</p>
      </div>
    </div>
  );
};

export default TitleComponent;
