import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Validation from "../pages/Validation/Validation";
import Start from "../pages/Start/Start";
import Slides from "../pages/Slides/Slides";

const Router = () => {
  const isUserLogged = true; // Asumiendo que el usuario está logueado

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/slides" element={<Slides />} />
        <Route
          path="validation"
          element={
            <PrivateRoute isLogged={isUserLogged}>
              <Route path="/" element={<Validation />} />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
