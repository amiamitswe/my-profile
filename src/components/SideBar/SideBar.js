import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from '../../assets/profile.jpg';
import BackDrop from '../BackDrop/BackDrop';
import styles from './SideBar.module.css';


const sideBar = (props) => {
  return (
    <div>
      <BackDrop show={props.show} 
      clicked={props.clicked}/>
      <div className={styles.sideBar}>

        <NavLink to="/">
          <div className={styles.profilePic}>
            <img src={profilePic} className={styles.profilePic__img} alt="Amit Samadder" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/" activeClassName={styles.sideBar__activeClass} className={styles.NavLink} id={styles.NavLink__fistchild} exact={true}>Home</NavLink>
          <NavLink to="/aboutme" activeClassName={styles.sideBar__activeClass} className={styles.NavLink}>About Me</NavLink>
          <NavLink to="/myPhotos" activeClassName={styles.sideBar__activeClass} className={styles.NavLink}>My Photos</NavLink>
          <NavLink to="/dashbord" activeClassName={styles.sideBar__activeClass} className={styles.NavLink}>Dashbord</NavLink>
        </div>
      </div>
    </div>
  );
}

export default sideBar;