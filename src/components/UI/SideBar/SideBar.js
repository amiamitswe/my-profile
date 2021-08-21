import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../../../assets/profile.jpg";
import BackDrop from "../BackDrop/BackDrop";
import styles from "./SideBar.module.css";

const sideBar = (props) => {
  return (
    <div>
      <BackDrop show={props.show} clicked={props.clicked} />
      <div className={styles.sideBar}>
        <NavLink to="/">
          <div className={styles.profilePic}>
            <img
              src={profilePic}
              className={styles.profilePic__img}
              alt="Amit Samadder"
            />
          </div>
        </NavLink>
        <div>
          <NavLink
            to="/"
            onClick={props.clicked}
            activeClassName={styles.sideBar__activeClass}
            className={styles.NavLink}
            id={styles.NavLink__fistChild}
            exact={true}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutMe"
            onClick={props.clicked}
            activeClassName={styles.sideBar__activeClass}
            className={styles.NavLink}
          >
            About Me
          </NavLink>
          <NavLink
            to="/myPhotos"
            onClick={props.clicked}
            activeClassName={styles.sideBar__activeClass}
            className={styles.NavLink}
          >
            My Photos
          </NavLink>
          {/* <NavLink to="/dashboard" onClick={props.clicked} activeClassName={styles.sideBar__activeClass} className={styles.NavLink}>Dashboard</NavLink> */}
          <NavLink
            to="/experience"
            onClick={props.clicked}
            activeClassName={styles.sideBar__activeClass}
            className={styles.NavLink}
          >
            Experience
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
