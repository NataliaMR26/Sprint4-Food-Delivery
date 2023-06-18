import React from 'react'
import { Link } from 'react-router-dom';

function ManageAdresses() {
  return (
    <div>
      Manejo de ubicacion por calle y ubicacion

      <Link to="/location">
        <button>Ir a location</button>
      </Link>
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
    </div>
  )
}

export default ManageAdresses
