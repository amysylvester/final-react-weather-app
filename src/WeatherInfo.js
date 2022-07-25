import React from "react";
import WeatherIcon from "./WeatherIcon";
import TodayTemperature from "./TodayTemperature";
import FormattedTimestamp from "./FormattedTimestamp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <div className="Today">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="today-weather-icon">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                />
              </div>
            </div>
            <div className="col-md-6 temp">
              <div className="card-body">
                <h3 className="card-title">
                  Today
                  <div>
                    <TodayTemperature celsius={props.data.temperature} />
                  </div>
                  <ul>
                    <li>
                      <span className="text-capitalize">
                        {props.data.description}
                      </span>
                    </li>
                    <li>
                      Humidity: <span>{props.data.humidity}</span>%
                    </li>
                    <li>
                      Wind: <span>{Math.round(props.data.wind)}</span>km/h
                    </li>
                    <em>
                      <FormattedTimestamp
                        date={props.data.timestamp}
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
