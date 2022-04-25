import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import FormRegister from "../pages/FormRegister";
import NavBar from "../components/NavBar";
import Main from "../pages/Main";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/registro" element={<FormRegister />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
