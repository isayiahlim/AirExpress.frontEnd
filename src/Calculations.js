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
      <button className="button" onClick={handleClick}>
        Start Estimation!
      </button>
    </div>
  );
}

export default Calculate;
