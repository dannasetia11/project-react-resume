import React, { Component } from "react";
import "./Hero.css";
import Navigation from "./Navigation";
import profile from "./img/foto.jpg";
import facebook from "./img/icons/facebook.png";
import twiter from "./img/icons/twiter.png";
import instagram from "./img/icons/instagram.png";
import google from "./img/icons/google.png";

export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <Navigation />
        <img src={profile} className="profile" alt="profile" />
        <h2>
          <a href="https://github.com/dannasetia11/" alt="github">
            DONNA SETIAWAN
          </a>
        </h2>
        <h4>
          <a
            href="https://github.com/orgs/impactbyte-belserion/dashboard"
            alt="github"
          >
            BOLD BALSERION
          </a>
        </h4>
        <button className="button1">Hire Me</button>
        <button className="button2">Download CV</button>
        <br />
        <a href="https://web.facebook.com/?_rdc=1&_rdr" alt="facebook">
          <img src={facebook} className="icons" alt="facebook" />
        </a>
        <a href="https://twitter.com/login" alt="twiter">
          <img src={twiter} className="icons" alt="twiter" />
        </a>
        <a href="https://www.instagram.com/accounts/login/" alt="instagram">
          <img src={instagram} className="icons" alt="instagram" />
        </a>
        <a
          href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
          alt="google"
        >
          <img src={google} className="icons" alt="google" />
        </a>
      </div>
    );
  }
}
