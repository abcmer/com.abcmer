import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
import TopNav from "../TopNav/TopNav"
import PhotoGrid from "../PhotoGrid";
import Portfolio from "../Projects";

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
            <TopNav />
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
