import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <div className="container-md container-fluid flex-fill">content</div>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
