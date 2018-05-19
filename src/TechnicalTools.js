import React from 'react';

import CardStack from './CardStack'
import Card from './Card'
import Tooltip from 'reactstrap'

import './TechnicalTools.css'

const tools = [{
  'name': 'Python',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png',
  'toolCategory': 'language',
}, {
  'name': 'SQL',
  'imgSrc': 'https://cdn2.iconfinder.com/data/icons/line-design-database-set-4/21/sql-512.png',
  'toolCategory': 'language',
}, {
  'name': 'JavaScript',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'toolCategory': 'language',
}, {
  'name': 'HTML',
  'imgSrc': 'http://thewebrocks.com/demos/html5-3d-css/html5.png',
  'toolCategory': 'language'
}, {
  'name': 'CSS',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png',
  'toolCategory': 'language'
}, {
  'name': 'ReactJS',
  'imgSrc': 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
  'toolCategory': 'frontend'
}, {
  'name': 'Bootstrap',
  'imgSrc': 'https://getbootstrap.com/docs/4.1/assets/img/bootstrap-stack.png',
  'toolCategory': 'frontend'
}, {
  'name': 'Flask',
  'imgSrc': 'http://flask.pocoo.org/docs/0.12/_static/flask.png',
  'toolCategory': 'frontend'
}, {
  'name': 'Jina2',
  'imgSrc': 'http://jinja.pocoo.org/docs/2.10/_static/jinja-small.png',
  'toolCategory': 'frontend'
}, {
  'name': 'Flask-Restful',
  'imgSrc': 'http://flask-restful.readthedocs.io/en/latest/_static/flask-restful-small.png',
  'toolCategory': 'backend'
}, {
  'name': 'NodeJS',
  'imgSrc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
  'toolCategory': 'backend'
}, {
  'name': 'Docker',
  'imgSrc': 'https://ih1.redbubble.net/image.386900865.0087/flat,800x800,075,f.jpg',
  'toolCategory': 'backend'
}, {
  'name': 'Gunicorn',
  'imgSrc': 'http://www.stickpng.com/assets/images/584807f6cef1014c0b5e48e0.png',
  'toolCategory': 'backend'
}, {
  'name': 'Nginx',
  'imgSrc': 'https://cdn-1.wp.nginx.com/wp-content/uploads/2015/04/NGINX_logo_rgb-01.png',
  'toolCategory': 'backend'
}, {
  'name': 'uWSGI',
  'imgSrc': 'https://www.20tab.com/media/article/image-top/u.png',
  'toolCategory': 'backend'
}, {
  'name': 'MySQL',
  'imgSrc': 'https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png',
  'toolCategory': 'data'
}, {
  'name': 'MongoDB',
  'imgSrc': 'https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg',
  'toolCategory': 'data'
}, {
  'name': 'MS SQL Server',
  'imgSrc': 'https://clipart.info/images/ccovers/1499955337microsoft-sql-server-logo-png.png',
  'toolCategory': 'data'
}, {
  'name': 'Pandas',
  'imgSrc': 'https://geo-python.github.io/2017/_images/pandas_logo.png',
  'toolCategory': 'data'
}, {
  'name': 'Numpy',
  'imgSrc': 'https://1.bp.blogspot.com/-CHMzy5L0Qcw/Wpy00BAw-dI/AAAAAAAAG9g/fBinxajEzcshsZPSemZIt37JlqOWdDWbQCLcBGAs/s1600/numpy.jpeg',
  'toolCategory': 'data'
}, {
  'name': 'SQLAlchemy',
  'imgSrc': 'https://www.fullstackpython.com/img/logos/sqlalchemy.jpg',
  'toolCategory': 'data'
}, {
  'name': 'Tableau',
  'imgSrc': 'http://www.lib.washington.edu/dataservices/images/Tableau_Software_logo.png/image',
  'toolCategory': 'dataViz'
}, {
  'name': 'Qlik',
  'imgSrc': 'https://www.scopesystems.com.au/assets/qlikview-1.png',
  'toolCategory': 'dataViz'
}, {
  'name': 'D3',
  'imgSrc': 'https://ih0.redbubble.net/image.482086039.3183/flat,800x800,070,f.jpg',
  'toolCategory': 'dataViz'
}, {
  'name': 'Zoomdata',
  'imgSrc': 'https://www.zoomdata.com/sites/all/themes/zoomadu/logo.png',
  'toolCategory': 'dataViz'
}, {
  'name': 'Git',
  'imgSrc': 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  'toolCategory': 'additional'
}, {
  'name': 'MS TFS/VSTS',
  'imgSrc': 'https://msdnshared.blob.core.windows.net/media/2016/10/favicon.png',
  'toolCategory': 'additional'
}, {
  'name': 'Adobe Photoshop',
  'imgSrc': 'https://seeklogo.com/images/A/adobe-photoshop-cs4-logo-A731187DA9-seeklogo.com.jpg',
  'toolCategory': 'additional'
}, {
  'name': 'iMovie',
  'imgSrc': 'https://vignette.wikia.nocookie.net/logopedia/images/6/6a/IMovie4.png/revision/latest?cb=20150622190412',
  'toolCategory': 'additional'
}]


