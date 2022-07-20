import React from "react";
import FormattedTimestamp from "./FormattedTimestamp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.weatherData.city}</h2>
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
                <h3 className="card-title">
                  Today
                  <div>
                    <span>{Math.round(props.weatherData.temperature)}</span>
                    <span className="units">°F</span>
                  </div>
                  <ul>
                    <li>
                      <span className="text-capitalize">
                        {props.weatherData.description}
                      </span>
                    </li>
                    <li>
                      Humidity: <span>{props.weatherData.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{props.weatherData.wind}</span>km/h
                    </li>
                    <em>
                      <FormattedTimestamp
                        date={props.weatherData.timestamp}
                      ></FormattedTimestamp>
                    </em>
                  </ul>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
