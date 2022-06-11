import React from "react";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <section className="container-fluid bg-dark m-0">
      <div className="container-xxl py-2 text-center">
        <p className="text-white fs-4 mt-2">
          <Link to={"/contact"} className="footer">
            Contact me today
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ContactFooter;
