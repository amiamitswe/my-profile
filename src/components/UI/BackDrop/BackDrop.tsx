import React, { MouseEventHandler } from "react";
import classes from "./BackDrop.module.css";

type Props = {
  show?: boolean;
  clicked?: MouseEventHandler;
};

const BackDrop = (props: Props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default BackDrop;
