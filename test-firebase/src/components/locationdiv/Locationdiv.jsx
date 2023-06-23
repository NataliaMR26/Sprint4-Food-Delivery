import React from "react";
import { Link } from "react-router-dom";
import locationImage from "../../images/staticmap.png";
import "./Locationdiv.scss";

const LocationContainer = () => {
  return (
    <div className="location-container">
      <img src={locationImage} alt="Location" />
      <Link to="/home" className="buttonsito">
        Ir a comprar
      </Link>
    </div>
  );
};

export default LocationContainer;
