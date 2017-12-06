import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';

import {
  Carousel,
  CarouselItem,
} from 'reactstrap';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    var navBarBrand = {
      flexFlow: "row nowrap",
    }
    var navBarStyle = {
    }
    return (
      <div style={navBarStyle}>
        <Navbar color="faded" light expand="md">
          <NavbarBrand style={navBarBrand} href="/">Adam Siemer</NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/abcmer">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://drive.google.com/file/d/0B-R24Rv9imxkd3dnc3BYV1ZjeW8/view?usp=sharing">Resume</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

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
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.photos.map((item) => {
      var carouselItemStyle = {
        display: "inline-block",
        borderStyle: "solid",
        borderWidth: "thick",
        margin: 0,
        padding: 0,

      }
      return (
        <CarouselItem style={carouselItemStyle}
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          src={item.src}
          altText={item.altText}
        >
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={(Math.floor(Math.random() * 20) + 15) * 1000}
        ride={'carousel'}
      >
        {slides}
      </Carousel>
    );
  }
}

class PhotoCanvas extends Component {
  render() {
    var photoCanvasStyle = {
      topMargin: 5,
      borderStyle: "solid",
      borderWidth: "thick",
      display: "inline-block",
      padding: 0,
      margin: 0,
      backgroundColor: "black"
    }
    return(
    <div style={photoCanvasStyle} className='photo-canvas'>
      <PhotoSlide photos={photos0}/>
      <PhotoSlide photos={photos1}/>
      <PhotoSlide photos={photos2}/>
      <PhotoSlide photos={photos3}/>
      <PhotoSlide photos={photos4}/>
      <PhotoSlide photos={photos5}/>
      <PhotoSlide photos={photos6}/>
      <PhotoSlide photos={photos7}/>
      <PhotoSlide photos={photos8}/>
      <PhotoSlide photos={photos9}/>
    </div>
  )
  }
}

var photos0 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/15877114_1373593289326454_2441574266508935168_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/21480176_1524304914302197_1047215594878795776_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/12545334_1040742242615330_1027066424_n.jpg',
  },
];

var photos1 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/20634131_850131571819088_7664068453346574336_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/14607130_1299037040147640_2598483599518859264_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/11378997_700301540075725_1555257410_n.jpg'
  },
];
var photos2 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e15/11226792_1427889160862595_1587190176_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e15/11265661_455773371265199_1388992160_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/11190106_1611409489105970_1076699683_n.jpg'
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/12725023_1091983027521187_1488106807_n.jpg'
  },
];
var photos3 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/924724_368705063339321_2012108850_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/10932423_938749679531209_852400505_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/1737144_821251941272342_1097532848_n.jpg'
  },
];
var photos4 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/917453_1688914018050577_1454933453_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/14099462_1795121710705473_1290462259_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/14099598_1238308186209074_299569638_n.jpg'
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/14135013_854291488048847_1979344944_n.jpg'
  },
];
var photos5 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/12547650_186428128383994_1248371608_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/12816792_243506539317919_2117526303_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/19367874_320652865037475_9026784859661533184_n.jpg'
  },
];
var photos6 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/13725596_1776119419337736_854586656_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/15253211_294475910946840_8869677975335862272_n.jpg'
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/14533625_1733174723669014_2437839341473497088_n.jpg'
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/14550162_1180188975385246_398732089312149504_n.jpg'
  },
];
var photos7 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/14278982_335587990117562_1577613786_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/15538457_352901091740430_8061611386473545728_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/18723599_2033550863539124_6714151129195741184_n.jpg'
  },
];
var photos8 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/14099891_269934890059660_1089700383_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/19985444_280915535709063_2479917909166522368_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/13166919_1237478906277317_1020585701_n.jpg'
  },
];
var photos9 = [
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/12424827_177965579225801_530643528_n.jpg',
  },
  {
    src: 'https://scontent-dft4-1.cdninstagram.com/t51.2885-15/e35/13702993_968202109959445_1913125753_n.jpg',
  },
  {
    src: 'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e35/19228218_1884097801856133_907460511572951040_n.jpg',
  },
];

class App extends Component {
  render() {
    var appStyle = {
      marginTop: 0,
      marginLeft: "10%",
      marginRight: "10%"
    }
    return (
      <div style={appStyle} className="App">
        <NavBar/>
        <PhotoCanvas/>
      </div>
    );
  }
};

export default App;
