import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './TechnicalArea.css'

const TechnicalArea = (props) => {
  return (
    <div>

      <Card>
        <CardImg width="100%" src="https://d30y9cdsu7xlg0.cloudfront.net/png/143968-200.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TechnicalArea;