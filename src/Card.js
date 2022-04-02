import React, { useRef } from 'react';
import './styles/Modal.css';
import './styles/Card.css';

function Card({ cardData }) {
    const modalRef = useRef();

    // If user clicks on image, the modal will pop up
    function loadModal() {
        modalRef.current.className = "modal visible";
    }

    // If user clicks on X button, modal goes away
    function leaveModal() {
        modalRef.current.className = "modal hidden";
    }

    // If user clicks outside the modal box while it's open,
    // modal goes away
    window.onclick = function(event) {
        if (event.target.className === "modal visible") {
            event.target.className = "modal hidden";
        }
    }


    return (
        <div>
            {/* =========== Card image ========== */}
            <img srcSet={cardData['imageUrl']} className="lazy_load" onClick={loadModal} onLoad={(e) => { e.target.className = "fade_in" }} />

            {/* ========== Modal ============= */}
            {/* NOTE: originally wanted a separate Modal component, but had difficulties using useRef and
            forwardRef */}
            <div ref={modalRef} id="card_modal" className="modal hidden">
                <div className="modal-content">
                    <div id="modal_title">
                        <p id="modal_text">{cardData['name']} ({cardData['card_set']})</p>
                        <span id="close" onClick={leaveModal}>&times;</span>
                    </div>
                    <div id="modal_body">
                        <img src={cardData['imageUrl']} />
                        <ul>
                            {(cardData['cmc']) ? <li>CMC: {cardData['cmc']}</li> : ""}
                            {(cardData['rarity']) ? <li>Rarity: {cardData['rarity']}</li> : ""}
                            {(cardData['text']) ? <li>Description: {cardData['text']}</li> : ""}
                            {(cardData['flavor']) ? <li>{cardData['flavor']}</li> : <li>No Flavor Text</li>}
                            <button>Add to Deck</button>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;