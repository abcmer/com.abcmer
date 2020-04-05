import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import PhotoGrid from "../PhotoGrid/PhotoGrid";
import Portfolio from "../Projects/Projects";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      innerHeight: 0,
      innerWidth: 0,
      initialLoad: true,
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
            <NavBar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <PhotoGrid />
                </Route>
                <Route exact path="/projects">
                  <Portfolio />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}
