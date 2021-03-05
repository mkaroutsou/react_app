import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import Header from "./Header";
import ArticleList from "./ArticleList";
import PromotedList from "./PromotedList";
import PopularList from "./PopularList";
import RandomPost from "./RandomPost";
import Footer from "./Footer";


function Layout() {
    const BASE_URL = 'https://dev.to/api/';

    const [random, setRandom] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [promotedList, setPromotedList] = useState([]);
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/articles`)
            .then((response) => {
                setArticleList(response.data.slice(3));
                setPromotedList(response.data.slice(0, 3));
                setRandom(response.data[Math.floor(Math.random() * response.data.length)]);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    useEffect(() => {
        axios.get(`${BASE_URL}/articles?top=7`)
            .then((response) => {
                setPopularList(response.data.slice(0, 3));
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <PromotedList promotedList={promotedList}/>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="8">
                        <ArticleList articleList={articleList}/>
                    </Col>
                    <Col md="4">
                        <PopularList popularList={popularList}/>
                        <RandomPost random={random}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Layout;