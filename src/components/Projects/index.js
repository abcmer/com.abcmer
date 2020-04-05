import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.css";

export default class Projects extends React.Component {
  render() {
    const projects = [
      {
        name: "Snake",
        description: "Simple snake clone",
        github: "https://github.com/abcmer/snake",
        link: "https://snake.abcmer.com/",
        imgSrc: require("../../static/project-thumbnails/snake.png"),
        imgAlt: "snake game"
      },
      {
        name: "Fortunes",
        description: "All the fortune cookies you desire, without getting full",
        github: "https://github.com/abcmer/fortunes",
        link: "https://www.fortunes.abcmer.com/",
        imgSrc: require("../../static/project-thumbnails/fortunes.png"),
        imgAlt: "fortunes app"
      },
      {
        name: "All Work, No Play",
        description: "All work and no play makes Adam a dull boy",
        github: "https://github.com/abcmer/allwork-noplay",
        link: "https://www.allwork-noplay.abcmer.com/?name=Adam&gender=boy",
        imgSrc: require("../../static/project-thumbnails/allwork-noplay.png"),
        imgAlt: "all work, no play app"
      },
    ];
    return (
      <Container id="projects" className="projects fade-in">
        <Row>
          {projects.map(project => {
            return (
              <Col className="project" sm={{ size: 3, offset: 1 }}>
                <a href={project.link}>
                  <div>
                    <h3>{project.name}</h3>
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
