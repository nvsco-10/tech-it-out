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
          <span>CEO</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            perspiciatis, error deleniti quaerat beatae doloribus incidunt
            excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus
            cumque.
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
          <h3>gustavo tijerino</h3>
          <span>Accountant</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            perspiciatis, error deleniti quaerat beatae doloribus incidunt
            excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus
            cumque.
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
          <h3>jalen mcneal</h3>
          <span>Product Manager</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            perspiciatis, error deleniti quaerat beatae doloribus incidunt
            excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus
            cumque.
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
          <h3>emily vazquez</h3>
          <span>product analyst</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            perspiciatis, error deleniti quaerat beatae doloribus incidunt
            excepturi. Fugit deleniti accusantium neque hic quidem voluptatibus
            cumque.
          </p>
        </div>
      </div>
    </div>
  );
}
