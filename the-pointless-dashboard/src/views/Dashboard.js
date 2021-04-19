import React from "react";
import Header from "../components/header/header";
import CoffeeWidget from "../components/widgets/CoffeeWidget";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div class="container mt-5">
        {/* PLACE WIDGETS HERE */}
        <CoffeeWidget />
      </div>
    </>
  );
}
