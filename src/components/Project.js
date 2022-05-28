import React from "react";

import placeholder from "../images/placeholder.jpg";

import TechStackItem from "./TechStackItem";

const Project = (props) => {
  function displayTechStack() {
    return props.techStack.map((item, idx) => {
      return <TechStackItem key={idx} item={item} />;
    });
  }

  return (
    <div className="card p-4 h-100 shadow mb-4">
      <div className="card-body py-4 d-flex flex-column">
        <div className="row">
          <div className="col-md-8">
            <h3 className="display-7 text-dark py-2 text-uppercase fw-bold heading-1">
              {props.projectName}
            </h3>
            <p className="fs-4">{displayTechStack()}</p>
            <p className="fs-4">{props.projectDescription}</p>
            <a
              href={props.demoUrl}
              role="button"
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-dark px-3 fs-4 button-100 me-3"
            >
              <i className="bi bi-play-circle-fill" title="Live demo"></i>
              <span> Live demo</span>
            </a>
            <a
              href={props.repoUrl}
              target="_blank" 
              rel="noreferrer" 
              role="button"
              className="btn btn-dark px-3 fs-4 button-100"
            >
              <i className="bi bi-github" title="View repo"></i>
              <span> View repo</span>
            </a>
          </div>
          <div className="col-md-4">
            <img src={placeholder} className="w-100" alt="Placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
