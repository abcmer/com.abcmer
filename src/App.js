import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TechnicalTools from "./TechnicalTools";
import Experience from "./Experience";
import Education from "./Education";

import './App.css';

class App extends Component {
  render() {
    return (     
      <HashRouter>
        <div>          
          <NavBar />
          <div className="content">
            <Home/>
            <TechnicalTools/>
            <Experience/>
            <Education/>
          </div>         
        </div>    
      </HashRouter>
    );
  }
}

export default App;
