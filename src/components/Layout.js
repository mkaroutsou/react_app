import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import ArticleList from "./ArticleList";
import PromotedList from "./PromotedList";
import PopularList from "./PopularList";
import RandomPost from "./RandomPost";
import axios from 'axios';


function Layout() {
    const [random, setRandom] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [promotedList, setPromotedList] = useState([]);
    const [articleList, setArticleList] = useState([]);


    const BASE_URL = 'https://dev.to/api/';

    useEffect(() => {
        axios.get(`${BASE_URL}/articles`)
            .then((response) => {
                setArticleList(response.data);
                setPopularList(response.data.slice(0, 3));
                setPromotedList(response.data.slice(0, 3));
                setRandom(response.data[Math.floor(Math.random() * response.data.length)]);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col xs="12">
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
                    <Col xs="8">
                        <ArticleList articleList={articleList}/>
                    </Col>
                    <Col xs="4">
                        <PopularList popularList={popularList}/>
                        <RandomPost random={random}/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <p>"Footer"</p>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default Layout;