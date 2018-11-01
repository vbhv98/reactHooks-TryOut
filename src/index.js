import React, { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./comp/home";
import About from "./comp/about";
import "./styles.css";

function App() {
  let [isHome, setIsHome] = useState(true);
  let [isAbout, setIsAbout] = useState(false);
  return (
    <div className="App">
      <ul>
        <li>
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              if (!isHome) {
                setIsHome(!isHome);
                setIsAbout(!isAbout);
              }
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            onClick={e => {
              e.preventDefault();
              if (!isAbout) {
                setIsAbout(!isAbout);
                setIsHome(!isHome);
              }
            }}
          >
            About
          </a>
        </li>
      </ul>
      {(isHome && <Home />) || (isAbout && <About />)}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
