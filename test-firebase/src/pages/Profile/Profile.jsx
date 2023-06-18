import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
        <h1>
        Pagina donde aparece la foto de perfil y todas las opciones

        2 PAGINAS
        </h1>

        <div>
            <Link to="/home">
            <button>Ir a home</button>
            </Link>
            <Link to="/search">
              <button>Ir a Search</button>
            </Link>
            <Link to="/Order">
              <button>Ir a Order</button>
            </Link>
            <Link to="/Profile">
              <button>Ir a Profile</button>
            </Link>
        </div>

        <div>
            
            <button>AccountDetail es otro estate</button>
            
            <button>AccountDetail para encender y apagar </button>
            
            <Link to="/Payment">
              <button>Ir a Payment</button>
            </Link>
            <Link to="/Lenguage">
              <button>Ir a Lenguage</button>
            </Link>
            <Link to="/Location">
              <button>Ir a Location</button>
            </Link>
            <Link to="/FAQ">
              <button>Ir a FAQ</button>
            </Link>
            <Link to="/Support">
              <button>Ir a Support</button>
            </Link>
        </div>
        
    </div>
  )
}

export default Profile
