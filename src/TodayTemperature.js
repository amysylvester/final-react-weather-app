import React, { useState } from "react";
import "./TodayTemperature.css";

export default function TodayTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "imperial") {
    return (
      <div className="TodayTemperature">
        <span className="temperature">{Math.round(props.imperial)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = (5 / 9) * (props.imperial - 32);
    return (
      <div className="TodayTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showFahrenheit}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
