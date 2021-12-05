import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />{" "}
      <div className="hero-content">
        <h1>Its all about good food and taste</h1>
        <Header />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          aperiam excepturi? Nostrum consectetur illo minus laborum assumenda
          delectus?
        </p>
      </div>
    </div>
  );
}

export default Hero;
