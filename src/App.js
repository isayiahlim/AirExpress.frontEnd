import './App.css';
import React from 'react';
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
          {/* Display the fetched data */}
            {data && (
              <div>
                <h2>Fetched Data:</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
              </div>
            )}
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
          <h2>Box hey</h2>
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
