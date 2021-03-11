import React from 'react';
import styles from './Home.module.css';
import HomeContent from './HomeContent/HomeContent';

const home = () => {

  const homeContent = {
    'from': ['Frontend developer from', 'Bagladesh', 'Bangladesh'],
    'work': ['Love to work with', 'JavaScript', 'Javascript'],
    'Comfortable': ['Comfortable with', 'React JS', 'Reactjs'],
    'Like': ['Like to work wit', 'Ubuntu, VSCode, WebStorm', 'LikeWork'],
    'Advocate': ['Advocate of', 'open source software', 'OpenSource'],
    'Currently': ['Currently Working at', 'Lotus Tech Dev', 'CurrentWork', 'https://lotustech.dev/']
  }

  const homeContentOutput = Object.keys(homeContent).map((el, keys) => {
    return (
      <HomeContent
        key={keys}
        title={homeContent[el][0]}
        titleValue={homeContent[el][1]}
        ownClassName={homeContent[el][2]}
        srcLink={homeContent[el][3]}
      />
    )
  })

  return (
    <div className="w3-container w3-center w3-animate-zoom">
      <div className={styles.Home}>
        <div className={styles.HomeContent}>
          <h2 className={styles.MyNameWrap}>Hi I am
          <span className={styles.MyName}>Amit Samadder</span></h2>

          {homeContentOutput}

        </div>
      </div>
    </div>
  );
}

export default home;
