import React from 'react';

import CardStack from './CardStack'
import Card from './Card'

import './Experience.css'

const jobs = [{
  position: 'Senior Associate',
  background: 'white',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg',
  imgwidth: '32.93807px',
  imgheight: '25px',
  dateRange: 'July 2016 to Present',
  location: 'Chicago, IL',
  roleDescription: 'Engineering back-end software as part of a platform to automate financial analysis of client ERP data. Demonstrated excellent technical troubleshooting skills, regularly debugging complex applications in a timely manner. Developed microservice API endpoints to manage the transfer of metadata throughout information systems. Practiced test driven development by writing unit tests and new functionality simultaneously.  Configured build automation process to run a suite of unit and integration tests. Demonstrated excellent technical troubleshooting skills, regularly debugging complex applications in a timely manner. Designed framework to programmatically check data integrity of reports, saving hundreds of manual testing hours. Created a stair climbing challenge and tracking system for entire office, reporting team stats at quarterly meetings.'
}, {
  position: 'Associate',
  background: 'white',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg',
  imgwidth: '79.051383px',
  imgheight: '25px',
  dateRange: 'July 2013 to July 2016',
  location: "Chicago, IL",
  roleDescription: 'Coded repeatable SAP data analytics in Python to identify potential SOD violations for large healthcare client. Delivered key findings of general ledger fraud testing through ETL process, leveraging SQL and ACL. Utilized offshore team in India to increase efficiency in order to meet critical deadlines. Designed data discovery dashboards in Tableau and Qlikview to bring insights to clients. Social committee co-lead, planning and executing events for a team of 100+ people.'
}, {
  position: 'IT Consultant',
  background: 'white',
  imgSrc: 'https://brand.iu.edu/images/resources-trident.jpg',
  imgwidth: '60px',
  imgheight: '60px',
  dateRange: 'May 2012 to May 2013',
  location: "Bloomington, IN",
  roleDescription: 'Acted as first point of contact for school’s IT help desk Providing technical support to over 400 faculty members, staff, and graduate students. Created series of technical video tutorials to educate customers as well as new employees. Configured wireless networks, install software, troubleshoot spyware issues, develop knowledge base.'
}];


const CompanyLogo = ({ imgSrc, borderColor }) => (
  <img
    style={{
      width: '60px',
      height: '60px',
    }}
    src={imgSrc}
  />
);

const DetailsRow = ({ icon, dateRange, summary }) => {
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
              <h2 style={styles.detailsRow.dateRange}>
                      {dateRange}
              </h2>
        {renderSummary()}
      </div>
    </div>
  );
};

const JobCard = (props) => (
  <div 
    style={{
      position: 'absolute',
      top: 0,
      border: '5px solid #0B233F'
    }}
    onClick={props.onClick}>
    <header style={styles.cardHeader} className='card-header-details'>
      <CompanyLogo imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.position}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.dateRange}</h3>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.location}</h3>
      </div>
    </header>

    <div style={{color: '#0B233F'}}>
      <DetailsRow
        icon='icon ion-ios-paper-outline'
        title='Main Role'
        summary={props.roleDescription}
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
      height: '25px',
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


export default class Experience extends React.Component {
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
      <div id='experience'>
        <CardStack
          height={500}
          width={'100%'}
          background="#f8f8f8"
          hoverOffset={25}>

          {jobs.map((job, i) =>
            <Card
              key={i}
              background={job.background}>
              <JobCard {...job} />
            </Card>
          )}
        </CardStack>
      </div>
    );
  }
}



