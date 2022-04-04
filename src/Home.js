import React from 'react';
import './styles/Home.css';
import kamigawa from './images/kamigawa.jpg';

function Home() {
    return (
        <>
            <section id="welcome">
                <div><img srcSet={kamigawa} alt="Main picture here." className="welcome_image" /></div>
                <div>
                    <h1 className="welcome_text">Welcome to MTG Deck Builder!</h1>
                    <p className="welcome_subtext">A fan-made web application that provides users an interface
                        to search and filter through all 1800+ standard cards from Magic's six recent sets.</p>
                </div>
            </section>

            <section id="about">
                <div>
                    <h2 className="about_header">About This Project</h2>
                    <p className="about_text">Visit the Gallery to search and filter through all 1800+ standard cards! Play with several filters
                        to filter cards by their card set, Converted Mana Cost, color identity, card type, and more.
                        Navigate dozens upon dozens of pages to view what Magic has to offer in its six previous card sets.
                        When you find a card that looks interesting, add the card to your deck. View all of your cards in your local deck
                        and delete any cards of your choosing from your deck.
                    </p>
                    <p className="about_text">Based on the Magic: The Gathering trading card game, this full-stack
                        web application uses HTML, CSS, and React.js on the client side as well as PHP and MySQL
                        on the server side to create a user interface for users to search for cards and build a
                        deck locally. This web application also contains several features such as pagination,
                        AJAX calls, and JavaScript localStorage to maintain your deck. All cards were obtained
                        originally from
                        <a href="https://andrewbackes.com/project/magic/" target="_blank"> https://andrewbackes.com/project/magic/ </a>
                        and then stored into a custom MySQL database to practice queries (and to also prevent
                        repeated API calls to the same endpoint).</p>
                    <p className="about_text">This web application was first built using HTML, CSS, vanilla JavaScript (+JQuery), PHP,
                        and MySQL, but I rebuilt the entire application using React.js to practice my front-end skills.
                        Although it took a lot of work, I'm glad I made the transition because I learned a lot about
                        web development and I learned that React is a powerful library that makes front-end development
                        intuitive.
                    </p>
                    <p className="about_text">MTG Deck Builder covers the following six previous card sets from Magic:
                        Crimson Vow, Midnight Hunt, Adventures in the Forgotten Realms,
                        Strixhaven: School of Mages, Kaldheim, Zendikar Rising. Kamigawa: Neon Dynasty
                        and later don't count (because I started this project before Kamigawa came out).
                    </p>
                    <p className="about_text">Source code of MTG Deck Builder:&nbsp;
                    <a href="https://github.com/DarielMalave/MTGDeckBuilderReact" target="_blank">https://github.com/DarielMalave/MTGDeckBuilderReact</a></p>
                </div>
            </section>
        </>
    );
}

export default Home;