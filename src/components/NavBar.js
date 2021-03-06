import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-xxl">
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
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/projects"} className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a href="mailto:hello@hiregabriella.co.uk" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
