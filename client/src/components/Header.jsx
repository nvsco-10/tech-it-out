import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.scss";
import logo from "../images/tech-it-out-black.png";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/about">
              <img src={logo} alt="tech it out" />
            </a>
          </div>

          <div className="navbar-start has-text-centered">
            <nav className="navbar-menu">
              <a className="navbar-item">
                <Link to="/resources">Resources</Link>
              </a>
              <a className="navbar-item">
                <Link to="/community">Community</Link>
              </a>
              <a className="navbar-item">
                <Link to="/">Home</Link>
              </a>
              <a className="navbar-item">
                <Link to="/profile">Profile</Link>
              </a>
            </nav>
            <button className="button is-info">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
