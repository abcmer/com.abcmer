import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AppHeader from "./AppHeader"
import About from "./About"
import TechnicalSkills from "./TechnicalSkills"
import Experience from "./Experience"
import Education from "./Education"
import Interests from "./Interests"

import './App.css';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <AppHeader/>
          <div className="app-body">
            <ul className="nav-side-panel">
              <NavLink exact to="/">
                <li>About</li>
              </NavLink>
              <NavLink to="/TechnicalSkills">
                <li>Interests</li>                
              </NavLink>              
              <NavLink to="/Experience">
                <li>Experience</li>
              </NavLink>              
              <NavLink to="/Education">
                <li>Education</li>
              </NavLink>
              <NavLink to="/Interests">
                <li>Technical Skills</li>
              </NavLink>  
            </ul>
            <div className="content">
              <Route exact path="/" component={About}/>
              <Route path="/TechnicalSkills" component={TechnicalSkills}/>
              <Route path="/Experience" component={Experience}/>
              <Route path="/Education" component={Education}/>              
              <Route path="/Interests" component={Interests}/>              
            </div>
          </div>          
        </div>    
      </HashRouter>
    );
  }
}

export default App;
