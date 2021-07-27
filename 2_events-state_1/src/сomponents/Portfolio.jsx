import React, { useState } from "react";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";
import item, { CATEGORY } from "../itemData";
import classes from './Portfolio.module.css';

const Portfolio = () => {
  let [category, setCategory] = useState(CATEGORY.ALL);

  const handlerFilter = (filter) => {
    setCategory(filter)
  };


  return (
    <>
      <Toolbar
        filters={Object.values(CATEGORY)}
        selected={category}
        onSelectFilter={handlerFilter}
        className={classes.Menu}
      />
      <div className={classes.Portfolio}>
        <ProjectList projects={category === CATEGORY.ALL ? item : item.filter((elem) => elem.category === category)} />
      </div>
    </>
  );
}

export default Portfolio;