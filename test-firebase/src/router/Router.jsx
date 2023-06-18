// Router.jsx
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Validation from "../pages/Validation/Validation";
import Start from "../pages/Start/Start";
import Slides from "../pages/Slides/Slides";
import Location from "../pages/Location/Location";
import Home from "../pages/Home/HomeMain";
import ManageAdresses from "../pages/ManageAdresses/ManageAdresses";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
import Payment from "../pages/Payment/Payment";
import Lenguage from "../pages/Lenguage/Lenguage";
import FAQ from "../pages/FAQ/FAQ";
import Support from "../pages/Support/Support";


const PrivateRoute = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/validation" />;
};

const Router = () => {
  const isUserLogged = true; // Asumiendo que el usuario está logueado

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/validation" element={<Validation />} />
          <Route
            path="/Location"
            element={
              <PrivateRoute isLogged={isUserLogged}>
                <Location/>
              </PrivateRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/ManageAdresses" element={<ManageAdresses />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Order" element={<Order/>} />
          <Route path="/Profile" element={<Profile/>} />
              <Route path="/Payment" element={<Payment/>} />
              <Route path="/Lenguage" element={<Lenguage/>} />
              <Route path="/Location" element={<Location/>} />
              <Route path="/FAQ" element={<FAQ/>} />
              <Route path="/Support" element={<Support/>} />




      </Routes>
    </BrowserRouter>
  );
};

export default Router;



