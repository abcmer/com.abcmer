import React, { Component } from 'react';

import './PhotoSlide.css'

class PhotoSlide extends Component {
  render() {
    const photo = this.props.photo
    return (
      <img src={photo.src} alt={photo.alt}/>
    );
  }
}


export default PhotoSlide;
