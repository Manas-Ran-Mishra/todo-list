import React, { useState } from 'react';
import '../Styles/Navbar.css';
import Logo from '../Icons/TodoIcon.png';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [lightTheme, setLightTheme] = useState(true);

  function toggleTheme() {
    if (
      getComputedStyle(document.documentElement).getPropertyValue(
        '--bg-color'
      ) === 'white' &&
      getComputedStyle(document.documentElement).getPropertyValue(
        '--text-color'
      ) === 'black' &&
      lightTheme === true
    ) {
      setLightTheme(false);
      document.documentElement.style.setProperty(
        '--bg-color',
        'hsl(178,5%,15%)'
      );
      document.documentElement.style.setProperty('--text-color', 'white');
      document.documentElement.style.setProperty(
        '--textarea-bg-color',
        'hsl(180 5% 10%)'
      );
    } else {
      setLightTheme(true);
      document.documentElement.style.setProperty('--bg-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty(
        '--textarea-bg-color',
        'hsl(180 5% 90%)'
      );
    }
  }
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <img
            src={Logo}
            alt="Todo Logo"
            style={{
              backgroundColor: 'var(--accent-color)',
              borderRadius: '15%',
              height: '45px',
              width: '45px',
            }}
          />
        </Link>
        <li id="home-page-li">
          <Link to="/">Home</Link>
        </li>
        <li id="contact-page-li">
          <Link to="/contact">Contact</Link>
        </li>
        <li id="about-page-li">
          <Link to="/about">About</Link>
        </li>
        <li>
          <button
            id="darkmode-btn"
            onClick={toggleTheme}
            style={
              !lightTheme
                ? { backgroundColor: '#181b1b' }
                : { backgroundColor: '#e4e7e7' }
            }
          >
            {!lightTheme ? SunIcon : MoonIcon}
          </button>
        </li>
      </ul>
    </div>
  );
}
