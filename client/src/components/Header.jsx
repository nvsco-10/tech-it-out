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

        <nav class="navbar" role="navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img src={logo} alt="tech it out" />
            </a>
          </div>

          <div class="navbar-start">
            <nav class="navbar-menu">
              <a class="navbar-item"><Link to="/resources">Resources</Link></a>
              <a class="navbar-item"><Link to="/community">Community</Link></a>
              <a class="navbar-item"><Link to="/">Home</Link></a>
              <a class="navbar-item"><Link to="/profile">Profile</Link></a>
            </nav>
            <button class="button is-info"><Link to="/login">Login</Link></button>
          </div>
        </nav>
      </header>
    </div>
  );
}
