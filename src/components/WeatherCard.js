import React from "react";

function WeatherCard(props) {
  const { weatherData } = props;

  let temperature = Math.floor((props.temp -= 273));

  return (
    <div className="weatherCard">
      {/* {temperature >= 15 ? (
        <img src="img/sun.png" />
      ) : (
        <img src="img/snow.png" />
      )} */}
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
      <h2>{props.date.slice(5, 10)}</h2>
      <p>{temperature}&deg;</p>
      <div className="flex">
        <p>hi</p>
        <p>low</p>
      </div>
      <div className="flex bold">
        <p>{Math.floor((props.hi -= 273))}&deg;</p>
        <p>{Math.floor(props.lo - 273)}&deg;</p>
      </div>
    </div>
  );
}

export { WeatherCard };
