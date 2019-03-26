import React from 'react';
import styles from '../Styles/AboutMe.module.css';

const aboutMe = () => {
    return(
        <div className = "w3-container w3-center w3-animate-zoom">
            <div className={styles.aboutMe}>
                <div className ={styles.aboutMe__content}>
                    <div className={styles.aboutMe__content__2}>
                        <h3 className={styles.aboutMe__aboutme}>About me</h3>
                        <p>
                            Love to work with JavaScript and enjoy problem solving. Frontend developer, comfortable with ReactJS. A self taught, quick learner and analytical person. I write code to give satisfaction to human and relief to machine.
                        </p>
                        <p>
                            I use Linux Mint and Visual Studio Code for daily work. Passionate about Web Development and enjoy to experiment on these. Dream to become a Full Stack JavaScript developer.
                        </p>
                        <h3 className={styles.aboutMe__aboutme}>Education</h3>
                        <li className={styles.aboutMe_education}>
                            Bachelor of Science in Software Engineering from Daffodil International University. [May - 2018]
                        </li>
                        <li className={styles.aboutMe_education}>
                            HSC from Shahid Smrity Degree COllege, Barishal
                        </li>
                        <li id={styles.aboutMe_education__lastchild}>
                            S.S.C from Harta High School, Barishal
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default aboutMe;