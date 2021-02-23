import React, {Component} from 'react';
import axios from 'axios';
import {Spinner, Alert, ListGroup} from 'react-bootstrap';
import Articles from '../components/Articles';
import ArticleCard from '../components/ArticleCard';
import {API} from '../api';

class ApiCall extends Component {
    constructor() {
        super();

        this.state = {
            articles: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API)
            .then(response => this.setState({ articles: response.data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    render() {
        const { articles, isLoading, error } = this.state;

        if (error) {
            return <Alert variant="warning">{error.message}</Alert>;
        }

        if (isLoading) {
            return <Spinner animation="border" size="lg" />;
        }

        return (
            <Articles>
                {articles.map((article) =>
                    <ListGroup.Item key={article.id}>
                        <ArticleCard article={article}/>
                    </ListGroup.Item>
                )}
            </Articles>
        );
    }
}

export default ApiCall;
