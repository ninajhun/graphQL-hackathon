import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import "./widgets.css";

function Weather() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (!token) {
      getToken();
    }
  }, []);

  const getToken = async () => {
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
      <div className="card col-lg-4 col-md-4 col-sm-12 m-2">
        <div className="card-body text-start ">
          <h6 className="card-title mt-5">
            Weather
          </h6>
          <div className="card-text d-flex align-items-center justify-content-center flex-column">
            <p>The temperature is {`${Math.floor((token.location.weather.temp * 9 / 5) + 32)}`}F and is {token.location.weather.description} in {token.location.city}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
