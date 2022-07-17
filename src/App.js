import "./App.css";
import Weather from "./Weather";
import "./App.css";

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
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
