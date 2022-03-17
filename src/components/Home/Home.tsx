import React from "react";
import styles from "./Home.module.css";
import HomeContent from "./HomeContent/HomeContent";

type homeContentType = {
  from: Array<string>;
  work: Array<string>;
  Comfortable: Array<string>;
  Like: Array<string>;
  Advocate: Array<string>;
  Currently: Array<string>;
};

const home = () => {
  const homeContent: homeContentType = {
    from: ["Frontend developer from", "Bangladesh", "Bangladesh"],
    work: ["Love to work with", "JavaScript, TypeScript", "Javascript"],
    Comfortable: ["Comfortable with", "React JS, Next JS", "Reactjs"],
    Like: ["Like to work wit", "MAC OS, Ubuntu, VSCode", "LikeWork"],
    Advocate: ["Advocate of", "Open source software", "OpenSource"],
    Currently: [
      "Currently Working at",
      "Technext Limited",
      "CurrentWork",
      "https://technext.it/",
    ],
  };

  const homeContentOutput = Object.keys(homeContent).map((el: string, keys) => {
    return (
      <HomeContent
        key={keys}
        // @ts-ignore
        title={homeContent[el][0]}
        // @ts-ignore
        titleValue={homeContent[el][1]}
        // @ts-ignore
        ownClassName={homeContent[el][2]}
        // @ts-ignore
        srcLink={homeContent[el][3]}
      />
    );
  });

  return (
    <div className="w3-container w3-center w3-animate-zoom">
      <div className={styles.Home}>
        <div className={styles.HomeContent}>
          <h2 className={styles.MyNameWrap}>
            Hi I am
            <span className={styles.MyName}>Amit Samadder</span>
          </h2>

          {homeContentOutput}
        </div>
      </div>
    </div>
  );
};

export default home;
