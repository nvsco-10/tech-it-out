import React from "react";
import "../css/footer.scss";
import "@fontsource/roboto";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Suggest a resource -{" "}
            <a
              href="suggestions@learnwebdev.com"
              className="suggest-link has-text-white"
            >
              suggestions@learnwebdev.com
            </a>
          </p>
          <div className="navbar-menu has-text-centered">
            <a className="navbar-item">
              <Link className="has-text-white" to="/contact">
                CONTACT
              </Link>
            </a>
            <a className="navbar-item">
              <Link className="has-text-white" to="/about">
                ABOUT US
              </Link>
            </a>
            <a className="navbar-item">PRIVACY POLICY</a>
          </div>
          <p>copyright 2022</p>
        </div>
      </footer>
    </div>
  );
}
