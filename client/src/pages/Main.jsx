import React from "react";
import { useState, useEffect } from "react";
import "../css/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import image1 from "../images/people-transparent.png";
import image2 from "../images/Boy-asking-question.png";

export default function Main() {
  // const search = <FontAwesomeIcon icon={faSearch} />;

  const [searchInput, setSearchInput] = useState("");
  const [postList] = useState([]);
  const [setFilteredPosts] = useState([]);

  const handleInputChange = async (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);

    searchInput.length === 0 && setFilteredPosts(...postList);

    const filtered = postList.filter((post) => {
      return post.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilteredPosts(filtered);
  };

  return (
    <div className="Main">
      <div>
        <Header></Header>
      </div>

      <div>
        <section className="main-search has-text-centered mt-5">
          <h1 className="title is-center has-text-white has-text-weight-bold">
            I WANT TO LEARN . . .
          </h1>
          {/* SEARCH BAR */}
          <p className="control has-icons-right">
            <input
              className="searchbar input has-text-centered"
              type="text"
              value={searchInput}
              placeholder="search"
              onChange={handleInputChange}
            />{" "}
            <span className="icon is-small is-right">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </p>
        </section>

        <section className="main-half has-text-centered">
          <h1 className="title">JOIN THE COMMUNITY</h1>
          <button className="button">
            <Link
              className="has-text-white has-text-weight-semibold"
              to="/signup"
            >
              BECOME A MEMBER!
            </Link>
          </button>
          <br />
          <div className="mt-5 columns is-inline-block">
            <img className="pr-6 pb-4" src={image1} alt="avatar images" />
            {/* <p>Meet other developers blah blah blah blah blah blah</p> */}
            <img className="pr-6 pb-4" src={image2} alt="boy asking question" />
            {/* <p>Get help when you're stuck blah blah blah blah</p> */}
            <img className="pr-6 pb-4" src={image1} alt="placeholder" />
            {/* <p>Meet other developers blah blah blah blah blah blah</p> */}
          </div>
        </section>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
