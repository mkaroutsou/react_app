import React, {Fragment, useState} from 'react';
import PromotedCard from "./PromotedCard";

export function RandomPost({random}) {
    if (random ) {
        return (
            <Fragment>
                <h2>RANDOM POST</h2>
                <div className="random">
                    <PromotedCard key={random.id} article={random}/>
                </div>
            </Fragment>
        );
    }else{
        return ('');
    }
}

export default RandomPost;