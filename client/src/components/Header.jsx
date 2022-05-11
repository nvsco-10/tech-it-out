import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/tech-it-out-black.png'

export default function Header() {
  return (
    <div>
      <header>
        {/* <marquee behavior="" direction="">
        logo image
        <h1>Welcome! Let's Tech It Out!!</h1>
        </marquee> */}

        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/about">
              <img src={logo} alt="tech it out" />
            </a>
          </div>

          <div className="navbar-start">
            <nav className="navbar-menu">
              <a className="navbar-item"><Link to="/resources">Resources</Link></a>
              <a className="navbar-item"><Link to="/community">Community</Link></a>
              <a className="navbar-item"><Link to="/">Home</Link></a>
            </nav>
            <button className="button is-info"><Link to="/login">Login</Link></button>
          </div>
        </nav>
      </header>
    </div>
  );
}
