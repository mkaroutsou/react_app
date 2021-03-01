import React, {Fragment} from 'react';
import ArticleCard from "./ArticleCard";
import {ListGroup} from 'react-bootstrap';


export function ArticleList({articleList}) {
    return (
        <Fragment>
            <ListGroup>
                {articleList.map((article) => (
                    <ListGroup.Item key={article.id}><ArticleCard article={article}/></ListGroup.Item>
                ))}
            </ListGroup>
        </Fragment>
    );
}

export default ArticleList;