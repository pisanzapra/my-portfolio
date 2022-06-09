import React from "react";

import { Link } from "react-router-dom";

import Project from "./Project";

import placeholder1 from "../images/placeholder.jpg";

const FeaturedProject = () => {
  return (
    <section className="container-fluid bg-white">
      <div className="container-xxl py-5">
        <h2 className="display-4 text-primary py-2 text-uppercase text-center text-align-center">
          Featured Project
        </h2>
        <Project
          projectName="Flashcards"
          techStack={[
            "React / React Router / React Transition Group",
            "Mongoose / MongoDB",
            "Node",
            "Express",
            "Bootstrap",
          ]}
          projectDescription="Full stack MERN application allowing users to register and create
          their own flashcards to help them memorise new concepts."
          demoUrl="https://mernflashcards.netlify.app"
          repoUrl="https://github.com/pisanzapra/mern-flashcards" 
          img={placeholder1}
        />
        <div className="text-center">
          <Link to={"/projects"} className="fs-4">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
