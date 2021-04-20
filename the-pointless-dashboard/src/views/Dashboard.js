import React from "react";
import Header from "../components/header/header";
import CoffeeWidget from "../components/widgets/CoffeeWidget";
import RickAndMortyWidget from "../components/widgets/RickAndMortyWidget";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div class="container-fluid mt-5 d-flex justify-content-center flex-wrap">
        {/* PLACE WIDGETS HERE */}
        <CoffeeWidget />
        <RickAndMortyWidget />

      </div>
    </>
  );
}
