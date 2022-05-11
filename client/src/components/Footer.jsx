import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>Suggest a resource - suggestions@learnwebdev.com</p>
          <div class="navbar-menu has-text-centered">
            <a class="navbar-item"><Link to="/contact">Contact</Link></a>
            <a class="navbar-item">About Us</a>
            <a class="navbar-item">Privacy Policy</a>
          </div>
          <p>copyright 2022</p>
        </div>
      </footer>
    </div>
  );
}
