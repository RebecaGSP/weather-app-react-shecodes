import React from "react";
import axios from "axios";

export default function Weather(props) {

    function getTemperature(response) {
        alert(
            `The weather in ${response.data.name} is ${response.data.main.temp} ºC`
        )
    }

    let apiKey = "48b09ccbd64506cbc4fe7db34fbff847";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getTemperature);
    return (

        <h2>Hello from Weather</h2>
    )
}