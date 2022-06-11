import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./sass/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from "./components/NavBar";
import ContactFooter from "./components/ContactFooter";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>

      <ContactFooter />
    </div>
  );
};

export default App;
