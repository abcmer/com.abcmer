import React from "react";
import { Container, Row, Col } from 'reactstrap';

import './Footer.css';

const ReactLogo = 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png';

export default class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <Container>
                    <Row className="built-with">
                        <Col className="col-5"></Col>
                        <Col className="col-4">
                            <Row>
                                <div className="built-with text">Developed Using</div>
                                <div className="built-with icon"><img src={ReactLogo} alt="react_logo"></img></div>
                            </Row>
                        </Col>
                        <Col className="col-3"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}