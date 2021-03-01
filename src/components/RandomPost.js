import React, {Fragment, useState} from 'react';
import PromotedCard from "./PromotedCard";

export function RandomPost({random}) {
    return (
        <Fragment>
            <h2>RANDOM POST</h2>
            <div className="random">
                <PromotedCard article={random} />
            </div>
        </Fragment>
    );
}

export default RandomPost;