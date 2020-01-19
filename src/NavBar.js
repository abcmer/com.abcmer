import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./NavBar.css";

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
                <Link to="/">
                  Adam Siemer
                </Link>
              </NavItem>
              <NavItem style={navItemStyle}>
                <Link to="/projects">
                  Projects
                </Link>
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
