import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import imagePerson from "./assets/Image-person.png";

function About({ darkMode, setDarkMode }) {
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
                  onClick={() => (window.location.href = "/")}
                >
                  Blog
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => (window.location.href = "/projects")}
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${true ? "active" : ""}`}
                  onClick={() => (window.location.href = "/about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => (window.location.href = "/newsletter")}
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
                      window.location.href = "/";
                      setMobileMenuOpen(false);
                    }}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${false ? "active" : ""}`}
                    onClick={() => {
                      window.location.href = "/projects";
                      setMobileMenuOpen(false);
                    }}
                  >
                    Projects
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${true ? "active" : ""}`}
                    onClick={() => {
                      window.location.href = "/about";
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
                      window.location.href = "/newsletter";
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
          <h1 className="hero-title">JOHN DOE</h1>
        </div>

        <section className="about-section page-grid">
          <div className="container">
            <div className="about-card">
              <div className="about-card-image">
                <img src={imagePerson} alt="John Doe" />
              </div>
              <div className="about-card-content">
                <div className="about-card-header">
                  <h2 className="about-card-title">About Me</h2>
                </div>
                <div className="about-card-description">
                  <p>
                    I'm a passionate designer and developer with over 8 years of
                    experience creating digital experiences that matter. I
                    believe in the power of thoughtful design to solve complex
                    problems and create meaningful connections between people
                    and technology.
                  </p>
                  <p>
                    My journey in design started with a curiosity about how
                    things work and evolved into a deep appreciation for the
                    intersection of aesthetics, functionality, and user
                    experience.
                  </p>
                  <p>
                    When I'm not designing or coding, you can find me exploring
                    new technologies, sharing knowledge with the community, or
                    enjoying a good cup of coffee while reading about the latest
                    design trends.
                  </p>
                </div>
                <div className="about-card-actions">
                  <button className="about-btn primary">Download CV</button>
                  <button className="about-btn secondary">Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer page-grid">
        <div className="container">
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-brand">
                <h3 className="footer-logo">Your Name</h3>
                <p className="footer-description">
                  A personal blog sharing insights on design, development, and
                  creative thinking.
                </p>
              </div>

              <div className="footer-links">
                <div className="footer-column">
                  <h4 className="footer-heading">Blog</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#recent" className="footer-link">
                        Recent Posts
                      </a>
                    </li>
                    <li>
                      <a href="#featured" className="footer-link">
                        Featured
                      </a>
                    </li>
                    <li>
                      <a href="#archive" className="footer-link">
                        Archive
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">About</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#about" className="footer-link">
                        About Me
                      </a>
                    </li>
                    <li>
                      <a href="#projects" className="footer-link">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="footer-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Connect</h4>
                  <ul className="footer-nav">
                    <li>
                      <a href="#newsletter" className="footer-link">
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href="#twitter" className="footer-link">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#linkedin" className="footer-link">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2025 Your Name - All rights reserved
              </p>
              <div className="footer-bottom-links">
                <a href="#privacy" className="footer-bottom-link">
                  Privacy Policy
                </a>
                <a href="#terms" className="footer-bottom-link">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
