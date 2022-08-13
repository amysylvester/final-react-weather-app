import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div className="card">
      <WeatherIcon code={forecast[0].weather[0].icon} />
      <div className="card-body">
        <div className="WeatherForecast-day">
          <strong>{forecast[0].dt}</strong>
        </div>
        <div className="WeatherForecast-temp">
          <div className="WeatherForecast-temp-max">
            {forecast[0].temp.max}°
          </div>
          <div className="WeatherForecast-temp-min">
            {forecast[0].temp.min}°
          </div>
        </div>
      </div>
    </div>
  );
}
