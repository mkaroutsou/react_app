import React, {Fragment} from 'react';
import PromotedCard from "./PromotedCard";

export function PromotedList({promotedList}) {
    return (
        <Fragment>
            <div className="d-flex">
                {promotedList.map((article) => (
                    <div key={article.id}><PromotedCard article={article} /></div>
                ))}
            </div>
        </Fragment>
    );
}

export default PromotedList;