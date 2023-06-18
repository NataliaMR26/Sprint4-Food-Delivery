import React from 'react'
import { Link } from 'react-router-dom';

function Slides() {
  return (
    <div>
    <h1>
      Pagina donde se mapean los slides del inicio

      3 SLIDES
      
      <Link to="/validation">
        <button>Ir a validation</button>
      </Link>
    </h1>

    </div>
  )
}

export default Slides
