import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ExpertiseIcon.css'

const ExpertiseIcon = (props) => {
  const imgSrc = props.imgSrc;
  const imgAlt = props.imgAlt;

  const imgStyle = {
    height: props.height,
    width: props.width
  }
  return (
    <img className="technical-icon" src={imgSrc} alt={imgAlt}></img>
  );
};

export default ExpertiseIcon;