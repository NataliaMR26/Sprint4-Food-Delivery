import React from 'react'
import { Link } from 'react-router-dom';

function Search() {
  return (
    <div>
        <h1>
        Pagina que se muestra al querer empezar una busqueda

        2 PAGINAS
        </h1>
        <Link to="/home">
        <button>Ir a home</button>
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

export default Search
