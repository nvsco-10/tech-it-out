import React from "react";
import "bulma/css/bulma.min.css";
import "../css/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";

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
          <button className="button is-warning">CREATE A POST</button>
          <div className="">
            <button className="button m-4 is-info">SHOW OFF</button>
            <button className="button m-4 is-danger">HELP ME</button>
            <button className="button m-4 is-warning">MENTORSHIP</button>
            <button className="button m-4 is-success">BUDDY</button>
            <p>FILTER:</p>
          </div>

          {/* TEMPORARILY HARDCODED POSTS  */}
          {/* POST 1 */}
          <Post></Post>

          {/* POST 2 */}
          <Post></Post>

          {/* POST 3 */}
          <Post></Post>
      
          </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
