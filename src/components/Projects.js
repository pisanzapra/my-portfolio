import React from "react";

import Project from "./Project";

const Projects = () => {
  return (
    <React.Fragment>
      <section className="container-fluid bg-white">
        <div className="container-xxl py-5 ">
          <h2 className="display-4 text-primary py-2 text-uppercase text-center text-align-center">
            Projects
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
            demoUrl="#"
            repoUrl="https://github.com/pisanzapra/mern-flashcards"
          />
          <Project
            projectName="Feline Faves"
            techStack={["React", "HTML", "CSS", "JavaScript"]}
            projectDescription="Frontend React application which allows users to fetch a new cat picture from an API and save their favourites to local storage."
            demoUrl="https://felinefaves.netlify.app/"
            repoUrl="https://github.com/pisanzapra/react-cat-app"
          />
          <Project
            projectName="Portfolio website"
            techStack={[
              "React / React Router",
              "HTML",
              "CSS",
              "JavaScript",
              "Bootstrap",
            ]}
            projectDescription="A home for my key projects (this website)."
            demoUrl="https://gabriellasportfolio.netlify.app/"
            repoUrl="https://github.com/pisanzapra/my-portfolio"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
