import React from 'react'
import Sidebar from '../SideBar/SideBar'
import classes from './NavBar.module.css'


const navbar = (props) => {

  const addClass = [classes.Mobile , props.showNav ? classes.Open : classes.Close]
  return (

    <div>
      <div className={addClass.join(' ')}>
        <Sidebar 
          clicked={props.closeNavHandler} 
          show={props.showNav} />
      </div>
      <div className={classes.Desktop}>
        <Sidebar />
      </div>
    </div>
  )
 }

export default navbar
