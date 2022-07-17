import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h2>NEW YORK</h2>
      <div className="Today">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-6 today-weather">
              <img src="" alt="" />
            </div>
            <div className="col-md-6 temp">
              <div className="card-body">
                <h2 className="card-title">
                  Today
                  <div>
                    <span>77</span>
                    <span className="units">°F</span>
                  </div>
                  <ul>
                    <li>
                      <span>Description</span>
                    </li>
                    <li>
                      Humidity: <span></span>%
                    </li>
                    <li>
                      Wind: <span></span>km/h
                    </li>
                    <em>timestamp</em>
                  </ul>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
