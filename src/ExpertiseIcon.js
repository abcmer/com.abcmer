import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ExpertiseIcon.css'

const ExpertiseIcon = (props) => {
  const imgSrc = props.imgSrc;

  const imgStyle = {
    height: props.height,
    width: props.width
  }
  return (
    <div className="technical-icon">
      <img src={imgSrc} style={imgStyle}></img>
    </div>
  );
};

export default ExpertiseIcon;