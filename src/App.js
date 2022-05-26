import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./sass/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ContactFooter from "./components/ContactFooter";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
      <ContactFooter />
    </div>
  );
};

export default App;
