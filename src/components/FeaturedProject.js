import React from "react";
import placeholder from "../images/placeholder.jpg";

const FeaturedProject = () => {
  return (
    <section className="container-fluid bg-primary">
      <div className="container-xxl py-5 ">
        <h2 className="display-5 text-white py-2  text-uppercase text-center text-align-center">
          Featured Project
        </h2>

        <div className="card p-4 h-100">
          <div className="card-body py-4 d-flex flex-column">
          <div className="row">
          <div className="col-8">
            <h3 className="display-7 text-dark py-2 text-uppercase fw-bold">
          Flashcards
        </h3>
        <p className="fs-4">
          <span className="tech-stack-item">React / React Router / React Transition Group</span> |&nbsp;
          <span className="tech-stack-item"> Mongoose / MongoDB</span> |&nbsp;
          <span className="tech-stack-item"> Node</span> |&nbsp;
          <span className="tech-stack-item"> Express</span> |&nbsp;
          <span className="tech-stack-item"> Bootstrap</span>
        </p>
        <p className="fs-4">
        Full stack MERN application allowing users to register and create their own flashcards to help them memorise new concepts.
        </p>
        <button>Live demo</button>
        <button>View repo</button>
            </div>
            <div className="col-md-4">
<img src={placeholder} className="w-100" alt="Placeholder image" />
            </div>
           
          </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
