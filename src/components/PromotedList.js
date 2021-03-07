import React from 'react';
import PromotedCard from "./PromotedCard";

export function PromotedList({promotedList}) {
    if (promotedList.length > 0) {
        return (
            <div className="promoted-list d-flex mb-3">
                {promotedList.map((article) => (
                        <PromotedCard key={article.id} article={article}/>
                    )
                )}
            </div>
        );
    } else {
        return (<h2>No articles</h2>)
    }
}

export default PromotedList;