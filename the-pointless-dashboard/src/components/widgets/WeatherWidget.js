import React from "react";
import "./widgets.css";
import Weather from '../../Weather'

export default function WeatherWidget() {
  return (
    <>
      <div className="card col-6">
        <div class="card-body text-start">
          <h6 class="card-title ">
            Weather
          </h6>
          <div className="card-text">
            <p>
              <Weather />
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
