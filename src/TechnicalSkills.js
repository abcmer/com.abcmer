
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import SkillRating from './SkillRating'

import './TechnicalSkills.css'

export default class TechnicalSkills extends React.Component {
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
              Languages
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Web Development
            </NavLink>
          </NavItem>          
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Data
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Data Visualization
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              OS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Other
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <SkillRating skillName="Python" skillRating="3"/>
            <SkillRating skillName="SQL" skillRating="3"/>
            <SkillRating skillName="JavaScript" skillRating="3"/>
            <SkillRating skillName="HTML" skillRating="3"/>
            <SkillRating skillName="CSS" skillRating="3"/>  
            <SkillRating skillName="ShellScripting" skillRating="1"/>
            <SkillRating skillName="ACL" skillRating="2"/>            
          </TabPane>

          <TabPane tabId="2">
            <SkillRating skillName="Flask" skillRating="3"/>       
            <SkillRating skillName="Docker" skillRating="1"/>
            <SkillRating skillName="ReactJS" skillRating="3"/>       
            <SkillRating skillName="NodeJS" skillRating="1"/> 
            <SkillRating skillName="Flask-RESTful" skillRating="3"/>
            <SkillRating skillName="Jinja2" skillRating="2"/>                    
            <SkillRating skillName="Gunicorn" skillRating="2"/>       
            <SkillRating skillName="Nginx" skillRating="2"/>       
            <SkillRating skillName="uWSGI" skillRating="2"/>                   
          </TabPane>
          <TabPane tabId="3">   
            <SkillRating skillName="MySQL" skillRating="2"/>
            <SkillRating skillName="MS SQL Server" skillRating="2"/>
            <SkillRating skillName="Pandas" skillRating="3"/>
            <SkillRating skillName="Numpy" skillRating="2"/>
            <SkillRating skillName="SQLAlchemy" skillRating="2"/>           
          </TabPane>          
          <TabPane tabId="4">
            <SkillRating skillName="D3" skillRating="1"/>
            <SkillRating skillName="Tableau" skillRating="2"/>
            <SkillRating skillName="Qlik" skillRating="2"/>                   
          </TabPane>
          <TabPane tabId="5">  
            <SkillRating skillName="Windows" skillRating="2"/>
            <SkillRating skillName="Ubuntu" skillRating="3"/>
            <SkillRating skillName="RedHat" skillRating="2"/>
            <SkillRating skillName="Mac OS X" skillRating="2"/>                     
          </TabPane>
          <TabPane tabId="6">  
            <SkillRating skillName="Git" skillRating="3"/>
            <SkillRating skillName="REST" skillRating="3"/>
            <SkillRating skillName="MS Team Foundation Server" skillRating="2"/>
            <SkillRating skillName="Adobe Photoshop" skillRating="1"/>
            <SkillRating skillName="Final Cut Studio" skillRating="2"/>
            <SkillRating skillName="iMovie" skillRating="2"/>              
          </TabPane>
        </TabContent>
      </div>
    );
  }
}





