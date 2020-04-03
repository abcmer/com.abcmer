import React from "react";
import { Container, Row, Col } from "reactstrap";

const Books = () => {
  return (
    <Container id="book-log" className="book-log fade-in">
      <Row>
        <Col sm="12" md={{ size: 10, offset: 4 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
    </Container >
  )
}

export default Books