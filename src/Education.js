import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Diploma from './Diploma'

import bachelorsDiplomaImg from './static/SiemerAdam_bachelors_diploma.png';
import mastersDiplomaImg from './static/SiemerAdam_masters_diploma.png';

export default class Education extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div id='education'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              May 2013
            </NavLink>          
          </NavItem>        
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              May 2012
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Diploma src={mastersDiplomaImg} alt='Masters_Degree' />                 
          </TabPane>    
          <TabPane tabId="2">
            <Diploma src={bachelorsDiplomaImg} alt='Bachelors_Degree' />                     
          </TabPane>                
        </TabContent>
      </div>
    );
  }
}

