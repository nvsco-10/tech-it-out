import React, { useState, useEffect } from "react";
import "../css/header.scss";
import logo from "../images/tech-it-out-black-big.png";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import Signout from "./Signout";

export default function Header() {

  const [username, setUsername] = useState("");
  const isLoggedIn = Auth.loggedIn();

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (!isLoggedIn) {
          return false;
        }

        const response = await Auth.getProfile();

        if (!response) {
          throw new Error("something went wrong!");
        }

        setUsername(response.data.username);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <header>
        <nav className="navbar" role="navigation">
          {/* <div className="navbar-brand"> */}
          {/* <a className="navbar-item" href="/about"> */}
          <Link to="/about">
            <img className="logo" src={logo} alt="tech it out" />
          </Link>
          {/* </a> */}
          {/* </div> */}

          <div className="navbar-start">
            <nav className="navbar-menu">
              <a
                href="/resources"
                className="navbar-item resources has-text-white has-text-weight-semibold"
              >
                RESOURCES
              </a>
              <a
                href="/community"
                className="navbar-item community has-text-white has-text-weight-semibold"
              >
                COMMUNITY
              </a>
              <a
                href="/"
                className="navbar-item home has-text-white has-text-weight-semibold"
              >
                HOME
              </a>
              {isLoggedIn && (
                <div>
                  <a
                    href="/profile"
                    className="navbar-item profile has-text-white has-text-weight-semibold"
                  >
                    PROFILE
                  </a>
                </div>
              )}

              {/* Make this look better pls, change the wording */}
              {isLoggedIn && (
                <p className="welcome">Welcome back {username}!</p>
              )}

              {isLoggedIn ? (
                <Signout />
              ) : (
                <div id="end" className="end">
                  <Link className="button"
                  to="/login">LOGIN</Link>
                </div>
              )}
            </nav>
          </div>
        </nav>
      </header>
    </div>
  );
}
