import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";

function Projects({ darkMode, setDarkMode, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setNavbarVisible(false);
      } else {
        // Scrolling up or at top
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <header
        className={`header page-grid ${
          navbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <nav className="navbar">
          <div className="logo">Your Name</div>

          {/* Desktop Navigation */}
          <div className="nav-right desktop-nav">
            <ul className="nav-menu">
              <li>
                <span
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => setCurrentPage("blog")}
                >
                  Blog
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${true ? "active" : ""}`}
                  onClick={() => setCurrentPage("projects")}
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => setCurrentPage("about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => setCurrentPage("newsletter")}
                >
                  Newsletter
                </span>
              </li>
            </ul>
            <div className="theme-toggle">
              <button
                className={`toggle-switch ${darkMode ? "light" : "dark"}`}
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

          {/* Mobile Navigation */}
          <div className="mobile-nav">
            <div className="mobile-nav-controls">
              <div className="theme-toggle mobile-theme-toggle">
                <button
                  className={`toggle-switch ${darkMode ? "light" : "dark"}`}
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

              <button
                className="hamburger-menu"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
              className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
            >
              {/* Close Button */}
              <button
                className="mobile-menu-close"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <img src={menuIcon} alt="Close menu" className="close-icon" />
              </button>

              <ul className="mobile-menu">
                <li>
                  <span
                    className={`mobile-nav-link ${false ? "active" : ""}`}
                    onClick={() => {
                      setCurrentPage("blog");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${true ? "active" : ""}`}
                    onClick={() => {
                      setCurrentPage("projects");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Projects
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${false ? "active" : ""}`}
                    onClick={() => {
                      setCurrentPage("about");
                      setMobileMenuOpen(false);
                    }}
                  >
                    About
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${false ? "active" : ""}`}
                    onClick={() => {
                      setCurrentPage("newsletter");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Newsletter
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-container page-grid">
          <h1 className="hero-title">PROJECTS</h1>
        </div>
      </main>
    </div>
  );
}

export default Projects;