const toolCategories = [{
  name: 'Programming Languages',
  background: 'white',
  imgSrc: 'https://d30y9cdsu7xlg0.cloudfront.net/png/143968-200.png',
  imgBorderColor: '#015389',  
  yearsExperience: '3',
  tools: tools.filter(tool => tool.toolCategory === 'language'),

    // 'Python, SQL, JavaScript, HTML, CSS ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. '
}, {
  name: 'Frontend',
  background: 'white',
  imgSrc: 'https://cdn0.iconfinder.com/data/icons/scrum-team-symbols/220/frontend_developer-512.png',
  imgBorderColor: '#086C32',
  yearsExperience: '5',
  tools: tools.filter(tool => tool.toolCategory === 'frontend')
}, {
  name: 'Backend',
  background: 'white',
  imgSrc: 'https://cdn2.iconfinder.com/data/icons/computer-and-hardware-i-line-black/2048/Cloud_Computing-512.png',
  imgBorderColor: '#6A067A',
  yearsExperience: '1',
  tools: tools.filter(tool => tool.toolCategory === 'backend')
  // tools: "Flask-RESTful, NodeJS, Docker, Gunicorn, Nginx, uWSGI ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}, {
  name: 'Data',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/programming/100/database_4-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  tools: tools.filter(tool => tool.toolCategory === 'data')
  // tools: "MySQL, MongoDB, MS SQL Server, Pandas, Numpy, SQLAlchemy ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}, {
  name: 'Data Visualization',
  background: 'white',
  imgSrc: 'https://cdn4.iconfinder.com/data/icons/presentations/100/presentation-icons-04-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  tools: tools.filter(tool => tool.toolCategory === 'dataViz')
  // tools: "Tableau, Qlik, D3 ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}, {
  name: 'Additional',
  background: 'white',
  imgSrc: 'https://cdn3.iconfinder.com/data/icons/common-4/24/ui-01-512.png',
  imgBorderColor: '#9D4F09',
  yearsExperience: '1',
  tools: tools.filter(tool => tool.toolCategory === 'additional')
  // tools: "Git, REST, MS Team Foundation Server, Adobe Photoshop, Final Cut Studio, iMovie ....... ...... ..... ...... ..... .......... ............... .............. ......... .............. "
}
];


const ToolIcon = ({ imgSrc, borderColor }) => (
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


const ToolCard = (props) => (
  <div 
    style={{
      position: 'absolute',
      top: 0,
      border: '5px solid #0B233F',
      width: '100%'
    }}
    onClick={props.onClick}>
    <header style={styles.cardHeader} className='card-header-details'>
      <ToolIcon imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{props.title}</h3>
      </div>
    </header>

    <div style={{color: '#0B233F'}}>
      {props.tools.map((tool) => (
        <div className="tooltips">
          <img className="tool-icon"  src={tool.imgSrc}/>
          <span className="tooltipstext">{tool.name}</span>
        </div>
      ))}
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
    toolLogo: {
      width: '60px',
      height: '60px'
    }
  },
};


export default class TechnicalTools extends React.Component {
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
          width={'100%'}
          background="#f8f8f8"
          hoverOffset={25}>


          {toolCategories.map((category, i) =>
            <Card
              key={i}
              background={category.background}>
              <ToolCard {...category} />
            </Card>
          )}

        </CardStack>
      </div>
    );
  }
}





