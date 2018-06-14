import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

import TechnicalIcon from './TechnicalIcon';

import 'bootstrap/dist/css/bootstrap.css';
import './TechnicalArea.css'

const TechnicalArea = (props) => {
  const categoryImgSrc = props.category.imgSrc;
  const categoryName = props.category.name;
  const skills = props.category.skills;

  const cardBodyStyle = {
    backgroundColor: '#0B233F'
  }
  const imgStyle = {
    height: '50px',
    width: '50px'
  }
  return (
      <Card >
        <div className="card-header">
          <CardImg width="100%" src={categoryImgSrc} alt="Card image cap" />
          <h1>{categoryName}</h1>
        </div>
        <CardBody style={cardBodyStyle}>
          <Row>
            {skills.map(skill => {
              return(
                <Col sm={{ size: 'auto', offset: 0}}>
                  <TechnicalIcon imgSrc={skill.imgSrc} height='40px' width='40px'/>
                </Col>
              );
            })}
          </Row>
        </CardBody>
        <div className="card-footer"/>
      </Card>
  );
};

export default TechnicalArea;