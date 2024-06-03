import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Description from './Description';

function HomePage() {
    const location = useLocation();
    const { state } = location;

    useEffect(() => {
        if (state && state.scroll) {
            const element = document.getElementById(state.scroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Home id="home" />
            <About id="about" />
            <Contact id="contact" />
            <Description id="description" />
        </>
    );
}

export default HomePage;