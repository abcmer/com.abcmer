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
    <div className="technical-icon">
      <img src={imgSrc} alt={imgAlt} style={imgStyle}></img>
    </div>
  );
};

export default ExpertiseIcon;