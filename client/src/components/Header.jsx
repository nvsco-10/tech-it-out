import React from "react";
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
              <a class="navbar-item">RESOURCES</a>
              <a class="navbar-item">COMMUNITY</a>
            </nav>
            <button class="button is-info">LOGIN</button>
          </div>
        </nav>
      </header>
    </div>
  );
}
