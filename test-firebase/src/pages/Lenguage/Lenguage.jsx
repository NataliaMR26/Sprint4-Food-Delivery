import React from 'react'
import { Link } from 'react-router-dom';

function Lenguage() {
  return (
    <div>
      <h1>
        Se accede desde profile
      
        1 SOLA PAGINA
      </h1>
      <Link to="/slides">
        <button>Ir a Slides</button>
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

export default Lenguage
