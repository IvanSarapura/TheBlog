import { useState } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import arrowIcon from "./assets/Arrow-up-right.svg";
import image1 from "./assets/Image-1.png";
import image2 from "./assets/Image-2.png";
import image3 from "./assets/Image-3.png";

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

        {/* First Blog Section */}
        <section className="blog-section">
          <div className="container">
            <h2 className="section-heading">Recent blog posts</h2>
            <div className="blog-grid">
              {/* Left Column - Main Blog Card */}
              <div className="blog-card main-card">
                <div className="card-image">
                  <img src={image1} alt="UX review presentations" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">UX review presentations</h3>
                    <img
                      src={arrowIcon}
                      alt="Read more"
                      className="arrow-icon"
                    />
                  </div>
                  <div className="card-meta">
                    <span className="author">Olivia Rhye</span>
                    <span className="date">20 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Design</span>
                    <span className="category-badge">Research</span>
                    <span className="category-badge">Presentation</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Secondary Blog Cards */}
              <div className="secondary-cards">
                <div className="blog-card secondary-card">
                  <div className="card-image">
                    <img src={image2} alt="Migrating to Linear 101" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">Migrating to Linear 101</h3>
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </div>
                    <div className="card-meta">
                      <span className="author">Phoenix Baker</span>
                      <span className="date">19 Jan 2024</span>
                    </div>
                    <p className="card-description">
                      Linear helps streamline software projects, sprints, tasks,
                      and bug tracking. Here's how to get started.
                    </p>
                    <div className="card-categories">
                      <span className="category-badge">Design</span>
                      <span className="category-badge">Research</span>
                    </div>
                  </div>
                </div>

                <div className="blog-card secondary-card">
                  <div className="card-image">
                    <img src={image3} alt="Building your API Stack" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">Building your API Stack</h3>
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </div>
                    <div className="card-meta">
                      <span className="author">Lana Steiner</span>
                      <span className="date">18 Jan 2024</span>
                    </div>
                    <p className="card-description">
                      The rise of RESTful APIs has been met by a rise in tools
                      for creating, testing, and managing them.
                    </p>
                    <div className="card-categories">
                      <span className="category-badge">Design</span>
                      <span className="category-badge">Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
