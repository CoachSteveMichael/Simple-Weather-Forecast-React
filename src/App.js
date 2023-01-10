import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { WeatherCard } from "./components/WeatherCard";
import { ForecastCard } from "./components/ForecastCard";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=3bb62e07422e59687f1f443b1bba8ca7`;
      if (lat !== "" && long !== "") {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setWeatherData(data);
            console.log(data.list[0].weather[0].icon);
          });
      }
    }

    fetchData();
  }, [lat, long]);

  //make use effect for lat and long

  return (
    <div className="App">
      <h1>{weatherData?.city?.name}</h1>

      {weatherData ? <ForecastCard weatherData={weatherData} /> : ""}
    </div>
  );
}
