import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { NavHashLink as NavLink } from "react-router-hash-link";

import "./NavBar.css";

const scrollFn = (element, offset) => {
  element.scrollIntoView({ block: "start" });
  window.scrollBy(0, offset);
};

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
      color: "white"
    };
    return (
      <div className="nav-container sticky">
        <Navbar color="black" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-sm-0 " navbar>
              <NavItem>
                <NavLink to="/#photography" scroll={el => scrollFn(el, -44)}>
                  Adam Siemer
                </NavLink>
              </NavItem>
              <NavItem style={navItemStyle}>
                <NavLink to="/#technical" scroll={el => scrollFn(el, 0)}>
                  Expertise
                </NavLink>
                <a href="https://drive.google.com/file/d/0B-R24Rv9imxkd3dnc3BYV1ZjeW8/view?usp=sharing">
                  Resume
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
