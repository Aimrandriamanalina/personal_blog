import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Assuming you have a CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="site-title">Mon Blog Personnel</h1>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;