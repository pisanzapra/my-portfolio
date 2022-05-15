import React from "react";
import Intro from "./Intro";
import TechnicalSkills from "./TechnicalSkills";
import FeaturedProject from "./FeaturedProject";
import ContactFooter from "./ContactFooter";

const Home = () => {
  return (
    <React.Fragment>
      <Intro />
      <TechnicalSkills />
      <FeaturedProject />
      <ContactFooter />
    </React.Fragment>
  );
};

export default Home;
