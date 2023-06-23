import React from 'react';
import './Address.scss';
import locationIcon from '../../images/location.jpg';

function Address() {
  return (
    <div className="address">
      <img src={locationIcon} alt="Location Icon" className="address-icon" />
      <div className="address-text">
        <p>Dirección:</p>
        <p>123 Main Street, Anytown, USA</p>
      </div>
    </div>
  );
}

export default Address;
