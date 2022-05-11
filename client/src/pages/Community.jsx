import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "../css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div className="container">
        <div className="section">
          <h1 className="title has-text-centered">EXPLORE THE COMMUNITY</h1>
          <p className="has-text-centered">search bar here</p>
        </div>

        <div className="section2 has-text-centered">
          <Link to={'/community/newpost'}>
            <button className="button is-warning">CREATE A POST</button>
          </Link>
          <div className="">
            <button className="button m-4 is-info">SHOW OFF</button>
            <button className="button m-4 is-danger">HELP ME</button>
            <button className="button m-4 is-warning">MENTORSHIP</button>
            <button className="button m-4 is-success">BUDDY</button>
            <p>FILTER:</p>
          </div>

          {/* TEMPORARILY HARDCODED POSTS  */}
          {/* POST 1 */}
          <div className="card mb-6">
            <header className="card-header card-header-title has-background-grey-lighter">
              <div className="column">
                <p className=" has-text-primary-light">
                  <a
                    href="/post/1" // would actually be /post/id
                    className="has-text-black is-capitalized is-pulled-left"
                  >
                    I need a study buddy. I just started javascript.
                  </a>
                </p>
              </div>

              <div className="column">
                <span className=""> </span>
              </div>
            </header>

            <div className="card-content">
              <div className="content has-text-justified">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com.
              </div>
              <div className="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i className="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
          </div>

          {/* POST 2 */}
          <div className="card mb-6">
            <header className="card-header card-header-title has-background-grey-lighter">
              <div className="column">
                <p className=" has-text-primary-light">
                  <a
                    href="/post/2" // would actually be /post/id
                    className="has-text-black is-capitalized is-pulled-left"
                  >
                    Check out my portfolio!
                  </a>
                </p>
              </div>

              <div className="column">
                <span className=""> </span>
              </div>
            </header>

            <div className="card-content">
              <div className="content has-text-justified">
                www.myportfolioisawesome.com
              </div>
              <div className="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i className="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
          </div>

          {/* POST 3 */}
          <div className="card mb-6">
            <header className="card-header card-header-title has-background-grey-lighter">
              <div className="column">
                <p className=" has-text-primary-light">
                  <a
                    href="/post/2" // would actually be /post/id
                    className="has-text-black is-capitalized is-pulled-left"
                  >
                    I'm willing to teach a beginner for free
                  </a>
                </p>
              </div>

              <div className="column">
                <span className=""> </span>
              </div>
            </header>

            <div className="card-content">
              <div className="content has-text-justified">
                Must be motivated and have initiative. Don't care where you
                live.
              </div>
              <div className="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i className="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
