import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home"
import TechnicalSkills from "./TechnicalSkills"
import Experience from "./Experience"
import Education from "./Education"

import './App.css';


class App extends Component {
  render() {
    return (     
      <HashRouter>
        <div>
          <div className="header">
            <div className="header-flex-container">
              <div className="app-title">
                <NavLink exact to="/"><h1>Adam Siemer</h1></NavLink>
              </div>
              <ul className="nav-bar">
                <NavLink to="/TechnicalSkills">
                  <li>Technical Skills</li>                
                </NavLink>              
                <NavLink to="/Experience">
                  <li>Experience</li>   
                </NavLink>              
                <NavLink to="/Education">
                  <li>Education</li>
                </NavLink>
              </ul>            
            </div>
            
          </div>         
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/TechnicalSkills" component={TechnicalSkills}/>
            <Route path="/Experience" component={Experience}/>
            <Route path="/Education" component={Education}/>                          
          </div>         
        </div>    
      </HashRouter>
    );
  }
}

export default App;
