import React from "react";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <>
      <div className="container-fluid p-5">
        <h3 className="mt-5">Welcome to The Pointless Dashboard!</h3>
        <h1 className="emoji-large mb-4">&#128640; &#128021; &#128640; </h1>
        <h6>The last dashboard you'll NEVER need...</h6>
        <h6 className="mb-5">(unless you're feeling bored)</h6>
      </div>

      <div className="container-fluid p-5" style={{ color: "red" }}>
        <h2 className="click-app">
          <span>
            <img src="/img/arrow.png" className="icon"></img>
          </span>{" "}
          Click here to check it out!
        </h2>
      </div>

      <div className="container-fluid p-5">
        <div className="col-lg-4">
          <h6>Nina</h6>
        </div>
      </div>
    </>
  );
}
