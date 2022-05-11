import React from "react";
import "bulma/css/bulma.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div>
        <section className="has-text-centered mt-5">
          <h1 className="title is-center">I want to learn . . .</h1>
          <p>search bar goes here</p>
        </section>

        <section className="has-text-centered mt-5">
          <h1 className="title">JOIN THE COMMUNITY</h1>
          <button className="button is-info"><Link to="/signup">BECOME A MEMBER!</Link></button>
          <br />
          <div className="mt-5">
            <img className="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
            <img className="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
            <img className="pr-6 pb-4"src="http://placehold.jp/250x250.png" alt="placeholder" />
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
