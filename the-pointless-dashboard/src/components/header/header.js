import React from "react";
import "./header.css"

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 ">
            <span className="emoji mx-3" >&#128021;</span>
            The Pointless Dashboard</span>
        </div>
      </nav>
    </>
  );
}
