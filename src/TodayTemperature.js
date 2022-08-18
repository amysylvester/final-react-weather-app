import React, { useState } from "react";
import "./TodayTemperature.css";

export default function TodayTemperature(props) {
  const [unit, setUnit] = useState("imperial");

  function showImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function celsius() {
    return (props.imperial - 32) * (5 / 9);
  }

  if (unit === "imperial") {
    return (
      <div className="TodayTemperature">
        <span className="temperature">{Math.round(props.imperial)}</span>
        <span className="unit">
          {" "}
          °F |
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TodayTemperature">
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={showImperial}>
            {" "}
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
