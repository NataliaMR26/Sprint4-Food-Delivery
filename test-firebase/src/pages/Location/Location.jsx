import React from 'react'
import { Link } from 'react-router-dom';


function Location() {
  return (
    <div>
        <h1>Location solo me lleva  a home</h1>
    <Link to="/home">
        <button>Ir a Home</button>
    </Link>
    </div>
  )
}

export default Location