import React, { useState, useEffect } from "react";
import "./widgets.css";
import { useQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../../queries/getWeather.js";

export default function Weather(props) {
  const { ip } = props;
  const { data, error } = useQuery(GET_WEATHER_QUERY, {
    variables: { ip },
  });
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (data) {
      setToken(data);
    }
  }, [data]);

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <div className="card col-lg-5 col-md-4 col-sm-12 m-1">
        <div className="card-body text-start ">
          <h6 className="card-title  cardTitle">
            So, how about that weather huh?
            <span className="emoji">&#127782;</span>
          </h6>
          <div className="card-text d-flex align-items-center justify-content-center flex-column">
            {!token ? (
              <p>Checking with the weather man ...</p>
            ) : (
              <p className="text-center">
                The temperature is{" "}
                  {`${Math.floor((token.location.weather.temp * 9) / 5 + 32)}`}F°
                and is {token.location.weather.description} in{" "}
                {token.location.city}!
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
