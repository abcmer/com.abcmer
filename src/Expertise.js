import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FaMusic from 'react-icons/lib/fa/music';
import FaCode from 'react-icons/lib/fa/code';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaServer from 'react-icons/lib/fa/server';
import FaDatabase from 'react-icons/lib/fa/database';
import FaWrench from 'react-icons/lib/fa/wrench';

import ExpertiseCard from './ExpertiseCard';

import Python from './static/logos/python.png';
import NodeJS from './static/logos/nodeJS.png';
// const NodeJS = );

import 'bootstrap/dist/css/bootstrap.css';

export const getFaMusic = () => <FaMusic/>;
export const getFaCode = () => <FaCode/>;
export const getFaBarChart = () => <FaBarChart/>;
export const getFaServer = () => <FaServer/>;
export const getFaDatabase = () => <FaDatabase/>;
export const getFaWrench = () => <FaWrench/>;

const skills = [{
  'name': 'Python',
  'imgSrc': require('./static/logos/python.png'),
  'skillCategory': 'language',
}, {
  'name': 'JavaScript',
  'imgSrc': require('./static/logos/javascript.jpeg'),
  'skillCategory': 'language',
}, {
  'name': 'HTML',
  'imgSrc': require('./static/logos/html5.png'),
  'skillCategory': 'language'
}, {
  'name': 'CSS',
  'imgSrc': require('./static/logos/css.jpg'),
  'skillCategory': 'language'
}, {
  'name': 'ReactJS',
  'imgSrc': require('./static/logos/react.png'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Bootstrap',
  'imgSrc': require('./static/logos/bootstrap.png'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Flask',
  'imgSrc': require('./static/logos/flask.jpg'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'NodeJS',
  'imgSrc': require('./static/logos/nodeJS.png'),
  'skillCategory': 'web-development'
}, {
  'name': 'Docker',
  'imgSrc': require('./static/logos/docker.png'),
  'skillCategory': 'web-development'
}, {
  'name': 'Gunicorn',
  'imgSrc': require('./static/logos/gunicorn.png'),
  'skillCategory': 'web-development'
}, {
  'name': 'Nginx',
  'imgSrc': require('./static/logos/nginx.png'),
  'skillCategory': 'web-development'
}, {
  'name': 'uWSGI',
  'imgSrc': require('./static/logos/uwsgi.png'),
  'skillCategory': 'web-development'
}, {
  'name': 'MySQL',
  'imgSrc': require('./static/logos/mysql.png'),
  'skillCategory': 'data'
}, {
  'name': 'MongoDB',
  'imgSrc': require('./static/logos/mongo.png'),
  'skillCategory': 'data'
}, {
  'name': 'MS SQL Server',
  'imgSrc': require('./static/logos/sqlServer.png'),
  'skillCategory': 'data'
}, {
  'name': 'Pandas',
  'imgSrc': require('./static/logos/pandas.png'),
  'skillCategory': 'data'
}, {
  'name': 'Postgres',
  'imgSrc': require('./static/logos/postgres.png'),
  'skillCategory': 'data'
}, {
  'name': 'Sql Alchemy',
  'imgSrc': require('./static/logos/sqlAlchemy.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Tableau',
  'imgSrc': require('./static/logos/tableau.gif'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Qlik',
  'imgSrc': require('./static/logos/qlik.png'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'D3',
  'imgSrc': require('./static/logos/d3Js.jpeg'),
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Zoomdata',
  'imgSrc': require('./static/logos/zoomdata.jpg'),
  'skillCategory': 'data'
}, {
  'name': 'Git',
  'imgSrc': require('./static/logos/git.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Trello',
  'imgSrc': require('./static/logos/trello.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Sublime',
  'imgSrc': require('./static/logos/sublime.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Atom',
  'imgSrc': require('./static/logos/atom.png'),
  'skillCategory': 'utility'
}, {
  'name': 'InteliJ',
  'imgSrc': require('./static/logos/intelliJ-IDEA.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Postman',
  'imgSrc': require('./static/logos/postman.png'),
  'skillCategory': 'utility'
}, {
  'name': 'Adobe Photoshop',
  'imgSrc': require('./static/logos/photoshop.jpg'),
  'skillCategory': 'utility'
}, {
  'name': 'Saxophone',
  'imgSrc': require('./static/logos/saxophone.png'),
  'skillCategory': 'creative'
}, {
  'name': 'Piano',
  'imgSrc': require('./static/logos/piano.png'),
  'skillCategory': 'creative'
}, {
  'name': 'Film',
  'imgSrc': require('./static/logos/film.png'),
  'skillCategory': 'creative'
}];

const skillCategories = [{
  name: 'Languages',
  background: 'white',
  getIcon: getFaCode,
  imgBorderColor: '#015389',
  yearsExperience: '3',
  skills: skills.filter(skill => skill.skillCategory === 'language'),
}, {
  name: 'Frontend / Data Viz',
  background: 'white',
  getIcon: getFaBarChart,
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'frontend-dataviz')
}, {
  name: 'Backend / DevOps',
  background: 'white',
  getIcon: getFaServer,
  imgBorderColor: '#086C32',
  yearsExperience: '5',
  skills: skills.filter(skill => skill.skillCategory === 'web-development')
}, {
  name: 'Database',
  background: 'white',
  getIcon: getFaDatabase,
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'data')
}, {
  name: 'Utility',
  background: 'white',
  getIcon: getFaWrench,
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'utility')
}, {
  name: 'Creativity',
  background: 'white',
  getIcon: getFaMusic,
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'creative')
}
];

export default class Example extends React.Component {
  render() {
    return (
      <Container id="technical" className="content-block-normal">
        <Row>
          {skillCategories.map(category => {
            return(
              <Col sm={{ size: 4, offset: 0 }}>
                <ExpertiseCard category={category}/>
              </Col>
            )
          })}
        </Row>
      </Container>
    );
  }
}





