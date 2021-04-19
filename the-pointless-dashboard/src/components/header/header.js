import React from "react";
import "./header.css"

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 fs-6">
            <span className="emoji mx-3" >&#128021;</span>
            The Pointless Dashboard
          </span>
        </div>
      </nav>
    </>
  );
}
