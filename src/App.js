import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Gallery from './Gallery.js';
import Deck from './Deck.js';
import ErrorPage from './ErrorPage.js';
import NavBar from './NavBar.js';
import Footer from './Footer.js';

import './styles/Reset.css';
import './styles/App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/deck" element={<Deck />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;