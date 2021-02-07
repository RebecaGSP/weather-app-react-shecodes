import React from "react";
import "./SelectedCity.css";

export default function SelectedCity() {
  return (
    <div className="weatherInfo row">
      <div className="selectedCity">
        <h1 id="current-city">Mexico</h1>
        <h4>
          Last updated: <span id="current-date"></span>
        </h4>
        <h5 id="current-description">Cold</h5>
        <div className="clearfix actual-temperature">
          <img src="" alt="" id="icon" className="float-left" />
          <div className="float-left">
            <h2 id="actual-temperature" className=" float-left">
              30
            </h2>
            <span>
              <a className="inactive" href="#" id="celsius">
                {" "}
                ºC{" "}
              </a>
              |
              <a className="" href="#" id="farenheit">
                {" "}
                ºF
              </a>
            </span>
          </div>
        </div>
        <ul>
          <li>Precipitation: 0%</li>
          <li>
            Wind: <span id="wind">0</span> mph
          </li>
          <li>
            Humidity: <span id="humidity">0</span>%
          </li>
        </ul>
      </div>
    </div>
  );
}
