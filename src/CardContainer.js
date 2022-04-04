import React from 'react';
import './styles/CardContainer.css';
import Card from './Card.js';
import { v4 as uuid } from "uuid";

function CardContainer({ dataSource, deleteCard }) {
    return (
        <div id='card_container'>
            {
                (dataSource.length !== 0) ?
                    dataSource.map((card) => {
                        if (deleteCard === "yes") {
                            return <Card key={uuid()} cardData={card} deleteCard={"yes"} />
                        }
                        else {
                            return <Card key={uuid()} cardData={card} deleteCard={"no"} />
                        }
                    })
                    : <p>No card selected</p>
            }
        </div>
    );
}

export default CardContainer;