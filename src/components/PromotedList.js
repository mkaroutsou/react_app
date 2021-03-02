import React, {Fragment} from 'react';
import PromotedCard from "./PromotedCard";

export function PromotedList({promotedList}) {
    if (promotedList.length > 0 ) {
        return (
            <Fragment>
                <div className="d-flex">
                    {promotedList.map((article) => (
                            <div key={article.id}>
                                <PromotedCard article={article}/>
                            </div>
                        )
                    )}
                </div>
            </Fragment>
        );
    }else{
        return (<h2>No articles</h2>)
    }
}

export default PromotedList;