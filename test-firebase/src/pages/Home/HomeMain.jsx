import React from 'react'
import Footer from "../../components/commons/footer/Footer";
import Coupons from "../../components/coupons/Coupons"
import Address from '../../components/address/Address';
import Homecards from '../../components/homecards/Homecards';
import CategoryComponent from '../../components/categorycomponent/CategoryComponent';

function Home() {
  return (
    <div>

      <Address/>
      <Coupons/>
      <CategoryComponent/>
      <Homecards/>
      <Footer/>


    </div>
  )
}

export default Home
