import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "999fff0d60735f079de3ce18c66b3ab1";
  let longitude = 40.7;
  let latitude = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="card-group">
        <div className="card">
          <img src="" alt="img" />
          <div className="card-body">
            <div className="WeatherForecast-day">
              <strong>SUN</strong>
            </div>
            <div className="WeatherForecast-temp">
              <div className="WeatherForecast-temp-max">77°</div>
              <div className="WeatherForecast-temp-min">60°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
