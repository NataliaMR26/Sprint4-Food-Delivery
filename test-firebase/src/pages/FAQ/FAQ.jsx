import React from 'react'
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <div>
      <h1>
        FAQ page se accede desde support.
      
        1 SOLA PAGINA QUE SALE DEL PROFILE
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

export default FAQ
