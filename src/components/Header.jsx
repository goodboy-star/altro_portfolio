/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { CSSTransition } from "react-transition-group";
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import logo from '../assets/nav_logo.png'

export default function NavbarContent() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <div className="logo-section">
                <a href="/" className='back-home'>
                    <img src={logo} width={43} style={{ paddingBottom: '5px' }} alt='back_img'></img>
                </a>
            </div>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav" id='top_menu'>
                    <Link to="/">Home</Link>
                    <Link to="https://discordapp.com/users/917769332157718599">Contact</Link>
                    <Link to="/About">About</Link>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <MenuOutlined style={{ color: 'white' }} />
            </button>
        </header>
    );
}
