import React from "react";
import { Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />

      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
