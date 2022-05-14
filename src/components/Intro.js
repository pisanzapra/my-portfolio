import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="container-fluid bg-dark">
      <div className="container-xxl text-center py-5">
        <h2 className="display-5 text-white py-2">Hi, I'm Gabriella</h2>
        <p className="text-white fs-4">
          a self-taught developer transitioning from digital marketing to
          development
        </p>
        <a href="https://github.com/pisanzapra" target="_blank">
          <i
            className="bi bi-github fs-2 text-light px-2"
            title="View Github profile"
          ></i>
        </a>
        <Link to={"/"}>
          <i
            className="bi bi-envelope fs-2 text-light px-2"
            title="Contact me"
          ></i>
        </Link>
      </div>
    </section>
  );
};

export default Intro;