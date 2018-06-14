import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
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
          <div className="content">
            <Photography/>
            <Technical/>
            {/*<Experience/>*/}
            {/*<Education/>*/}
          </div>         
        </div>    
      </HashRouter>
    );
  }
}

export default App;
