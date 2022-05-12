import React from "react";
import Auth from "../utils/auth";
import "../css/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import image1 from "../images/people-transparent.png";
import image2 from "../images/Boy-asking-question.png";

export default function Main() {
  // const search = <FontAwesomeIcon icon={faSearch} />;

  const isLoggedIn = Auth.loggedIn();

  // if(isLoggedIn) {
  //   console.log('yes')
  // } else {
  //   console.log('no')
  // }

  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div>
        <section className="main-search has-text-centered">
          <h1 className="title is-center has-text-white has-text-weight-bold">
            I WANT TO LEARN . . .
          </h1>
          <button className="button">
            {isLoggedIn ? (
              <Link
                className="community has-text-weight-semibold"
                to="/community"
              >
                GO TO COMMUNITY
              </Link>
            ) : (
              <Link
                className="has-text-black has-text-weight-semibold"
                to="/signup"
              >
                BECOME A MEMBER
              </Link>
            )}
          </button>
        </section>

        <section className="main-half has-text-centered">
          <h1 className="title">JOIN THE COMMUNITY</h1>
          <br />
          <div className="hold">
            <a href="/about" className="about-us has-text-weight-semibold">
              LEARN MORE ABOUT US!
            </a>
          </div>
          <div className="mt-5 columns is-inline-block">
            <img className="pr-6 pb-4" src={image1} alt="avatar images" />
            {/* <p>Meet other developers blah blah blah blah blah blah</p> */}
            <img className="pr-6 pb-4" src={image2} alt="boy asking question" />
            {/* <p>Get help when you're stuck blah blah blah blah</p> */}
            <img className="pr-6 pb-4" src={image1} alt="placeholder" />
            {/* <p>Meet other developers blah blah blah blah blah blah</p> */}
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
