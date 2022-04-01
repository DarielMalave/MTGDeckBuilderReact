import React from 'react';
import './styles/Card.css';

function Card({cardData}) {
    return (
        <div>
            <img srcSet={cardData['imageUrl']} />
        </div>
    );
}

export default Card;