import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Forecast-Card">
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="card-body">
        <div className="WeatherForecast-day">
          <strong>{day()}</strong>
        </div>
        <div className="WeatherForecast-temp">
          <div className="WeatherForecast-temp-max">
            <strong>{maxTemperature()}°</strong>
          </div>
          <div className="WeatherForecast-temp-min">{minTemperature()}°</div>
        </div>
      </div>
    </div>
  );
}
