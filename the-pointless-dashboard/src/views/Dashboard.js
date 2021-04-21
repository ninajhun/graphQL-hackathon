import React from "react";
import Header from "../components/header/header";
import CoffeeWidget from "../components/widgets/CoffeeWidget";
import RickAndMortyWidget from "../components/widgets/RickAndMortyWidget";
import publicIp from "public-ip";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [ipAddress, setIp] = useState("");

  useEffect(() => {
    async function getIp() {
      let ip = await publicIp.v4();
      if (ip.length === 0) ip = "86.181.200.161";
      setIp(ip);
    }

    getIp();
  }, []);
  return (
    <>
      <Header />
      <div class="container-fluid mt-5 d-flex justify-content-center flex-wrap">
        {/* PLACE WIDGETS HERE */}
        <CoffeeWidget ip={ipAddress} />
        <RickAndMortyWidget />
      </div>
    </>
  );
}
