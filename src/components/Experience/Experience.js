import React from 'react'
import styles from './Experience.module.css'

const experience = () => {
  return (
    <div className="w3-container w3-center w3-animate-zoom">
    <div className={styles.experence}>
      <div className={styles.experence__content}>
        <h3 className={styles.experence__about}>Experience</h3>

        <div>
          <div>
            <h2>Omicron IT LTD</h2>
            <p>Front-End Developer (HTML, CSS3, SCSS, JAVASCRIPT)</p>
            <p>March 29, 2019 to August 31, 2020</p>
          </div>
          <hr />
          <div>
            <h2>Lotus Technology Development</h2>
            <p>Front-End Engineer (REACTJS, REDUX, HTML, CSS3, SCSS)</p>
            <p>January 16, 2021 to July 25, 2021</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default experience
