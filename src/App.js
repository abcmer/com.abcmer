import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Photography from "./Photography";
import Portfolio from "./Projects";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      innerHeight: 0
    };
  }

  updateDimensions() {
    this.setState({
      innerHeight: window.innerHeight
    });
    console.log(this.state.innerHeight);
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
                  <Photography />
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
