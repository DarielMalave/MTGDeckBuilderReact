import React from 'react';

function QueryInfo({ filters, totalNumCards, totalNumPages }) {
    return (
        <div id="display_search_info">
            <h1> Welcome to the Gallery! </h1>
            <h2 id="display_filters">{filters}</h2>
            <h3 id="display_card_info">Total number of cards: {totalNumCards}, total number of pages: {totalNumPages}</h3>
        </div>
    );
}

export default QueryInfo;