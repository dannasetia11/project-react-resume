import React, { Component } from "react";
import "./Hero.css";
import profile from "./img/foto.jpg";

export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <img src={profile} className="profile" alt="profile" />
        <h2>Donna Setiawan</h2>
        <h4>Bold Belserion</h4>
        <button>Hire Me</button>
        <button>Download CV</button>
      </div>
    );
  }
}
