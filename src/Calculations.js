import React from 'react';
import './styles.css';


function Calculate() {
  // Function to handle button click
  const handleClick = () => {
    // Handle button click action here
    console.log('Button clicked!');
  };

  return (
    <div className="location-selector" style={{ marginTop: '70px', marginLeft: '100px' }} >
      <button className="button" onClick={handleClick} style={{display : 'flex', alignContent : 'center', height : 
      '100%', paddingTop : '10px', paddingBottom : '10px', fontSize : 16}}>
        Start Estimation!
      </button>
    </div>
  );
}

export default Calculate;
