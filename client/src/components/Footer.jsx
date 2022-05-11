import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Suggest a resource - suggestions@learnwebdev.com</p>
          <div className="navbar-menu has-text-centered">
            <a className="navbar-item"><Link to="/contact">Contact</Link></a>
            <a className="navbar-item"><Link to="/about">About Us</Link></a>
            <a className="navbar-item">Privacy Policy</a>
          </div>
          <p>copyright 2022</p>
        </div>
      </footer>
    </div>
  );
}
