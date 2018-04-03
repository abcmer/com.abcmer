import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';

export default class Experience extends Component {
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              July 2016 to Present
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              July 2013 to July 2016
            </NavLink>          
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              May 2012 to May 2013
            </NavLink>          
          </NavItem>          
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
          	<h2>PricewaterhouseCoopers - Chicago, IL</h2>
          	<h3>Senior Associate, Innovation Team</h3>
            <ul>
	            <li>Engineering back-end software as part of a platform to automate financial analysis of client ERP data.</li>
							<li>Demonstrated excellent technical troubleshooting skills, regularly debugging complex applications in a timely manner.</li>
							<li>Developed microservice API endpoints to manage the transfer of metadata throughout information systems.</li>
							<li>Practiced test driven development by writing unit tests and new functionality simultaneously.</li>
							<li>Configured build automation process to run a suite of unit and integration tests.</li>
							<li>Demonstrated excellent technical troubleshooting skills, regularly debugging complex applications in a timely manner.</li>
							<li>Designed framework to programmatically check data integrity of reports, saving hundreds of manual testing hours.</li>
							<li>Created a stair climbing challenge and tracking system for entire office, reporting team stats at quarterly meetings.</li>
						</ul>
          </TabPane>
          <TabPane tabId="2">
            <h2>PricewaterhouseCoopers - Chicago, IL</h2>
            <h3>Associate, Advanced Risk and Compliance Analytics</h3>
            <ul>
            	<li>Coded repeatable SAP data analytics in Python to identify potential SOD violations for large healthcare client.</li>
							<li>Delivered key findings of general ledger fraud testing through ETL process, leveraging SQL and ACL.</li>
							<li>Utilized offshore team in India to increase efficiency in order to meet critical deadlines.</li>
							<li>Designed data discovery dashboards in Tableau and Qlikview to bring insights to clients.</li>
							<li>Social committee co-lead, planning and executing events for a team of 100+ people.</li>
						</ul>
               
          </TabPane>
          <TabPane tabId="3">
            <h2>Kelley School of Business Tech Services - Bloomington, IN</h2>
            <h3>Graduate Assistant, IT Consultant</h3>
            <ul>
            <li>Acted as first point of contact for school’s IT help desk</li>
						<li>Providing technical support to over 400 faculty members, staff, and graduate students.</li>
						<li>Created series of technical video tutorials to educate customers as well as new employees.</li>
						<li>Configured wireless networks, install software, troubleshoot spyware issues, develop knowledge base.</li>

            </ul>               
          </TabPane>                      
        </TabContent>
      </div>
    );
  }
}

