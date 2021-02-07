import React from "react";
import Search from "./Search";
import SelectedCity from "./SelectedCity";
import Forecast from "./Forecast";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <h1 className="title">What the Weather?</h1>
      <div className="card-body">
        <Search />
        <SelectedCity />
        <Forecast />
      </div>
    </div>
  );
}