import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo'/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
