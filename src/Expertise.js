import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ExpertiseCard from './ExpertiseCard';
import 'bootstrap/dist/css/bootstrap.css';

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
  'skillCategory': 'web-development'
}, {
  'name': 'Bootstrap',
  'imgSrc': 'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png',
  'skillCategory': 'web-development'
}, {
  'name': 'Flask',
  'imgSrc': 'http://flask.pocoo.org/docs/0.12/_static/flask.png',
  'skillCategory': 'web-development'
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
  'skillCategory': 'dataViz'
}, {
  'name': 'Qlik',
  'imgSrc': 'https://www.scopesystems.com.au/assets/qlikview-1.png',
  'skillCategory': 'dataViz'
}, {
  'name': 'D3',
  'imgSrc': 'https://ih0.redbubble.net/image.482086039.3183/flat,800x800,070,f.jpg',
  'skillCategory': 'dataViz'
}, {
  'name': 'Zoomdata',
  'imgSrc': 'https://www.zoomdata.com/sites/all/themes/zoomadu/logo.png',
  'skillCategory': 'dataViz'
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
}]

const skillCategories = [{
  name: 'Languages',
  background: 'white',
  imgSrc: 'https://d30y9cdsu7xlg0.cloudfront.net/png/143968-200.png',
  imgBorderColor: '#015389',
  yearsExperience: '3',
  skills: skills.filter(skill => skill.skillCategory === 'language'),
}, {
  name: 'Web Development',
  background: 'white',
  imgSrc: 'https://cdn0.iconfinder.com/data/icons/scrum-team-symbols/220/frontend_developer-512.png',
  imgBorderColor: '#086C32',
  yearsExperience: '5',
  skills: skills.filter(skill => skill.skillCategory === 'web-development')
}, {
  name: 'Database',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/programming/100/database_4-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'data')
  // skills: "MySQL, MongoDB, MS SQL Server, Pandas, Numpy, SQLAlchemy ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}, {
  name: 'Data Visualization',
  background: 'white',
  imgSrc: 'https://cdn4.iconfinder.com/data/icons/presentations/100/presentation-icons-04-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'dataViz')
  // skills: "Tableau, Qlik, D3 ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}, {
  name: 'Utility',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/common-4/24/ui-01-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  skills: skills.filter(skill => skill.skillCategory === 'utility')
  // skills: "Git, REST, MS Team Foundation Server, Adobe Photoshop, Final Cut Studio, iMovie ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
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





