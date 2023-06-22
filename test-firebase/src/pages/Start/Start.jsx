import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logoSignIn.png';
import '../../components/Start/start.scss'

function Start() {
  return (
    <div className="body">
      <Link to="/slides">
        <button><img src={logo} alt="logo" /></button>
      </Link>
    </div>
  );
}

export default Start;