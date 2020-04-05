import React, { useState } from "react";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // const navItemStyle = {
  //   color: "white"
  // };

  return (
    <div className="nav-container sticky">
      <Navbar color="black" light expand="md">
        <NavbarBrand>
          <Link to="/">
            Adam Siemer
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-sm-0 " navbar>
            <NavItem>
              <NavLink href="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://drive.google.com/file/d/0B-R24Rv9imxkd3dnc3BYV1ZjeW8/view?usp=sharing">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}
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
          <NavItem>
            <Link to="/">
              Adam Siemer
                </Link>
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-sm-0 " navbar>

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
