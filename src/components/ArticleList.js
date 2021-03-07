import React, {Fragment} from 'react';
import ArticleCard from "./ArticleCard";
import {ListGroup} from 'react-bootstrap';


export function ArticleList({articleList}) {
    if (articleList.length > 0 ) {
        return (
            <Fragment>
                <ListGroup>
                    {articleList.map((article) => (
                        <ListGroup.Item key={article.id} className="article-row"><ArticleCard article={article}/></ListGroup.Item>
                    ))}
                </ListGroup>
            </Fragment>
        );
    }else
        return (<h2>No articles</h2>)
}

export default ArticleList;