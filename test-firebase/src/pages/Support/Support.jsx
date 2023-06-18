import React from 'react'
import { Link } from 'react-router-dom';


function Support() {
  return (
    <div>
        <h1>
      Support pagina solita se accede desde profile
      
      1 PAGINA
      
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

    </div>
  )
}

export default Support
