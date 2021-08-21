import React from "react";
import classes from "./HomeContent.module.css";

const HomeInfo = (props) => {
  return (
    <div className={classes.HomeContent}>
      <h3>{props.title}</h3>
      <h2
        className={classes.HomeSubContent + " " + classes[props.ownClassName]}
      >
        {props.srcLink !== undefined ? (
          <a href={props.srcLink} target="blank">
            {props.titleValue}
          </a>
        ) : (
          props.titleValue
        )}
      </h2>
    </div>
  );
};

export default HomeInfo;
