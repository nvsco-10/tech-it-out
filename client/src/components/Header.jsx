import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.scss";
import logo from "../images/tech-it-out-black.png";
import Auth from "../utils/auth";
import "@fontsource/roboto";
import Signout from "./Signout";

export default function Header() {
  const [ username, setUsername ] = useState('')
  const isLoggedIn = Auth.loggedIn();

  useEffect(() => {
    const getUserData = async () => {
      try {

        if (!isLoggedIn) {
          return false;
        }

        const response = await Auth.getProfile();

        if (!response) {
          throw new Error('something went wrong!');
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
          <div className="navbar-brand">
            <a className="navbar-item" href="/about">
              <img src={logo} alt="tech it out" />
            </a>
          </div>

          <div className="navbar-start">
            <nav className="navbar-menu">
              <a href="/resources" className="navbar-item resources">
                <Link to="/resources" className="has-text-black has-text-weight-semibold">RESOURCES</Link>
              </a>
              <a href="/community" className="navbar-item community">
                <Link to="/community" className="has-text-black has-text-weight-semibold">COMMUNITY</Link>
              </a>
              <a href="/" className="navbar-item home">
                <Link to="/" className="has-text-black has-text-weight-semibold">HOME</Link>
              </a>
              {isLoggedIn && (
                <a href="/profile" className="navbar-item">
                  <Link to="/profile" className="has-text-black has-text-weight-semibold">PROFILE</Link>
                </a>
              )}

              {/* Make this look better pls, change the wording */}
              {isLoggedIn && <p>Logged in as {username}</p>}

              {isLoggedIn ? 
                 ( < Signout />) :  
                  (<div className="end">
                  <button className="button is-info">
                    <Link to="/login" className="has-text-white">LOGIN</Link>
                  </button>
                </div>)
              }
              
            </nav>
          </div>
         
        </nav>
      </header>
    </div>
  );
}
