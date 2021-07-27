import React from "react";
import classes from './Toolbar.module.css';



function Toolbar({ filters, selected, onSelectFilter }) {



  return (
    <div>
      <ul className={classes.Toolbar}>
        {filters && filters.map((item, idx) => {
          return (
            <li
              onClick={() => onSelectFilter(item)}
              key={idx}
              className={item === selected ? classes.selected : null}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}



export default Toolbar;
