import React from 'react'
import { Link } from 'react-router-dom';

function Order() {
  return (
    <div>
      <h1>
        Aca esta order, current order y order is accepted
      
      5 PAGINAS
      </h1>
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
  )
}

export default Order
