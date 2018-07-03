import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import FaMusic from 'react-icons/lib/fa/music';
import FaCode from 'react-icons/lib/fa/code';
import FaBarChart from 'react-icons/lib/fa/bar-chart';
import FaServer from 'react-icons/lib/fa/server';
import FaDatabase from 'react-icons/lib/fa/database';
import FaWrench from 'react-icons/lib/fa/wrench';

import ExpertiseCard from './ExpertiseCard';

import 'bootstrap/dist/css/bootstrap.css';

export const getFaMusic = () => <FaMusic/>;
export const getFaCode = () => <FaCode/>;
export const getFaBarChart = () => <FaBarChart/>;
export const getFaServer = () => <FaServer/>;
export const getFaDatabase = () => <FaDatabase/>;
export const getFaWrench = () => <FaWrench/>;



// const FaBeer = require('react-icons/lib/fa/beer');

const skills = [{
  'name': 'Python',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png',
  'skillCategory': 'language',
}, {
  'name': 'JavaScript',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'skillCategory': 'language',
}, {
  'name': 'HTML',
  'imgSrc': 'http://thewebrocks.com/demos/html5-3d-css/html5.png',
  'skillCategory': 'language'
}, {
  'name': 'CSS',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png',
  'skillCategory': 'language'
}, {
  'name': 'ReactJS',
  'imgSrc': 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Bootstrap',
  'imgSrc': 'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Flask',
  'imgSrc': 'http://flask.pocoo.org/docs/0.12/_static/flask.png',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'NodeJS',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
  'skillCategory': 'web-development'
}, {
  'name': 'Docker',
  'imgSrc': 'https://ih1.redbubble.net/image.386900865.0087/flat,800x800,075,f.jpg',
  'skillCategory': 'web-development'
}, {
  'name': 'Gunicorn',
  'imgSrc': 'http://www.stickpng.com/assets/images/584807f6cef1014c0b5e48e0.png',
  'skillCategory': 'web-development'
}, {
  'name': 'Nginx',
  'imgSrc': 'https://cdn-1.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png',
  'skillCategory': 'web-development'
}, {
  'name': 'uWSGI',
  'imgSrc': 'https://www.20tab.com/media/article/image-top/u.png',
  'skillCategory': 'web-development'
}, {
  'name': 'MySQL',
  'imgSrc': 'https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png',
  'skillCategory': 'data'
}, {
  'name': 'MongoDB',
  'imgSrc': 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg',
  'skillCategory': 'data'
}, {
  'name': 'MS SQL Server',
  'imgSrc': 'https://clipart.info/images/ccovers/1499955337microsoft-sql-server-logo-png.png',
  'skillCategory': 'data'
}, {
  'name': 'Pandas',
  'imgSrc': 'https://geo-python.github.io/2017/_images/pandas_logo.png',
  'skillCategory': 'data'
}, {
  'name': 'Numpy',
  'imgSrc': 'https://1.bp.blogspot.com/-CHMzy5L0Qcw/Wpy00BAw-dI/AAAAAAAAG9g/fBinxajEzcshsZPSemZIt37JlqOWdDWbQCLcBGAs/s1600/numpy.jpeg',
  'skillCategory': 'data'
}, {
  'name': 'SQLAlchemy',
  'imgSrc': 'https://www.fullstackpython.com/img/logos/sqlalchemy.jpg',
  'skillCategory': 'data'
}, {
  'name': 'Tableau',
  'imgSrc': 'http://www.lib.washington.edu/dataservices/images/Tableau_Software_logo.png/image',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Qlik',
  'imgSrc': 'https://www.scopesystems.com.au/assets/qlikview-1.png',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'D3',
  'imgSrc': 'https://ih0.redbubble.net/image.482086039.3183/flat,800x800,070,f.jpg',
  'skillCategory': 'frontend-dataviz'
}, {
  'name': 'Zoomdata',
  'imgSrc': 'https://www.zoomdata.com/sites/all/themes/zoomadu/logo.png',
  'skillCategory': 'data'
}, {
  'name': 'Git',
  'imgSrc': 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  'skillCategory': 'utility'
}, {
  'name': 'MS TFS/VSTS',
  'imgSrc': 'https://msdnshared.blob.core.windows.net/media/2016/10/favicon.png',
  'skillCategory': 'utility'
}, {
  'name': 'Adobe Photoshop',
  'imgSrc': 'https://seeklogo.com/images/A/adobe-photoshop-cs4-logo-A731187DA9-seeklogo.com.jpg',
  'skillCategory': 'utility'
}, {
  'name': 'iMovie',
  'imgSrc': 'https://vignette.wikia.nocookie.net/logopedia/images/6/6a/IMovie4.png/revision/latest?cb=20150622190412',
  'skillCategory': 'utility'
}, {
  'name': 'Saxophone',
  'imgSrc': 'https://cdn3.iconfinder.com/data/icons/saxophone/154/saxophone-round-512.png',
  'skillCategory': 'creative'
}, {
  'name': 'Piano',
  'imgSrc': 'https://cdn2.iconfinder.com/data/icons/eldorado-devices/40/piano_music-512.png',
  'skillCategory': 'creative'
}, {
  'name': 'Film',
  'imgSrc': 'https://png.icons8.com/metro/1600/film-reel.png',
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





