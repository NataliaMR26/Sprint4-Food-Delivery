import React from 'react'
import Footer from "../../components/commons/footer/Footer";
import Restaurant from "../../components/restaurant/Restaurant";
import Coupons from "../../components/coupons/Coupons"
import Address from '../../components/address/Address';

function Home() {
  return (
    <div>
      <h1>
        ESTE ES EL HOME
      </h1>
      <Address/>
      <Coupons/>
      <Restaurant/>
      <Footer/>


    </div>
  )
}

export default Home
