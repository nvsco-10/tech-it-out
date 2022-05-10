import React from "react";

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
              <img src="../../../public/images/logo-tech-it-black.png" />
            </a>
          </div>

          <div class="navbar-start">
            <nav class="navbar-menu">
              <a class="navbar-item">Resources</a>
              <a class="navbar-item">Community</a>
            </nav>
            <button class="button is-info">Become a Member</button>
          </div>
        </nav>
      </header>
    </div>
  );
}
