import React from 'react';
import '../Styles/Navbar.css';
import Logo from '../Icons/export1.png';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const {toggleTheme,lightTheme}=props
  return (
    <div className="navbar">
      <ul>
          <Link to='/'>
          <img src={Logo} alt="Todo Logo" width={45} />

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
          <button id="darkmode-btn" onClick={toggleTheme}>
            {!lightTheme ? SunIcon : MoonIcon}
          </button>
        </li>
      </ul>
    </div>
  );
}
