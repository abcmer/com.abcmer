import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Slider from "react-slick";

import ExpertiseIcon from './ExpertiseIcon';

import 'bootstrap/dist/css/bootstrap.css';
import './ExpertiseCard.css'

const ExpertiseCard = (props) => {
  const categoryImgSrc = props.category.imgSrc;
  const categoryName = props.category.name;
  const skills = props.category.skills;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

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
        <CardBody>
            <Slider {...settings}>
              {skills.map(skill => {
                return(
                  <Col sm={{ size: 'auto', offset: 0}}>
                    <ExpertiseIcon imgSrc={skill.imgSrc} height='40px' width='40px'/>
                  </Col>
                );
              })}
            </Slider>
          <Row>

          </Row>
        </CardBody>
        <div className="card-footer"/>
      </Card>
  );
};

export default ExpertiseCard;