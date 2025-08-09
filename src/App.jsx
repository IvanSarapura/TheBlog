import { useState } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Your Name</div>
          <div className="nav-right">
            <ul className="nav-menu">
              <li>
                <span
                  className="nav-link"
                  onClick={() => (window.location.hash = "#blog")}
                >
                  Blog
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => (window.location.hash = "#projects")}
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => (window.location.hash = "#about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className="nav-link"
                  onClick={() => (window.location.hash = "#newsletter")}
                >
                  Newsletter
                </span>
              </li>
            </ul>
            <div className="theme-toggle">
              <button
                className={`toggle-switch ${darkMode ? "dark" : "light"}`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                <div className="switch-track">
                  <div className="switch-icons">
                    <div className="icon-container sun-icon">
                      <img
                        src={sunIcon}
                        alt="Light mode"
                        className="switch-icon"
                      />
                    </div>
                    <div className="icon-container moon-icon">
                      <img
                        src={moonIcon}
                        alt="Dark mode"
                        className="switch-icon"
                      />
                    </div>
                  </div>
                  <div className="switch-thumb"></div>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-container">
          <h1 className="hero-title">THE BLOG</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
