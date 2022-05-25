import React from "react";
import placeholder from "../images/placeholder.jpg";

const FeaturedProject = () => {
  return (
    <section className="container-fluid bg-white">
      <div className="container-xxl py-5 ">
        <h2 className="display-4 text-primary py-2 text-uppercase text-center text-align-center">
          Featured Project
        </h2>

        <div className="card p-4 h-100 shadow">
          <div className="card-body py-4 d-flex flex-column">
            <div className="row">
              <div className="col-md-8">
                <h3 className="display-7 text-dark py-2 text-uppercase fw-bold heading-1">
                  Flashcards
                </h3>
                <p className="fs-4">
                  <span className="tech-stack-item">
                    React / React Router / React Transition Group
                  </span>&nbsp;|&nbsp;
                  <span className="tech-stack-item">
                    
                    Mongoose / MongoDB
                  </span>&nbsp;|&nbsp;
                  <span className="tech-stack-item"> Node</span>&nbsp;|&nbsp;
                  <span className="tech-stack-item"> Express</span>&nbsp;|&nbsp;
                  <span className="tech-stack-item"> Bootstrap</span>
                </p>
                <p className="fs-4">
                  Full stack MERN application allowing users to register and
                  create their own flashcards to help them memorise new
                  concepts.
                </p>
                <button
                  type="button"
                  className="btn btn-dark px-3 fs-4 button-100 me-3"
                >
                  <i className="bi bi-play-circle-fill" title="Live demo"></i>
                  <span> Live demo</span>
                </button>
                <button
                  type="button"
                  className="btn btn-dark px-3 fs-4 button-100"
                >
                  <i className="bi bi-github" title="View repo"></i>
                  <span> View repo</span>
                </button>
              </div>
              <div className="col-md-4">
                <img
                  src={placeholder}
                  className="w-100"
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
