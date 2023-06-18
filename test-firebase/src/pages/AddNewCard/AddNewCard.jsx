import React from 'react'
import { Link } from 'react-router-dom';

function AddNewCard() {
  return (
    <div>
        <h1>
        Add New card para agregar la tarjeta que es donde se ponen los detalles de la tarjeta
        
        1 PAGINA QUE SALE DESDE LA PAGINA DE PAYMENT
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

export default AddNewCard
