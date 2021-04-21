import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import "./widgets.css";

var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=cda08130f429c0d25ad19cb3b2e8646a0e776a4e0fba16cdb87d6321');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
};

request.send();

function Weather() {
  const [token, setToken] = useState("");

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
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
    console.log(data);
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
