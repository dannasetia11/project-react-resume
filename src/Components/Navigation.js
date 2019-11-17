import React, { Component } from "react";
import "./Navigation.css";
import impact from "./img/impactbyte.png";

export default class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo" alt="logo">
          <a href="https://impactbyte.com/" alt="impact">
            <img src={impact} className="impact" alt="impact" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#" alt="about">
              About
            </a>
          </li>
          <li>
            <a href="#" alt="skill">
              Skill
            </a>
          </li>
          <li>
            <a href="#" alt="Portofolio">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#" alt="experience">
              Experience
            </a>
          </li>
          <li>
            <a href="#" alt="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
