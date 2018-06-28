import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import { Scrollbars } from 'react-custom-scrollbars';
import NavBar from "./NavBar";
import Photography from "./Photography";
import Experience from "./Experience";
import Education from "./Education";
import Technical from "./Technical";

import './App.css';

class App extends Component {
  render() {
    return (     
      <HashRouter>
        <div>          
          <NavBar />
          <Scrollbars
            style={{ height: 732 }}>
          <div className="content">
            <Photography/>
            <Technical/>
            {/*<Experience/>*/}
            {/*<Education/>*/}
          </div>
          </Scrollbars>
        </div>    
      </HashRouter>
    );
  }
}

export default App;
