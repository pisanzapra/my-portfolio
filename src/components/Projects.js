import React from "react";

import Project from "./Project";

import flashcardsscreenshots from "../images/flashcards-screenshots.png";
import felinefavesscreenshots from "../images/felinefaves-screenshots.png";
import doitscreenshots from "../images/doit-screenshots.png";
import portfolioscreenshots from "../images/portfolio-screenshots.png";

const Projects = () => {
  return (
    <React.Fragment>
      <section className="container-fluid bg-white">
        <div className="container-xxl py-5 ">
          <h2 className="display-4 text-primary py-2 text-center text-align-center">
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
            demoUrl="https://mernflashcards.netlify.app/"
            repoUrl="https://github.com/pisanzapra/mern-flashcards"
            img={flashcardsscreenshots}
          />
          <Project
            projectName="Feline Faves"
            techStack={["React", "HTML", "CSS", "JavaScript"]}
            projectDescription="Frontend React application which allows users to fetch a new cat picture from an API and save their favourites to local storage."
            demoUrl="https://felinefaves.netlify.app/"
            repoUrl="https://github.com/pisanzapra/react-cat-app"
            img={felinefavesscreenshots}
          />
          <Project
            projectName="Do It"
            techStack={["Flask (incl. SQLAlchemy)", "HTML", "CSS", "Bootstrap"]}
            projectDescription="A simple fullstack to do app built using Flask."
            demoUrl="https://flaskdoit.herokuapp.com/"
            repoUrl="https://github.com/pisanzapra/flasktodo"
            img={doitscreenshots}
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
            img={portfolioscreenshots}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Projects;
