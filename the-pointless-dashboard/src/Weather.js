import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

function Weather() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, []);

  const getToken = async () => {
    let myIp = await fetch('http://api.ipify.org/?format=json')
      .then(res => res.json())

    console.log("this is ip", myIp)

    const endpoint =
      "https://BriskSharkHands.stepzen.net/api/ideal-bobcat/__graphql";
    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization:
          "Apikey brisksharkhands::stepzen.net+1000::3775331aa0b4ff9350a93d30658b4a522451b171553bbc07d51690837b1948ac",
      },
    });
    const query = gql`
      {
        location(ip: "104.189.13.3") {
          city
          weather {
            temp
            units
            feelsLike
            description
          }
        }
        weatherReport(latitude: 1.5, longitude: 1.5) {
          description
          feelsLike
          temp
          units
        }
      }
    `;
    const data = await graphQLClient.request(query);
    setToken(data);
  };
  if (!token) return null;
  return (
    <>
      <p>The temperature is {`${Math.floor((token.location.weather.temp * 9 / 5) + 32)}`}F and is {token.location.weather.description} in {token.location.city}</p>
    </>
  );
}

export default Weather;
