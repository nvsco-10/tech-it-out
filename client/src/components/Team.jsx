import React from "react";
import "@fontsource/roboto";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../css/team.scss";

export default function Team() {
  return (
    <div className="wrapper">
      <h1>Our Team</h1>
      <div className="our_team">
        <div className="team_member">
          <div className="member_img">
            <img src="https://avatars.githubusercontent.com/u/97539424?v=4" alt="our-team-neema" />
            <div className="social_media">
              <div className="icon facebook item">
                <FaFacebookF/>
              </div>
              <div className="icon twitter item">
                <FaTwitter/>
              </div>
              <div className="icon github item">
                <FaGithub/>
              </div>
            </div>
          </div>
          <h3>Neema Velasco</h3>
          <span>Gary's Assistant</span>
          <p>
            "I wish I was as smart as Gus"
          </p>
        </div>
        <div className="team_member">
          <div className="member_img">
            <img src="https://avatars.githubusercontent.com/u/96932178?v=4" alt="our-team-gus" />
            <div className="social_media">
              <div className="icon facebook item">
                <FaFacebookF/>
              </div>
              <div className="icon twitter item">
                <FaTwitter/>
              </div>
              <div className="icon github item">
                <FaGithub/>
              </div>
            </div>
          </div>
          <h3>Gustavo Tijerino</h3>
          <span>Senior Janitor</span>
          <p>
            "I like turtles.. And Emily's bio is a lie."
          </p>
        </div>
        <div className="team_member">
          <div className="member_img">
            <img src="https://avatars.githubusercontent.com/u/98197541?v=4" alt="our-team-jalen" />
            <div className="social_media">
              <div className="icon facebook item">
                <FaFacebookF/>
              </div>
              <div className="icon twitter item">
                <FaTwitter/>
              </div>
              <div className="icon github item">
                <FaGithub/>
              </div>
            </div>
          </div>
          <h3>Jalen McNeal</h3>
          <span>Magic Man</span>
          <p>
            "I like cereal with water."
          </p>
        </div>
        <div className="team_member">
          <div className="member_img">
            <img src="https://avatars.githubusercontent.com/u/98716344?v=4" alt="our-team-emily" />
            <div className="social_media">
              <div className="icon facebook item">
                <FaFacebookF/>
              </div>
              <div className="icon twitter item">
                <FaTwitter/>
              </div>
              <div className="icon github item">
                <FaGithub/>
              </div>
            </div>
          </div>
          <h3>Emily Vazquez</h3>
          <span>Mean to Gus Lady</span>
          <p>
            "Deeply interested in the integration of Arts and Technology and art in coding. Although I may be young I look forward to paving my own way in the world and continuing to learn and grow. My passion for art and fascination with web development and coding keep me driven and striving for more knowledge."
          </p>
        </div>
      </div>
    </div>
  );
}
