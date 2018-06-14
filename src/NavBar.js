import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

// import {
//   NavLink
// } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';

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
      <div className="nav-container sticky">
          <Navbar color="black" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-sm-0 " navbar>
                <NavItem>
                  <NavLink
                    to="/#abcmer"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >Adam Siemer</NavLink>
                </NavItem>
                <NavItem style={navItemStyle}>
                  <NavLink
                    to="/#technicalskills"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >Technical</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/#experience"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >Experience</NavLink>
                </NavItem>   
                <NavItem>
                  <NavLink
                    to="/#education"
                    scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >Education</NavLink>
                </NavItem>                                                           
              </Nav>
            </Collapse>
          </Navbar>
      </div>
    );
  }
}