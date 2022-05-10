import React from "react";
import "bulma/css/bulma.min.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div>
        <section class="has-text-centered mt-5">
          <h1 class="title is-center">I want to learn 🙂. . .</h1>
          <p>search bar goes here</p>
        </section>

        <section class="has-text-centered mt-5">
          <h1 class="title">Join the Community</h1>
          <button class="button is-info">Become a Member</button>
          <br />
          <div class="mt-5">
            <img src="#" alt="placeholder" />
            <img src="#" alt="placeholder" />
            <img src="#" alt="placeholder" />
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
