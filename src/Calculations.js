import React from 'react';

function Calculate() {
  // Function to handle button click
  const handleClick = () => {
    // Handle button click action here
    console.log('Button clicked!');
  };

  return (
    <button
      className="custom-button"
      style={{
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        alignItems: 'center',
        
      }}
      onClick={handleClick}
    >
      Estimated Departure:
    </button>
  );
}

export default Calculate;
