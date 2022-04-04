import React from 'react';

function NavBar() {
    return (
        <div className="container">
            <nav id="navbar">
                <div><a href="/"><button className="logo">MTG Deck Builder</button></a></div>
                <div>
                    <a href="/gallery"><button className="nav_button gallery">View Gallery</button></a>
                    <a href="/deck"><button className="nav_button demo">Demo (Build Deck)</button></a>
                </div>
            </nav>
        </div >
    );
}

export default NavBar;