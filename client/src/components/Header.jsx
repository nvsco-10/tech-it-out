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
  const [showMenu, setShowMenu] = useState(false)

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

  const toggleMenu = () => {
    setShowMenu(!showMenu)
// 
  }

  const toggleBurgerClass = () => {
    if(showMenu === false) {
      return 'navbar-burger has-text-white'
    } else {
      return 'navbar-burger is-active has-text-white'
    }
  }

  const toggleMenuClass = () => {
    if(showMenu === false) {
      return 'navbar-menu'
    } else {
      return 'navbar-menu background is-active'
    }
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <a className="navbar-item" href="/about">
          <img src={logo} alt="tech it out" />
        </a>

        <button onClick={toggleMenu} className={toggleBurgerClass(showMenu)} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={toggleMenuClass(showMenu)}>

        <div className="navbar-start">
          <Link className="navbar-item has-text-white has-text-weight-semibold" to="/resources">
            RESOURCES
          </Link>

          <Link className="navbar-item has-text-white has-text-weight-semibold" to="/community">
            COMMUNITY
          </Link>

          <Link className="navbar-item has-text-white has-text-weight-semibold" to="/">
            HOME
          </Link>

          {isLoggedIn && (
          <Link className="navbar-item has-text-white has-text-weight-semibold" to="/profile">
            PROFILE
          </Link>
          )}

        </div>

        <div className="navbar-end">
          {isLoggedIn && (
            <div className="navbar-item">
              <p className="welcome">Welcome back {username}!</p>
            </div>
          )}
          
          <div className="navbar-item">

            <div className="buttons">
              {isLoggedIn ? (
                <Signout />
                ) : (
                <div id="end" className="end">
                  <Link className="button" to="/login">
                    LOGIN
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>

    </div>

  </nav>
  );
}

  // <div>
  //     <header>
  //       <nav className="navbar is-active" role="navigation">
  //         <Link to="/about">
  //           <img className="logo" src={logo} alt="tech it out" />
  //         </Link>

  //         <div className="navbar-menu is-active">
  //           <div className="navbar-start">
  //             <a
  //               href="/resources"
  //               className="navbar-item resources has-text-white has-text-weight-semibold"
  //             >
  //               RESOURCES
  //             </a>
  //             <a
  //               href="/community"
  //               className="navbar-item community has-text-white has-text-weight-semibold"
  //             >
  //               COMMUNITY
  //             </a>
  //             <a
  //               href="/"
  //               className="navbar-item home has-text-white has-text-weight-semibold"
  //             >
  //               HOME
  //             </a>
  //             {isLoggedIn && (
  //               <div>
  //                 <a
  //                   href="/profile"
  //                   className="navbar-item profile has-text-white has-text-weight-semibold"
  //                 >
  //                   PROFILE
  //                 </a>
  //               </div>
  //             )}

  //             {/* Make this look better pls, change the wording */}
  //             {isLoggedIn && (
  //               <p className="welcome">Welcome back {username}!</p>
  //             )}

  //             {isLoggedIn ? (
  //               <Signout />
  //             ) : (
  //               <div id="end" className="end">
  //                 <Link className="button" to="/login">
  //                   LOGIN
  //                 </Link>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </nav>
  //     </header>
  //   </div>
