import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import PromotedList from "./components/PromotedList";
import PopularList from "./components/PopularList";
import RandomPost from "./components/RandomPost";
import {ApiProvider} from "./calls/get";

const App = () => {
    const [random, setRandom] = useState([]);
    const [popularList, setPopularList] = useState([]);
    const [promotedList, setPromotedList] = useState([]);
    const [articleList, setArticleList] = useState([]);

    ApiProvider.getPopular().then((result) => {
        setPopularList(result);
    });

    ApiProvider.getRandom().then((result) => {
        setRandom(result);
    });


    ApiProvider.getPromoted().then((result) => {
        setPromotedList(result);
    });


    ApiProvider.getAll().then((result) => {
        setArticleList(result);
    });


    console.log(promotedList);

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

export default App;