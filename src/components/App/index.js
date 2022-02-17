import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "../TopNav/TopNav"
import PhotoGrid from "../PhotoGrid";
import Portfolio from "../Projects/ProjectsList";
import {ProjectIFrame} from "../Projects/ProjectIFrame";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      innerHeight: 0,
      innerWidth: 0,
      initialLoad: true,
      drawerOpen: false
    };
  }

  updateDimensions() {
    this.setState({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <TopNav />            
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <PhotoGrid />
                </Route>
                <Route exact path="/projects">
                  <Portfolio />
                </Route>
                <Route exact path="/projects/snake">
                  <ProjectIFrame url="https://snake.abcmer.com" project="snake"/>
                </Route>
                <Route exact path="/projects/fortunes">
                  <ProjectIFrame url="https://fortunes.abcmer.com" project="fortunes"/>
                </Route>
                <Route exact path="/projects/allwork-noplay">
                  <ProjectIFrame url="https://allwork-noplay.abcmer.com" project="allwork-noplay"/>
                </Route>
                <Route exact path="/projects/nba-history">
                  <ProjectIFrame url="https://nba-history.abcmer.com" project="nba-history"/>
                </Route>                                                
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
