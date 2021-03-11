import React from 'react'
import styles from './AboutMe.module.css'
import Education from './AboutMeInfo/Education'
import MyDetails from './AboutMeInfo/MyDetails'

const aboutMe = () => {

  const myInfo = {
    education: [
      `MSc in Software Engineering from Daffodil International University. On going...`,
      `Bachelor of Science in Software Engineering from Daffodil International University. [May - 2018]`,
      `H.S.C from Shahid Smrity Degree COllege, Barishal`,
      `S.S.C from Harta High School, Barishal`],
    myDetails: [
      `Love to work with JavaScript and enjoy problem solving. Frontend developer, comfortable with ReactJS. A self taught, quick learner and analytical person. I write code to give satisfaction to human and relief to machine.`,
      `I use Linux Mint and Visual Studio Code for daily work. Passionate about Web Development and enjoy to experiment on these. Dream to become a Full Stack JavaScript developer.`
    ]
  }

  return (
    <div className="w3-container w3-center w3-animate-zoom">
      <div className={styles.aboutMe}>
        <div className={styles.aboutMe__content}>
          <h3 className={styles.aboutMe__about}>About me</h3>
          {myInfo.myDetails.map((el, key) => <MyDetails key={key} detailText={el} />)}

          <h3 className={styles.aboutMe__about}>Education</h3>
          {myInfo.education.map((el, key) => <Education key={key} eduStyle={styles.aboutMe_education} infoText={el} />)}
        </div>
      </div>
    </div>
  )
}

export default aboutMe