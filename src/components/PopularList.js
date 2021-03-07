import React, {Fragment, useState} from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import PopularCard from "./PopularCard";

export function PopularList({popularList}) {
    if (popularList.length > 0) {
        return (
            <div className="side-block popular">
                <h2>POPULAR POSTS</h2>
                <ListGroup>
                    {popularList.map((article) => (
                            <div key={article.id}>
                                <PopularCard article={article}/>
                            </div>
                        )
                    )}
                </ListGroup>
            </div>
        );
    }else{
        return (<h2>No articles</h2>)
    }
}

export default PopularList;