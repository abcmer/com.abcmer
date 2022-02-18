import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.css";

export default class Projects extends React.Component {
  render() {
    const projects = [
      {
        name: "nba-history-d3",
        description: "D3 visualization of NBA History",
        github: "https://github.com/abcmer/nba-history-d3",
        link: "https://nba-history.abcmer.com",
        imgSrc: require("../../static/project-thumbnails/nba-history.png"),
        imgAlt: "nba history d3 app"
      }, 
      {
        name: "snake",
        description: "Simple snake game",
        github: "https://github.com/abcmer/snake",
        link: "https://snake.abcmer.com/",
        imgSrc: require("../../static/project-thumbnails/snake.png"),
        imgAlt: "snake game"
      },  
      {
        name: "allwork-noplay",
        description: "All work and no play makes Adam a dull boy",
        github: "https://github.com/abcmer/allwork-noplay",
        link: "https://allwork-noplay.abcmer.com/?name=Adam&gender=boy",
        imgSrc: require("../../static/project-thumbnails/allwork-noplay.png"),
        imgAlt: "all work, no play app"
      },
      {
        name: "Red Carpet Challenge",
        description: "Film watching social media site on Kubernetes",
        github: "https://github.com/abcmer/RCC",
        link: "https://github.com/abcmer/RCC",
        imgSrc: require("../../static/project-thumbnails/red-carpet-challenge.png"),
        imgAlt: "red carpet challenge app"
      },      
      {
        name: "phish-stats",
        description: "Python project for generating Phish Stats",
        github: "https://github.com/abcmer/phish-stats",
        link: "https://github.com/abcmer/phish-stats",
        imgSrc: require("../../static/project-thumbnails/phish-stats.png"),
        imgAlt: "phish stats line graph"
      },      
      {
        name: "fortunes",
        description: "All the fortune cookies you desire, without getting full",
        github: "https://github.com/abcmer/fortunes",
        link: "https://fortunes.abcmer.com/",
        imgSrc: require("../../static/project-thumbnails/fortunes.png"),
        imgAlt: "fortunes app"
      }, 
    ];
    return (
      <Container id="projects" className="projects fade-in">
        <Row>
          {projects.map(project => {
            return (
              <Col className="project" md={{ size: 5, offset: 1 }}>
                <a href={project.link}>
                  <div>
                    <h3 className='project-title'>{project.name}</h3>
                    <img src={project.imgSrc} alt={project.imgAlt} />
                  </div>
                  <Row>
                    <Col />
                    <Col>
                      <a href={project.github}>Github</a>
                    </Col>
                    <Col />
                  </Row>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container >
    );
  }
}
