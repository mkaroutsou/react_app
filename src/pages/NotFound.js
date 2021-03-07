import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";

const NotFound = () => (
    <React.Fragment>
        <Container>
            <Row>
                <Col md="8" className="mx-auto text-center">
                    <h1 className="my-2">404 - Not Found!</h1>
                    <img src="../404image.jpg" alt="not found" className="mw-100"/>
                    <Link to="/" className="btn btn-primary my-3">Go Home</Link>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default NotFound;