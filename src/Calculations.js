import React from 'react';
import './styles.css';


function Calculate({ onCalculateClick }) {
  return (
    <div className="location-selector" style={{ marginTop: '70px', marginLeft: '100px' }}>
      <button
        className="button"
        style={{ display: 'flex', alignContent: 'center', paddingTop: '15px', paddingBottom: '10px', fontSize: '20px', textAlign: 'center' }}
        onClick={onCalculateClick}
      >
        Start Estimation!
      </button>
    </div>
  );
}

export default Calculate;