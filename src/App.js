import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import TechnicalSkills from "./TechnicalSkills";
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
            <Route exact path="/" component={Home}/>
            <Route path="/technicalskills" component={TechnicalSkills}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Education}/>                          
          </div>         
        </div>    
      </HashRouter>
    );
  }
}

export default App;
