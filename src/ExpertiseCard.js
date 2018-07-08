import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import Slider from "react-slick";

import ExpertiseIcon from './ExpertiseIcon';

import 'bootstrap/dist/css/bootstrap.css';
import './ExpertiseCard.css'

const ExpertiseCard = (props) => {
  const categoryImgSrc = props.category.imgSrc;
  const categoryName = props.category.name;
  const skills = props.category.skills;
  const getIcon = props.category.getIcon;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false
  };

  return (
      <Card >
        <div className="card-header">
          <Row>
            <div className="card-image">{getIcon()}</div>
            <h1>{categoryName}</h1>
          </Row>
        </div>
        <CardBody>
            <Slider {...settings}>
              {skills.map(skill => {
                return(
                  <Col key={skill} sm={{ size: 'auto', offset: 0}}>
                    <ExpertiseIcon imgSrc={skill.imgSrc} imgAlt={skill.name} height='40px' width='40px'/>
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