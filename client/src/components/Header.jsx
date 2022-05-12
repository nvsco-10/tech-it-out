import React from "react";
import { Link } from "react-router-dom";
import "../css/header.scss";
import logo from "../images/tech-it-out-black.png";
import Auth from "../utils/auth";
import "@fontsource/roboto";
import Signout from "./Signout";

export default function Header() {
  const isLoggedIn = Auth.loggedIn();

  return (
    <div>
      <header>
        <nav className="navbar" role="navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/about">
              <img src={logo} alt="tech it out" />
            </a>
          </div>

          <div className="navbar-start">
            <nav className="navbar-menu">
              <a className="navbar-item resources">
                <Link to="/resources" className="has-text-black has-text-weight-semibold">RESOURCES</Link>
              </a>
              <a className="navbar-item community">
                <Link to="/community" className="has-text-black has-text-weight-semibold">COMMUNITY</Link>
              </a>
              <a className="navbar-item home">
                <Link to="/" className="has-text-black has-text-weight-semibold">HOME</Link>
              </a>
              {isLoggedIn && (
                <a className="navbar-item">
                  <Link to="/profile" className="has-text-black has-text-weight-semibold">PROFILE</Link>
                </a>
              )}
            </nav>
          </div>
          <div className="end">
            <button className="button is-info">
              <Link to="/login" className="has-text-white">LOGIN</Link>
            </button>
          </div>
          <div>
          <Signout/>
        </div>
        </nav>
      </header>
    </div>
  );
}
