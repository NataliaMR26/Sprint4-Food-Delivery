import React from 'react'
import { Link } from 'react-router-dom';

function Detail() {
  return (
    <div>
      <h1>
        aca sera donde por estados se mostraran los detalles de los restaurantes y los productos dependiendo del estado
        se accede desde home

        2 PAGINAS , RESTAURANTES Y PRODUCTOS
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

export default Detail
