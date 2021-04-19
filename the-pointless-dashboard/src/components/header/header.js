import React from "react";
import "./header.css"

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <h5 className="navbar-brand mb-0 h1">
            <span className="emoji mx-3" >&#128021;</span>
            The Pointless Dashboard
          </h5>
        </div>
      </nav>
    </>
  );
}
