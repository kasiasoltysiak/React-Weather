import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weatherbox() {
  const [city, setCity] = useState("null");
  const apiKey = "311f1f45fee82242ab4086372ab360f5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const [description, setDescription] = useState(null);
  const [temp, setTemp] = useState(null);
  const [hum, setHum] = useState(null);
  const [wind, setWind] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemp(response.data.main.temp);
    setHum(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="enter a city"
        className="search-engine"
        onChange={handleChange}
      />
      <input type="submit" value="search!" className="search-button" />
    </form>
  );

  if (temp) {
    return (
      <div>
        {form}
        <ul>
          <li>Description: {description} </li>
          <li>Temperature: {Math.round(temp)} °C</li>
          <li>Humidity: {hum}%</li>
          <li>Wind: {wind}km/h </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <div className="starting-screen">Type a city name!</div>
      </div>
    );
  }
}
