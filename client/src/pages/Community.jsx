import React from "react";
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
        <div class="section">
          <h1 className="title has-text-centered">EXPLORE THE COMMUNITY</h1>
          <p class="has-text-centered">search bar here</p>
        </div>

        <div className="section2 has-text-centered">
          <button className="button is-warning">CREATE A POST</button>
          <div class="">
            <button class="button m-4 is-info">SHOW OFF</button>
            <button class="button m-4 is-danger">HELP ME</button>
            <button class="button m-4 is-warning">MENTORSHIP</button>
            <button class="button m-4 is-success">BUDDY</button>
            <p>FILTER:</p>
          </div>

          {/* TEMPORARILY HARDCODED POSTS  */}
          {/* POST 1 */}
          <div class="card mb-6">
            <header class="card-header card-header-title has-background-grey-lighter">
              <div class="column">
                <p class=" has-text-primary-light">
                  <a
                    href="/post/1" // would actually be /post/id
                    class="has-text-black is-capitalized is-pulled-left"
                  >
                    I need a study buddy. I just started javascript.
                  </a>
                </p>
              </div>

              <div class="column">
                <span class=""> </span>
              </div>
            </header>

            <div class="card-content">
              <div class="content has-text-justified">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com.
              </div>
              <div class="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i class="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
          </div>

          {/* POST 2 */}
          <div class="card mb-6">
            <header class="card-header card-header-title has-background-grey-lighter">
              <div class="column">
                <p class=" has-text-primary-light">
                  <a
                    href="/post/2" // would actually be /post/id
                    class="has-text-black is-capitalized is-pulled-left"
                  >
                    Check out my portfolio!
                  </a>
                </p>
              </div>

              <div class="column">
                <span class=""> </span>
              </div>
            </header>

            <div class="card-content">
              <div class="content has-text-justified">
                www.myportfolioisawesome.com
              </div>
              <div class="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i class="fab fa-github"></i>
                </a>
                April 22, 2022
                <a href="#">24 comments</a>
              </div>
            </div>
          </div>

          {/* POST 3 */}
          <div class="card mb-6">
            <header class="card-header card-header-title has-background-grey-lighter">
              <div class="column">
                <p class=" has-text-primary-light">
                  <a
                    href="/post/2" // would actually be /post/id
                    class="has-text-black is-capitalized is-pulled-left"
                  >
                    I'm willing to teach a beginner for free
                  </a>
                </p>
              </div>

              <div class="column">
                <span class=""> </span>
              </div>
            </header>

            <div class="card-content">
              <div class="content has-text-justified">
                Must be motivated and have initiative. Don't care where you
                live.
              </div>
              <div class="is-pulled-right">
                <b>user.username</b>
                <a href="https://twitter.com/{{user.twitter}}">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/{{user.github}}">
                  <i class="fab fa-github"></i>
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
