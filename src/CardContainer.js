import React from 'react';
import './styles/CardContainer.css';
import Card from './Card.js';
import {v4 as uuid} from "uuid";

function CardContainer({dataSource}) {
    return (
        <div id='card_container'>
            {
            dataSource.map(card => {
                return <Card key={uuid()} cardData={card} />
            })
            }
        </div>
    );
}

export default CardContainer;