import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-xxl">
        <Link to={"/"} className="navbar-brand">
          <i className="bi bi-code-square fs-2"> </i>
          <span className="fw-medium fs-2"> Gabriella's Portfolio</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarNav"
          style={show ? { display: "block" } : { display: "none" }}
          className={"collapse navbar-collapse fs-4"}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link">
                PROJECTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
