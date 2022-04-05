import React, { useState, useEffect } from 'react';
import CardContainer from './CardContainer.js';
import questionMark from './images/circle-question-solid.svg';
import './styles/Deck.css';

function Deck() {
    const [creatureCards, setCreatureCards] = useState([]);
    const [instantCards, setInstantCards] = useState([]);
    const [artifactCards, setArtifactCards] = useState([]);
    const [enchantmentCards, setEnchantmentCards] = useState([]);
    const [sorceryCards, setSorceryCards] = useState([]);
    const [planeswalkerCards, setPlaneswalkerCards] = useState([]);
    const [landCards, setLandCards] = useState([]);
    const [deckLength, setDeckLength] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('deck')) {
            let deck = JSON.parse(localStorage.getItem('deck'));
            setDeckLength(deck.length);
            deck.map(card => {
                // https://www.w3schools.com/jsref/jsref_split.asp
                let text = card['type'];
                let true_data_type;

                if (text.includes('—') === true) {
                    const myArray = text.split("—");
                    const newArray = myArray[0].split(" ");
                    const arrayLength = newArray.length - 2;
                    true_data_type = newArray[arrayLength];
                } else {
                    const newArray = text.split(" ");
                    const arrayLength = newArray.length - 1;
                    true_data_type = newArray[arrayLength];
                }

                if (true_data_type.includes("Creature")) {
                    setCreatureCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Instant")) {
                    setInstantCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Artifact")) {
                    setArtifactCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Enchantment")) {
                    setEnchantmentCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Sorcery")) {
                    setSorceryCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Planeswalker")) {
                    setPlaneswalkerCards(previousCards => [...previousCards, card]);
                } else if (true_data_type.includes("Land")) {
                    setLandCards(previousCards => [...previousCards, card]);
                }
            });
        }
    }, []);


    return (
        <>
            <div className="title_con">
                <h1 className="title_text_main">Standard Deck</h1>
            </div>

            <div className="title_con">
                <h2>Standard Rules</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            <ul>
                                <li>Your deck must be at least 60 cards.</li>
                                <br />
                                <li>Up to fifteen cards may be included in your sideboard, if you use one.</li>
                                <br />
                                <li>Include no more than four copies of any individual card in your main deck and sideboard combined
                                    (except basic lands).</li>
                                <br />
                                <li>There's no maximum deck size, as long as you can shuffle your deck in your hands unassisted.
                                </li>
                            </ul>
                            <br />
                            <a href="https://magic.wizards.com/en/formats/standard" target="_blank">https://magic.wizards.com/en/formats/standard</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="title_con">
                <h2>Number of Cards in Deck: {deckLength}</h2>
            </div>

            <div className="title_con">
                <h2>Creature ({creatureCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            In Magic: The Gathering, creature is a permanent card type.
                            <br />
                            <br />
                            Flavorwise, creatures represent Warriors, Minions, Beasts,
                            and Monsters that serve the player, usually by fighting on their behalf.
                            Because almost all creatures can attack each turn to reduce an opponent's
                            life or block the opponent's attackers, creature cards are fundamental
                            to most deck strategies.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Creature" target="_blank">https://mtg.fandom.com/wiki/Creature</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={creatureCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Instant ({instantCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            Instants, like sorceries, represent one-shot or short-term magical spells.
                            They are never put onto the battlefield; instead, they take effect when their
                            mana cost is paid and the spell resolves, and then are immediately put into
                            the player's graveyard.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Instant" target="_blank">https://mtg.fandom.com/wiki/Instant</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={instantCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Artifact ({artifactCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            Artifacts are permanents that represent magical items,
                            animated constructs, pieces of equipment, or other objects
                            and devices. Artifact, the card type, is broader than the normal
                            definition. Natural items can be a Magic “artifact”.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Artifact" target="_blank">https://mtg.fandom.com/wiki/Artifact</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={artifactCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Enchantment ({enchantmentCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            Enchantments represent persistent magical effects,
                            usually remaining in play indefinitely.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Enchantment"
                                target="_blank">https://mtg.fandom.com/wiki/Enchantment</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={enchantmentCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Sorcery ({sorceryCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            Sorceries, like instants, represent one-shot or short-term magical spells.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Sorcery" target="_blank">https://mtg.fandom.com/wiki/Sorcery</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={sorceryCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Planeswalker ({planeswalkerCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            In the storyline of Magic: The Gathering,
                            planeswalkers are among the most powerful beings in the multiverse.
                            Within the game, they represent the thematic identities of the players.
                            Planeswalker is also a card type within the game.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Planeswalker"
                                target="_blank">https://mtg.fandom.com/wiki/Planeswalker</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={planeswalkerCards} deleteCard={"yes"} />

            <div className="title_con">
                <h2>Land ({landCards.length})</h2>
                <div className="dropdown">
                    <img srcSet={questionMark} className="icon" />
                    <div className="dropdown-content">
                        <div className="info_text">
                            Lands represent locations under the player's control,
                            most of which have mana abilities. Because mana is needed to use
                            almost any card or ability, most decks need a high number of mana-producing
                            lands (typically between 33-50% of the total deck) in order to function effectively.
                            The most commonly printed Magic cards are the five basic lands, one for each color,
                            each of which intrinsically produce one mana of a specific color.
                            <br />
                            <br />
                            <a href="https://mtg.fandom.com/wiki/Land" target="_blank">https://mtg.fandom.com/wiki/Land</a>
                        </div>
                    </div>
                </div>
            </div>
            <CardContainer dataSource={landCards} deleteCard={"yes"} />

        </>);
}

export default Deck;