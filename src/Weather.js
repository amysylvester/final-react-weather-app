import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      timestamp: "Sunday 01:38",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>
          <div className="row">
            <div className="col">
              <img src="" className="eye" alt="" />
            </div>
            <div className="col">
              on the <br />
              SKY
            </div>
          </div>
        </h1>
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h2>{weatherData.city}</h2>
        <div className="Today">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-6 today-weather">
                <img
                  src="{weatherData.iconUrl}"
                  alt="{weatherData.description}"
                />
              </div>
              <div className="col-md-6 temp">
                <div className="card-body">
                  <h2 className="card-title">
                    Today
                    <div>
                      <span>{Math.round(weatherData.temperature)}</span>
                      <span className="units">°F</span>
                    </div>
                    <ul>
                      <li>
                        <span className="text-capitalize">
                          {weatherData.description}
                        </span>
                      </li>
                      <li>
                        Humidity: <span>{weatherData.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span>{weatherData.wind}</span>km/h
                      </li>
                      <em>{weatherData.timestamp}</em>
                    </ul>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "999fff0d60735f079de3ce18c66b3ab1";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
