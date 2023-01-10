import React from "react";
import { WeatherCard } from "./WeatherCard";

function ForecastCard(props) {
  const { weatherData } = props;
  let weatherDataElements = [];
  if (weatherData.list !== undefined) {
    weatherDataElements.push(
      <WeatherCard
        id={0}
        key={0}
        temp={weatherData.list[0].main.temp}
        weather={weatherData.list[0].weather[0].main}
        hi={weatherData.list[0].main.temp_max}
        lo={weatherData.list[0].main.temp_min}
        date={weatherData.list[0]["dt_txt"]}
        icon={weatherData.list[0].weather[0].icon}
      />
    );
  }
  for (let i = 1; i < weatherData?.list?.length; i++) {
    if (weatherData?.list !== undefined) {
      let currentDate = weatherData.list[i]["dt_txt"].slice(10);

      if (currentDate === " 12:00:00") {
        weatherDataElements.push(
          <WeatherCard
            id={i}
            key={i}
            temp={weatherData.list[i].main.temp}
            weather={weatherData.list[i].weather[0].description}
            hi={weatherData.list[i].main.temp_max}
            lo={weatherData.list[i].main.temp_min}
            date={weatherData.list[i]["dt_txt"]}
            icon={weatherData.list[i].weather[0].icon}
          />
        );
      }
    }
  }

  // let weatherDataElements = weatherData?.list?.map((ele, index) => {
  //   if (index % 7 === 0) {
  //     return (
  //       <WeatherCard
  //         key={index}
  //         id={index}
  //         temp={ele.main.temp}
  //         weather={ele.weather.description}
  //         hi={ele.main.temp_max}
  //         lo={ele.main.temp_min}
  //         date={ele["dt_txt"]}
  //       />
  //     );
  //   }
  // });

  return <div className="forecast">{weatherDataElements}</div>;
}

export { ForecastCard };
