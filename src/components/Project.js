import React from "react";

const Project = (props) => {
  function displayTechStack() {
    const techStackItems = props.techStack;

    return techStackItems.map((item, idx, techStackItems) => {
      // If it's the final item in the array
      if (idx + 1 === techStackItems.length) {
        return (
          <span className="tech-stack-item" key={idx}>
            {item}
          </span>
        );
      } else {
        // If it's not the final item
        return (
          <React.Fragment key={idx}>
            <span className="tech-stack-item">{item}</span>&nbsp;|&nbsp;
          </React.Fragment>
        );
      }
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

            <div className="row gy-2 pb-4">
              <div className="col-md-auto">
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
              </div>
              <div className="col-md-auto">
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
            </div>
          </div>
          <div className="col-md-4">
            <img src={props.img} className="w-100" alt="Screenshots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
