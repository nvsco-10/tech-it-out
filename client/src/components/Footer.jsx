import React from "react";
import "../css/footer.scss";
import "@fontsource/roboto";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Suggest a resource -{" "}
            <a
              href="/"
              className="suggest-link has-text-white"
            >
              suggestions@techitout.com
            </a>
          </p>
          <div className="navbar-menu has-text-centered">
            <a href="/contact" className="navbar-item has-text-white">
              CONTACT
            </a>
            <a href="/about" className="navbar-item has-text-white">
              ABOUT US
            </a>
            <a href="/privacypolicy" className="navbar-item">PRIVACY POLICY</a>
          </div>
          <p>copyright 2022</p>
        </div>
      </footer>
    </div>
  );
}
