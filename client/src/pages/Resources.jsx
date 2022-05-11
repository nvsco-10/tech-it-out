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

      <div className="resource-body">
        <h1 class="title has-text-centered">RESOURCES</h1>
        <div class="has-text-centered">
          <p>FILTER:</p>
          <button class="button m-4 is-info">PROJECTS</button>
          <button class="button m-4 is-warning">GAMES</button>
          <button class="button m-4 is-danger">TOOLS</button>
          <button class="button m-4 is-success">ALL</button>
        </div>

        {/* hardcoded article cards */}
        <div class="columns mt-5 is-8 is-variable">
          <div class="container has-text-centered">
            <div class="columns is-mobile is-centered">
              {/* CARD 1 */}
              <div class="column is-4-tablet is-3-desktop">
                <div class="card">
                  <div class="card-image has-text-centered">
                    <figure class="image is-2by1">
                      <img
                        src="http://placehold.jp/ff3860/ffffff/546x273.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-5">README GENERATOR</p>
                        <div>
                          <a class="button is-danger mr-2">TOOLS</a>
                          <a class="button is-warning mr-2">ALL SKILLS</a>
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      <div class="media-content">
                        <p class="is-success">
                          A simple editor allows you to quickly add and
                          customize all the sections you need for your project's
                          readme.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="column is-4-tablet is-3-desktop">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-2by1">
                      <img
                        src="http://placehold.jp/ff3860/ffffff/546x273.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-5">HIPSTER IPSUM</p>
                        <div>
                          <a class="button is-danger mr-2">TOOLS</a>
                          <a class="button is-warning mr-2">ALL SKILLS</a>
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      <div class="media-content">
                        <p class="is-success">
                          Dummy text? More like dummy thicc text, amirite?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="column is-4-tablet is-3-desktop">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-2by1">
                      <img
                        src="http://placehold.jp/ff3860/ffffff/546x273.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-5">FEDERICO DOSSENA</p>
                        <div>
                          <a class="button is-danger mr-2">TOOLS</a>
                          <a class="button is-primary mr-2">BEGINNER</a>
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      <div class="media-content">
                        <p class="is-success">
                          Some really cool looking responsive buttons using only
                          a few lines of CSS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
