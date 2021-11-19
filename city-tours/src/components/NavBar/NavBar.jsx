import React from 'react'
import './Navbar.scss'
import Logo from "../../logo.png"

export default function NavBar() {
    return (
      <nav className="navbar">
        <img src={Logo} alt="Logo" />
        <ul className="nav-links">
          <li>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="/">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    );
}
