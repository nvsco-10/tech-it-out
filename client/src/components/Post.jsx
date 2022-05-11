import React from "react";
// import "bulma/css/bulma.min.css";
import "../css/post.scss";
// Temporarily hardcoded Posts
export default function Post() {
  return (
    // <div className="container mb-6 has-background-grey-lighter">
    //   <div className="column profile-pic">
    //     {/* TEMPORARY PLaceholder Image*/}
    //     <div className="card is-horizontal">
    //       <div className="card-image">
    //         <figure className="image is-rounded">
    //           <img
    //             src="http://placehold.jp/3d4070/ffffff/150x150.png"
    //             alt="placeholder image"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="card-stacked">
    //     <div className="card-content">
    //       <div className="media-content">
    //         <p className="subtitle is-5 is-italic has-text-weight-semibold is-pulled-left">
    //           BUDDY
    //         </p>

    //         <p className="has-text-right">Gus April 22, 2022</p>
    //       </div>
    //       <div className="content is-pulled-left has-background-grey-lighter">
    //         <p className="title is-4 mt-4">
    //           I NEED A STUDY BUDDY. I JUST STARTED JAVASCRIPT.
    //         </p>
    //         <p className="comment-text">
    //           I just started Codecademy. Prefer someone in the same timezone -
    //           GMT. Email me at gus123@gmail.com.
    //         </p>
    //         <a href="#">24 comments</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="column">
        <div className="card is-horizontal">
          <div className="card-image">
            <figure className="image">
              <img
                // className= "is-rounded"
                src="http://placehold.jp/3d4070/ffffff/150x150.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="media-content">
                <p className="subtitle is-6 has-text-left is-italic has-text-weight-semibold">
                  BUDDY
                </p>
                <p className="title is-4 has-text-left">
                  I NEED A STUDY BUDDY. I JUST STARTED JAVASCRIPT.
                </p>
              </div>

              <div className="content has-text-left mt-2">
                I just started Codecademy. Prefer someone in the same timezone -
                GMT. Email me at gus123@gmail.com
                <br />
                <time datetime="2022-02-02">12:09 PM - 2 Feb 2022</time>
              </div>
            </div>
            <footer className="card-footer">
              <div className="card-footer-item has-text-left">
                <a href="#">24 comments</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
