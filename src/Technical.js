import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import TechnicalArea from './TechnicalArea';
import 'bootstrap/dist/css/bootstrap.css';

export default class Example extends React.Component {
  render() {

    return (
      <Container id="technical" className="content-block-normal">
        <Row>

          <Col sm={{ size: 4, offset: 0 }}><TechnicalArea/></Col>
          <Col sm={{ size: 4, offset: .1 }}><TechnicalArea/></Col>
          <Col sm={{ size: 4, offset: .1 }}><TechnicalArea/></Col>
        </Row>
        <Row>
        </Row>
        <Row>
          <Col sm={{ size: 4, offset: 0 }}><TechnicalArea/></Col>
          <Col sm={{ size: 4, offset: .1 }}><TechnicalArea/></Col>
          <Col sm={{ size: 4, offset: .1 }}><TechnicalArea/></Col>
        </Row>
      </Container>
    );
  }
}





