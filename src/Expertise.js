import React from "react";
import { Container, Row, Col } from "reactstrap";

import FaMusic from "react-icons/lib/fa/music";
import FaCode from "react-icons/lib/fa/code";
import FaBarChart from "react-icons/lib/fa/bar-chart";
import FaServer from "react-icons/lib/fa/server";
import FaDatabase from "react-icons/lib/fa/database";
import FaWrench from "react-icons/lib/fa/wrench";
import FaStar from "react-icons/lib/fa/star";

import ExpertiseCard from "./ExpertiseCard";

import "bootstrap/dist/css/bootstrap.css";

const getFaMusic = () => <FaMusic />;
const getFaCode = () => <FaCode />;
const getFaServer = () => <FaServer />;
const getFaDatabase = () => <FaDatabase />;
const getFaWrench = () => <FaWrench />;
const getFaStar = () => <FaStar />;

const skills = [
  {
    name: "Python",
    imgSrc: require("./static/logos/python.png"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "JavaScript",
    imgSrc: require("./static/logos/javascript.jpeg"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "ReactJS",
    imgSrc: require("./static/logos/react.png"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "HTML",
    imgSrc: require("./static/logos/html5.png"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "CSS",
    imgSrc: require("./static/logos/css.png"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "Bootstrap",
    imgSrc: require("./static/logos/bootstrap.png"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "Flask",
    imgSrc: require("./static/logos/flask.jpg"),
    skillCategory: "languages-frameworks"
  },
  {
    name: "MySQL",
    imgSrc: require("./static/logos/mysql.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "MongoDB",
    imgSrc: require("./static/logos/mongo.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "MS SQL Server",
    imgSrc: require("./static/logos/sqlServer.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Pandas",
    imgSrc: require("./static/logos/pandas.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Postgres",
    imgSrc: require("./static/logos/postgres.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Sql Alchemy",
    imgSrc: require("./static/logos/sqlAlchemy.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Tableau",
    imgSrc: require("./static/logos/tableau.gif"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Qlik",
    imgSrc: require("./static/logos/qlik.png"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "D3",
    imgSrc: require("./static/logos/d3Js.jpeg"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "Zoomdata",
    imgSrc: require("./static/logos/zoomdata.jpg"),
    skillCategory: "data-storage-viz"
  },
  {
    name: "NodeJS",
    imgSrc: require("./static/logos/nodeJS.png"),
    skillCategory: "backend-devops"
  },
  {
    name: "Docker",
    imgSrc: require("./static/logos/docker.png"),
    skillCategory: "backend-devops"
  },
  {
    name: "Gunicorn",
    imgSrc: require("./static/logos/gunicorn.png"),
    skillCategory: "backend-devops"
  },
  {
    name: "Nginx",
    imgSrc: require("./static/logos/nginx.png"),
    skillCategory: "backend-devops"
  },
  {
    name: "uWSGI",
    imgSrc: require("./static/logos/uwsgi.png"),
    skillCategory: "backend-devops"
  },
  {
    name: "Git",
    imgSrc: require("./static/logos/git.png"),
    skillCategory: "utility"
  },
  {
    name: "Trello",
    imgSrc: require("./static/logos/trello.png"),
    skillCategory: "utility"
  },
  {
    name: "Jira",
    imgSrc: require("./static/logos/jira.png"),
    skillCategory: "utility"
  },
  {
    name: "Sublime",
    imgSrc: require("./static/logos/sublime.png"),
    skillCategory: "utility"
  },
  {
    name: "Atom",
    imgSrc: require("./static/logos/atom.png"),
    skillCategory: "utility"
  },
  {
    name: "InteliJ",
    imgSrc: require("./static/logos/intelliJ-IDEA.png"),
    skillCategory: "utility"
  },
  {
    name: "Postman",
    imgSrc: require("./static/logos/postman.png"),
    skillCategory: "utility"
  },
  {
    name: "Saxophone",
    imgSrc: require("./static/logos/saxophone.png"),
    skillCategory: "creativity"
  },
  {
    name: "Piano",
    imgSrc: require("./static/logos/piano.png"),
    skillCategory: "creativity"
  },
  {
    name: "Film",
    imgSrc: require("./static/logos/film.png"),
    skillCategory: "creativity"
  },
  {
    name: "Graphic Design",
    imgSrc: require("./static/logos/graphic-design.png"),
    skillCategory: "creativity"
  },
  {
    name: "Graphic Design",
    imgSrc: require("./static/logos/graphic-design.png"),
    skillCategory: "soft-skills"
  },
  {
    name: "Graphic Design",
    imgSrc: require("./static/logos/graphic-design.png"),
    skillCategory: "soft-skills"
  },
  {
    name: "Graphic Design",
    imgSrc: require("./static/logos/graphic-design.png"),
    skillCategory: "soft-skills"
  },
  {
    name: "Graphic Design",
    imgSrc: require("./static/logos/graphic-design.png"),
    skillCategory: "soft-skills"
  }
];

const skillCategories = [
  {
    name: "Languages & Frameworks",
    background: "white",
    getIcon: getFaCode,
    imgBorderColor: "#015389",
    yearsExperience: "3",
    skills: skills.filter(
      skill => skill.skillCategory === "languages-frameworks"
    )
  },
  {
    name: "Data Storage & Visualization",
    background: "white",
    getIcon: getFaDatabase,
    imgBorderColor: "#9D4F09",
    yearsExperience: "1",
    skills: skills.filter(skill => skill.skillCategory === "data-storage-viz")
  },
  {
    name: "Backend / DevOps",
    background: "white",
    getIcon: getFaServer,
    imgBorderColor: "#086C32",
    yearsExperience: "5",
    skills: skills.filter(skill => skill.skillCategory === "backend-devops")
  },
  {
    name: "Utility",
    background: "white",
    getIcon: getFaWrench,
    imgBorderColor: "#9D4F09",
    yearsExperience: "1",
    skills: skills.filter(skill => skill.skillCategory === "utility")
  },
  {
    name: "Creativity",
    background: "white",
    getIcon: getFaMusic,
    imgBorderColor: "#9D4F09",
    yearsExperience: "1",
    skills: skills.filter(skill => skill.skillCategory === "creativity")
  }
];

export default class Example extends React.Component {
  render() {
    return (
      <Container id="technical" className="content-block-normal">
        <Row>
          {skillCategories.map(category => {
            return (
              <Col sm={{ size: 4, offset: 0 }}>
                <ExpertiseCard category={category} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
