import React, { useRef } from 'react';
import './styles/Modal.css';
import './styles/Card.css';

function Card({ cardData, deleteCard }) {
    const modalRef = useRef();

    // If user clicks on image, the modal will pop up
    function loadModal() {
        modalRef.current.className = "modal visible";
    }

    // If user clicks on X button, modal goes away
    function leaveModal() {
        modalRef.current.className = "modal hidden";
    }

    function addCard() {
        if (localStorage.getItem('deck')) {
            let previousDeck = JSON.parse(localStorage.getItem('deck'));
            previousDeck.push({ cardData }['cardData']);
            localStorage.setItem('deck', JSON.stringify(previousDeck));
        }
        else {
            let emptyDeck = [];
            emptyDeck.push({cardData}['cardData'])
            localStorage.setItem('deck', JSON.stringify(emptyDeck));
        }

        alert("Card successfully added!");
    }

    function deleteFromDeck() {
        let previousDeck = JSON.parse(localStorage.getItem('deck'));
        let splice_index;
        previousDeck.map((card, index) => {
            if (card['auto_id'] === {cardData}['cardData']['auto_id']){
                splice_index = index;
                return;
            }
        });
        previousDeck.splice(splice_index, 1);

        localStorage.setItem('deck', JSON.stringify(previousDeck));
        alert("Card successfully removed!");
        window.location.assign(window.location.href);
    }

    // If user clicks outside the modal box while it's open,
    // modal goes away
    window.onclick = function (event) {
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
                            {(cardData['cmc']) ? <li><span>CMC:</span> {cardData['cmc']}</li> : ""}
                            {(cardData['rarity']) ? <li><span>Rarity:</span> {cardData['rarity']}</li> : ""}
                            {(cardData['text']) ? <li><span>Artist:</span> {cardData['artist']}</li> : ""}
                            {(cardData['flavor']) ? <i><li>{cardData['flavor']}</li></i> : <li>No Flavor Text</li>}
                            {(deleteCard === "yes") ? <button className="modal_button_delete" onClick={deleteFromDeck}>Delete from Deck</button> : <button className="modal_button" onClick={addCard}>Add to Deck</button>}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Card;