import React from 'react';
import './HomeContent.css';

const HomeInfo = (props) => {
  return (
    <div className='HomeContent'>
      <h3>{props.title}</h3>
      <h2 className={[props.givenStyle, props.otherClass].join(' ')}>

        {props.testLink !== undefined ?
          <a href={props.testLink} target='blank'>{props.titleValue}</a> :
          props.titleValue}
      </h2>
    </div>
  )
}

export default HomeInfo
