import React, { Component } from "react";
import "./Main.css";

export default class main extends Component {
  render() {
    return (
      <div className="main">
        <div className="about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            molestias, dolore voluptatibus nulla eveniet animi cumque tempora
            vero est deserunt itaque excepturi ex velit consequatur asperiores
            harum enim voluptate culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            molestias, dolore voluptatibus nulla eveniet animi cumque tempora
            vero est deserunt itaque excepturi ex velit consequatur asperiores
            harum enim voluptate culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            molestias, dolore voluptatibus nulla eveniet animi cumque tempora
            vero est deserunt itaque excepturi ex velit consequatur asperiores
            harum enim voluptate culpa.
          </p>
        </div>
        <div className="information">
          <h2>Basic Information</h2>
          <p>AGE:</p>
          <h4>19</h4>
          <p>EMAIL:</p>
          <h4>dannasetia@gmail.com</h4>
          <p>PHONE:</p>
          <h4>+6285741068174</h4>
          <p>ADDRESS:</p>
          <h4>SUKOHARJO, JAWA TENGAH, INDONESIA</h4>
          <p>LENGUAGE:</p>
          <h4>INDONESIA, JAWA, INGGRIS</h4>
        </div>
      </div>
    );
  }
}
