import React from "react";
import "bulma/css/bulma.min.css";


// Temporarily hardcoded Posts
export default function Post() {
  return (
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
          I just started Codecademy. Prefer someone in the same timezone - GMT.
          Email me at gus123@gmail.com.
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
  );
}
