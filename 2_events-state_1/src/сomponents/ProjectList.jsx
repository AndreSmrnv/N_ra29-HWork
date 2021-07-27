import React from "react";
import PropTypes from "prop-types";
import classes from './ProjectList.module.css';

function ProjectList({projects}) {
  return (
    <div className={classes.Portfolio_div}>
      {projects.map((item, idx) => {
        return  (
          <img  className={classes.Portfolio_img} key={idx} src={item.img} alt={item.category} />
        );
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
