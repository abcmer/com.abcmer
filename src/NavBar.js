import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import {
  NavLink
} from "react-router-dom";

import './NavBar.css'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    var navItemStyle = {
      color: 'white'
    }
    return (
      <div className="nav-container">
        <div className="wrapper">
          <Navbar color="black" light expand="md">
            <NavLink exact to="/"><h1>Adam Siemer</h1></NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={navItemStyle}>
                  <NavLink to="/technicalskills">Technical Skills</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/experience">Experience</NavLink>
                </NavItem>   
                <NavItem>
                  <NavLink to="/education">Education</NavLink>
                </NavItem>                                                           
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}