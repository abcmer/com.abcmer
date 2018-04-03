
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Skill from './Skill'

import './TechnicalSkills.css'


const skills = [
  {
    'name': 'Python',
    'type': 'language',
    'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png',   
    'isLovedSkill': true,
    'isProSkill': true
  }, {
    'name': 'SQL',
    'type': 'language',
    'icon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLKiNIzTEqxIV4qQ9GtUpgrRV9ojWl0IsaD9mjyvJ7ykz5tPc',   
    'isLovedSkill': true,
    'isProSkill': true
  }, {
    'name': 'JavaScript',
    'type': 'language',
    'icon': 'data:image/jpeg;base64,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',   
    'isLovedSkill': true,
    'isProSkill': false
  }, {
    'name': 'Shell Scripting',
    'type': 'language',
    'icon': 'https://cdn4.iconfinder.com/data/icons/document-file-types-black/347/extention_file_type_black_115-512.png',   
    'isLovedSkill': false,
    'isProSkill': false
  }, {
    'name': 'ACL',
    'type': 'language',
    'icon': 'http://www.4sight-tech.com/Gallery/Products/ACLLogo.png',   
    'isLovedSkill': false,
    'isProSkill': false
  }

]

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
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {skills.filter(skill => skill.type === 'language').map(skill =>
              <Skill skill={skill}/>
              )
            }         
          </TabPane>

        </TabContent>
      </div>
    );
  }
}





