import React from 'react'
import Address from '../../components/address/Address'
import Cart from '../../components/cart/Cart'
import Footer from '../../components/commons/footer/Footer'

function Order() {
  return (
    <div>
        <div>
          <Address/>
          <Cart/>
          <Footer/>
        </div>
    </div>
  )
}

export default Order
