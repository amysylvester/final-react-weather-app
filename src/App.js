import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Amy Sylvester and is{" "}
          <a
            href="https://github.com/amysylvester/final-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://celadon-brioche-c77b45.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
