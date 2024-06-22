import React from 'react';
import Logo from '../../assets/logo.png';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="menu">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="whyus" smooth={true} duration={500}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true} duration={500}>
            Plans
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
