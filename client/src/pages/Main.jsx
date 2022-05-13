import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import "../css/home.scss";
import logo1 from "../images/tech-it-out-fullwhite.png"
import Header from "../components/Header";
import Team from "../components/Team"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import image1 from "../images/people-transparent.png";
import image2 from "../images/Boy-asking-question.png";
import { SpinnerDotted } from 'spinners-react';

export default function Main() {

  const isLoggedIn = Auth.loggedIn();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1350)
  }, [])
  return (

      <>
          {loading === false ?
          (<div className="Main">
            <div>
              <Header></Header>
            </div>

            <div>
              <section className="main-search has-text-centered">
                <img className="logo" src={logo1} alt="tech it out logo"></img>
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
                      className="has-text-white has-text-weight-semibold"
                      to="/signup"
                    >
                      BECOME A MEMBER
                    </Link>
                  )}
                </button>
              </section>

              <section className="main-half has-text-centered">
                <h1 className="title has-text-white">JOIN THE COMMUNITY</h1>
                <br />
                <div className="hold">
                  <a href="/about" className="about-us has-text-weight-semibold has-text-white">
                    LEARN MORE ABOUT US!
                  </a>
                </div>
                <div className="mt-5 columns is-inline-block">
                  <div className="item">
                    <img className="pr-6 pb-4" src={image1} alt="avatar images" />
                    <span className="caption ">
                      Meet and interact with other developers. Start building your network early on.
                    </span>
                  </div>

                  <div className="item">
                    <img
                      className="pr-6 pb-4"
                      src={image2}
                      alt="boy asking question"
                    />
                    <span className="caption ">
                      Stuck? Feeling Lost? Unmotivated? Reach out to the community and be part of a great support system.
                    </span>
                  </div>

                  <div className="item">
                    <img className="pr-6 pb-4" src={image1} alt="placeholder" />
                    <span className="caption ">
                      Find mentors or programming buddies. Learning how to code isn't easy and it doesn't have to be a lonesome journey.
                    </span>
                  </div>
                </div>
              </section>
            </div>

            <div className="Team">
              <Team></Team>
            </div>

            <div>
              <Footer></Footer>
            </div>
          </div>) : (
            <div className="spinner">

                <SpinnerDotted
               size="5%"
                color='aqua'
                />
            </div>
            )}
        </>
  );
}
