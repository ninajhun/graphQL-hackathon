// import HelloWorld from './HelloWorld';
import "./App.css";
import Dashboard from "./views/dashboard/Dashboard";
import LandingPage from "./views/landing-page/LandingPage";
import React, { useState } from "react";

function App() {
  const [view, setView] = useState("landingPage")

  if (view === "landingPage") {
    return (
    <div className="App">
      <LandingPage setView={setView} />
    </div>
    );
  }

  if (view ==="dashBoard") {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
