import React from "react";
// import "bulma/css/bulma.min.css";
import "../css/post.scss";
// Temporarily hardcoded Posts
export default function Post() {
  return (
   
    <div className="container">
      <div className="column">
        <div className="card is-horizontal">
          <div className="card-image">
            <figure className="image">
              <img
                src="http://placehold.jp/3d4070/ffffff/150x150.png" //src will change
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="media-content">
                <p className="subtitle is-6 has-text-left is-italic has-text-weight-semibold">
                  BUDDY
                  {/* will change */}
                </p>
                <p className="title is-4 has-text-left">
                  I NEED A STUDY BUDDY. I JUST STARTED JAVASCRIPT.
                  {/* will change */}
                </p>
              </div>

              <div className="content has-text-left mt-2">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com
                {/* will change */}
                <br />
                <time datetime="2022-02-02">12:09 PM - 2 Feb 2022</time>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item has-text-left">
                <a href="#">24 comments</a>
                {/* comments will change */}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
