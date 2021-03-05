import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";


const App = () => {
    const HeaderWithRouter = withRouter(Header);
    return (
        <React.Fragment>
        <Router>
            <Container>
                <Row>
                    <Col>
                        <HeaderWithRouter/>
                    </Col>
                </Row>
            </Container>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/post/:id">
                    <ArticlePage />
                </Route>
                <Route path="/category/:tag">
                    <CategoryPage />
                </Route>
            </Switch>

        </Router>
        <Container fluid>
            <Row>
                <Footer />
            </Row>
        </Container>
        </React.Fragment>

    );
};

export default App;