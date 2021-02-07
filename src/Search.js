import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a city"
          id="search-city"
        />
        <span className="input-group-text" id="basic-addon2" value="Search">
          <i className="fas fa-search"></i>
        </span>
        <div className="filters">
          <i className="fas fa-map-marker-alt" id="current-location"></i>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    </form>
  );
}
