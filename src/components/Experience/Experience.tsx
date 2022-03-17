import React from "react";
import styles from "./Experience.module.css";

const experienceData = [
  {
    id: 1004,
    title: "Technext Limited",
    link: "https://technext.it/",
    responsibility:
      "Front-End Engineer (REACTJS, NEXTJS, JAVASCRIPT, TYPESCRIPT, UNIT-TESTING, CONTEXT-API, REDUX, HTML, CSS3, SCSS, BOOTSTRAP, TAILWUNDCSS)",
    timePeriod: "November 1, 2021 to continue.... ",
  },
  {
    id: 1003,
    title: "Qcoom.com",
    link: "https://qcoom.com/",
    responsibility:
      "Front-End Engineer (REACTJS, NEXTJS, REDUX, HTML, CSS3, SCSS, TAILWUNDCSS)",
    timePeriod: "July 25, 2021 to October 31, 2021",
  },
  {
    id: 1002,
    title: "Lotus Technology Development",
    link: "https://lotustech.dev/",
    responsibility:
      "Front-End Developer (REACTJS, REDUX, HTML, CSS3, SCSS, BOOTSTRAP)",
    timePeriod: "January 16, 2021 to July 25, 2021",
  },
  {
    id: 1001,
    title: "Omicron IT LTD",
    link: "https://www.omicron-it.com/",
    responsibility:
      "Front-End Developer (HTML, CSS3, SCSS, BOOTSTRAP, JAVASCRIPT)",
    timePeriod: "March 29, 2019 to August 31, 2020",
  },
];

const experience = () => {
  return (
    <div className="w3-container w3-center w3-animate-zoom">
      <div className={styles.experience}>
        <div className={styles.experience__content}>
          <h3 className={styles.experience__about}>Experience</h3>

          {experienceData.map((exp) => (
            <div key={exp.id} className={styles.exp}>
              <h2>
                <a className={styles.a} href={exp.link}>
                  {exp.title}
                </a>
              </h2>
              <p>{exp.responsibility}</p>
              <p>{exp.timePeriod}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default experience;
