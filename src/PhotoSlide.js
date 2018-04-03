import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'reactstrap';

import './PhotoSlide.css'

class PhotoSlide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

  render() {
  	const carouselItemStyle = {
  		width: '25%',
  		display: 'inline-block'
  	}

    const { activeIndex } = this.state;

    const slides = this.props.photos.map((photo) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={photo.src}
          cssModule={carouselItemStyle}
        >
          <img src={photo.src} alt={photo.alt} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        pause='hover'
        mouseEnter={this.next}
        mouseOut={this.next}
        interval={false}
      >
        {slides}
      </Carousel>
    );
  }
}


export default PhotoSlide;