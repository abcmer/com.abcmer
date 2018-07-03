import React, { Component } from 'react';
import {
  HashRouter
} from "react-router-dom";

import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from "./NavBar";
import Photography from "./Photography";
import Expertise from "./Expertise";
import Footer from "./Footer";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      innerHeight: 0
    }
  }

  updateDimensions() {
    this.setState({
      innerHeight: window.innerHeight
    })
    console.log(this.state.innerHeight);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (     
      <HashRouter>
        <div>          
          <NavBar />
          <Scrollbars
            style={{ height: this.state.innerHeight }}>
          <div className="content">
            <Photography/>
            <Expertise/>
            <Footer/>
          </div>
          </Scrollbars>
        </div>    
      </HashRouter>
    );
  }
}

export default App;
