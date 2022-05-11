import React from "react";
// import "bulma/css/bulma.min.css";
import { FaGithub } from "react-icons/fa";

// Temporarily hardcoded Posts
export default function Post() {
  return (
    <div className="container mb-6 has-background-grey-lighter">
      <div className="column profile-pic">
        {/* TEMPORARY PLaceholder Image*/}
        <div className="card is-horizontal">
          <div className="card-image">
            <figure className="image is-rounded">
              <img
                src="http://placehold.jp/3d4070/ffffff/150x150.png"
                alt="placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <div className="media-content">
            <div className="top">
              <p className="subtitle is-5 is-italic has-text-weight-semibold is-pulled-left">
                BUDDY
              </p>
              
              <p className="has-text-right">
                Gus April 22, 2022
              </p>
            </div>
            <div className="title is-4 has-text-left mt-4">
              I NEED A STUDY BUDDY. I JUST STARTED JAVASCRIPT.
            </div>
          </div>

          <div className="column">
            <span className=""> </span>
          </div>
        </div>

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
              <FaGithub></FaGithub>
            </a>
            <a href="#">24 comments</a>
          </div>
        </div>
      </div>
    </div>
  );
}
