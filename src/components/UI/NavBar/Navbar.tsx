import React, { MouseEventHandler } from "react";
import Sidebar from "../SideBar/SideBar";
import classes from "./NavBar.module.css";

type Props = {
  closeNavHandler: MouseEventHandler;
  showNav: boolean;
};

const navbar = ({ closeNavHandler, showNav }: Props) => {
  const addClass = [classes.Mobile, !showNav ? classes.Close : null];
  return (
    <div>
      <div className={addClass.join(" ")}>
        <Sidebar clicked={closeNavHandler} show={showNav} />
      </div>
      <div className={classes.Desktop}>
        <Sidebar />
      </div>
    </div>
  );
};

export default navbar;
