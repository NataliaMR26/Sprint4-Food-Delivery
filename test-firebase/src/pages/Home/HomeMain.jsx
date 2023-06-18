import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>
       Home se llega desde location
      
       2 PAGINAS INCLUYENDO EL MANAGE ADDRESS
      </h1>
      
      <Link to="/ManageAdresses">
        <button>Ir a Manage Adresses</button>
      </Link>

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

export default Home
