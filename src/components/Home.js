import React from 'react';
import styles from '../Styles/Home.module.css';
import '../Styles/Animation.css';

const home = () => {
    return(
        <div className = "w3-container w3-center w3-animate-zoom">
        <div className ={styles.home}>
           <div className={styles.home__content}>
           <h2 id={styles.home__firstchild}>Hi I am <span id={styles.myName}>Amit Samadder</span></h2>
               <div>
                   <h3 >Frontend developer from</h3>
                   <h2 className={styles.home__subcontent2} id={styles.bangladesh}>Bagladesh</h2>
               </div>
               <div>
                   <h3>Love to work with</h3>
                   <h2 className={styles.home__subcontent2} id ={styles.javascript}>JavaScript</h2>
               </div>
               <div>
                   <h3>Comfortable with</h3>
                   <h2 className={styles.home__subcontent2} id={styles.reactjs}>React JS</h2>
               </div>
               <div>
                   <h3>Advocate of</h3>
                   <h2 className={styles.home__subcontent2} id={styles.openSource}>open source software</h2>
               </div>
               <div id={styles.home__lastChild}>
                   <h3>Currently Working at</h3>
                   <h2 className={styles.home__subcontent2} id={styles.currentWork}><a href="https://omicron-it.com/">Omicron IT</a></h2>
               </div>
           </div>
           </div>
        </div>
    );
}

export default home;
