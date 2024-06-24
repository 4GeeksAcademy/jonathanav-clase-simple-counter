import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SecondsCounter = ({ seconds }) => {
  const paddedSeconds = String(seconds).padStart(6, '0').split('');

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3">
      <div className="d-flex flex-column justify-content-center align-items-center">
      </div>
      <div>⌚
      </div>
      
      {paddedSeconds.map((digit, index) => (
        <div
          key={index}
          className="d-flex flex-column justify-content-center align-items-center mx-2"
          style={{ width: '48px', height: '48px', fontSize: '48px', border: '1px solid white', borderRadius: '5px', backgroundColor: '#000' }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default SecondsCounter;