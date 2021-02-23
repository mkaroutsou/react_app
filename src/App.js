import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Approach from './calls/get';



const App = () =>
    <Container style={{marginTop: "50px", maxWidth: "1000px"}}>
      <Row>
        <Col xs="12">
          <Approach />
        </Col>
      </Row>
    </Container>

export default App;