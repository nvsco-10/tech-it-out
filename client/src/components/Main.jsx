import React from "react";
import "bulma/css/bulma.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div>
        <section class="has-text-centered mt-5">
          <h1 class="title is-center">I want to learn . . .</h1>
          <p>search bar goes here</p>
        </section>

        <section class="has-text-centered mt-5">
          <h1 class="title">JOIN THE COMMUNITY</h1>
          <button class="button is-info"><Link to="/signup">BECOME A MEMBER!</Link></button>
          <br />
          <div class="mt-5">
            <img class="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
            <img class="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
            <img class="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
