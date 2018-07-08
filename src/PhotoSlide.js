import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'reactstrap';

import MdFullscreen from 'react-icons/lib/md/fullscreen';

import './PhotoSlide.css'

class PhotoSlide extends Component {
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

  render() {
  	const carouselItemStyle = {
  		width: '25%',
  		display: 'inline-block'
  	};


    const { activeIndex } = this.state;

    const slides = this.props.photos.map((photo) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={photo.src}
          cssModule={carouselItemStyle}
        >
          <img style={this.state.imgStyle} src={photo.src} alt={photo.alt} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        pause='hover'
        mouseEnter={this.showOptions}
        mouseLeave={this.next}
        interval={false}
      > {slides}
      </Carousel>
    );
  }
}


export default PhotoSlide;