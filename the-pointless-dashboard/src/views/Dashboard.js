import React from "react";
import Header from "../components/header/header";
import CoffeeWidget from "../components/widgets/CoffeeWidget";
import WeatherWidget from "../components/widgets/WeatherWidget";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div class="container mt-5">
        {/* PLACE WIDGETS HERE */}
        <CoffeeWidget />
        <WeatherWidget/>
      </div>
    </>
  );
}
