import React from 'react'
import { Link } from 'react-scroll';
import '../../styles/nav.css'
import '../../pages/Pagenotfound'
const Header = () => {
  return (
    <div>
        <nav class="navbar">
        <div class="navbar-brand">
          <a class="navbar-logo" href="/#">FinEdge</a>
        </div>
        <div class="navbar-menu">
        <ul className="navbar-menu">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
        <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
      </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header