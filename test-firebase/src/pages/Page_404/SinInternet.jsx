import React from 'react'
import { Link } from 'react-router-dom';

function SinInternet() {
  return (
    <div>
      <h1>
        Sin Internet

        1 PAGINA
      </h1>
      <Link to="/slides">
        <button>Ir a Slides</button>
      </Link>
    </div>
  )
}

export default SinInternet
