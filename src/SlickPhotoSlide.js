import React, { Component } from 'react';
import Slider from "react-slick";

import './SlickPhotoSlide.css'

class SlickPhotoSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      imgStyle: {
        opacity: '1',
        backgroundColor: 'white'
      }
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onExiting() {
    this.animating = false;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  showOptions() {
    this.setState({
      opacity: '.75'
    })
  }

  handleClick() {
    console.log('click!');
    this.slider.slickNext()

  }

  render() {
  	const carouselItemStyle = {
  		width: '25%',
  		display: 'inline-block'
  	};



    const { activeIndex } = this.state;

    const slides = this.props.photos.map((photo) => {
      return (
          <img style={this.state.imgStyle} src={photo.src} alt={photo.alt} />
      );
    });

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div onClick={this.handleClick}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {slides}
        </Slider>
      </div>
    );
  }
}


export default SlickPhotoSlide;