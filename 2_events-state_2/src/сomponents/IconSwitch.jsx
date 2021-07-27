import React from "react";
import classes from './IconSwitch.module.css';

export default function IconSwitch({ icon, onSwitch }) {

  const onClick = () => onSwitch(icon); 
  return (
    <div className={classes.IconSwitch}>
      <span onClick={onClick} className="material-icons">{icon}</span>
    </div>
  );
}
