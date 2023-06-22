import React from 'react'
import { Link } from 'react-router-dom';
import '../../components/address/ManageAdresses.scss'

function ManageAdresses() {
  return (
    <div className='body-address'>
      <h1>Manage Adresses</h1>
      <input
        type='text'
        placeholder='Address 1'
      />
       <input
        type='text'
        placeholder='Address 2'
      />
       <input
        type='text'
        placeholder='Address 3'
      />
      <Link to="/location">
        <button>Specify on the map</button>
      </Link>
    </div>
  )
}

export default ManageAdresses
