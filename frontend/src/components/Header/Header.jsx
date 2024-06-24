import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      {menuOpened===false && mobile===true?(
        <div className='bar' onClick={() => setMenuOpened(true)}><img src={Bars} alt="" /></div>
      ):
      <ul className="menu">
        <li>
          <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="whyus" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true} duration={500} onClick={() => setMenuOpened(false)}>
            Plans
          </Link>
        </li>
      </ul>}
    </div>
  );
};

export default Header;
