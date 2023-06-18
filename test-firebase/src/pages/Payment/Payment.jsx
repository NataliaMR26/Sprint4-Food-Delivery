import React from 'react'
import { Link } from 'react-router-dom';

function Payment() {
  return (
    <div>
      <h1>
      Pagina de payment donde se agrega el metodo de pago, se accede desde la pagina de profile (o al momneto de pagar cuando no hay tarjetas)
      
      1 SOLA PAGINA
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

export default Payment
