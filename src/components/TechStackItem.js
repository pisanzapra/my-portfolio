import React from "react";

const TechStackItem = (props) => {
  return (
    <React.Fragment>
      <span className="tech-stack-item">
        {props.item}
      </span>
      &nbsp;|&nbsp;
    </React.Fragment>
  );
};

export default TechStackItem;
