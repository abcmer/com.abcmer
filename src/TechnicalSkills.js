
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import Skill from './Skill'

import CardStack from './Cardstack';
import Card from './Card';



import './TechnicalSkills.css'

const skills = [{
  name: 'Programming Languages',
  background: 'white',
  imgSrc: 'https://d30y9cdsu7xlg0.cloudfront.net/png/143968-200.png',
  imgBorderColor: '#015389',  
  yearsExperience: '3',
  skillDescription: 'Add Description........ ........... .......... ......... ............ ......... .......... ...'
}, {
  name: 'Frontend',
  background: 'white',
  imgSrc: 'https://cdn0.iconfinder.com/data/icons/scrum-team-symbols/220/frontend_developer-512.png',
  imgBorderColor: '#086C32',  
  yearsExperience: '5',
  skillDescription: "Add Description........ ........... .......... ......... ............ ......... .......... ..."
}, {
  name: 'Backend',
  background: 'white',
  imgSrc: 'https://cdn2.iconfinder.com/data/icons/computer-and-hardware-i-line-black/2048/Cloud_Computing-512.png',
  imgBorderColor: '#6A067A',  
  yearsExperience: '1',
  skillDescription: "Add Description........ ........... .......... ......... ............ ......... .......... ..."
}, {
  name: 'Data',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/programming/100/database_4-512.png',
  imgBorderColor: '#9D4F09',  
  yearsExperience: '1',
  skillDescription: "Add Description........ ........... .......... ......... ............ ......... .......... ..."
}, {
  name: 'Data Visualization',
  background: 'white',
  imgSrc: 'https://cdn4.iconfinder.com/data/icons/presentations/100/presentation-icons-04-512.png',
  imgBorderColor: '#9D4F09',  
  yearsExperience: '1',
  skillDescription: "Add Description........ ........... .......... ......... ............ ......... .......... ..."
}, {
  name: 'Additional',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/common-4/24/ui-01-512.png',
  imgBorderColor: '#9D4F09',  
  yearsExperience: '1',
  skillDescription: "Add Description........ ........... .......... ......... ............ ......... .......... ..."
}];


const SkillIcon = ({ imgSrc, borderColor }) => (
  <img
    style={{
      width: '60px',
      height: '60px',
    }}
    src={imgSrc}
  />
);

const DetailsRow = ({ icon, title, summary }) => {
  const renderSummary = () => {
    if (summary)  return (
      <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
        {summary}
      </p>
    );
    return null;
  };

  return (
    <div style={styles.detailsRow.row}>
      <span
      className={`icon ${icon}`}
      style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
      />
      <div style={{ width: '80%' }}>
        {renderSummary()}
      </div>
    </div>
  );
};

const SkillCard = (props) => (
  <div 
    style={{
      position: 'absolute',
      top: 0,
      border: '5px solid #0B233F'
    }}
    onClick={props.onClick}>
    <header style={styles.cardHeader} className='card-header-details'>
      <SkillIcon imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
      </div>
    </header>

    <div style={{color: '#0B233F'}}>
      <DetailsRow
        icon='ion-ios-telephone-outline'
        title={props.yearsExperience}
      />

      <DetailsRow
        icon='icon ion-ios-paper-outline'
        title='Main Role'
        summary={props.skillDescription}
      />
    </div>
  </div>
);

const styles = {
  cardHeader: {
    display: 'flex',
    height: '125px',
    justifyContent: 'space-between',
    padding: '10px 20px',
    color: '#0B233F',
  },
  headerName: {
    margin: 0,
    fontWeight: 500,
    fontSize: '25px',
    textAlign: 'right'
  },
  headerTitle: {
    margin: '4px 0 0',
    fontWeight: 300,
    fontSize: '17px',
    opacity: 0.8,
    textAlign: 'right'
  },
  detailsRow: {
    row: {
      width: '100%',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      margin: '25px 0',
    },
    icon: {
      display: 'block',
      width: '25px',
      height: '30px',
      margin: '0 20px 0 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontSize: '22px',
    },
    title: {
      fontWeight: 500,
      fontSize: '20px',
      margin: 0,
      fontFamily: "SF Pro Text,Myriad Set Pro,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif"
    },
  },
};


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
        <CardStack
          height={500}
          width={'65%'}
          background="#f8f8f8"
          hoverOffset={25}>

          {skills.map((person, i) =>
            <Card
              key={i}
              background={person.background}>
              <SkillCard {...person} />
            </Card>
          )}

        </CardStack>
      </div>
    );
  }
}





