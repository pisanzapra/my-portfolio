import React from "react";
import { Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <div className="container-md container-fluid flex-fill py-5">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
