import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        navigate('/', { state: { scroll: sectionId } });
    };
    const navigateToRule = () => {
        navigate('/rule');
    };
    const navigateToGame = () => {
        navigate('/gamestart');
    };

    return(
        <header className='header'>
            <section className='flex'>
                <Link to="/" className="logo">Alnitak.</Link>
                <nav className="navbar">
                    <a onClick={() => scrollToSection("home")}>Home</a>
                    <a onClick={() => scrollToSection("about")}>About</a>
                    <a onClick={() => scrollToSection("contact")}>Contact</a>
                    <a onClick={navigateToRule}>Rule</a>
                    <a onClick={navigateToGame}>Game</a>
                </nav>
                <div id="menu-btn" className="fas fa-bars"></div>
            </section>
        </header>
    );
}

export default Header;