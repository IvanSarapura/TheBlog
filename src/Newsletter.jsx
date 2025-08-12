import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import emailIcon from "./assets/Icon-email.svg";
import helpIcon from "./assets/Icon-help.svg";

function Newsletter({ darkMode, setDarkMode }) {
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
                  className={`nav-link ${false ? "active" : ""}`}
                  onClick={() => (window.location.href = "/about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${true ? "active" : ""}`}
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
                    className={`mobile-nav-link ${false ? "active" : ""}`}
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
                    className={`mobile-nav-link ${true ? "active" : ""}`}
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
        {/* Newsletter Section */}
        <section className="newsletter-section page-grid">
          <div className="container">
            <div className="newsletter-content">
              <div className="newsletter-header">
                <div className="newsletter-heading">
                  <p className="newsletter-subtitle">Newsletter</p>
                  <h1 className="newsletter-title">Stories and Interviews</h1>
                </div>
                <div className="newsletter-supporting-text">
                  <p>
                    Subscribe to learn about new product features, the latest in
                    technology, solutions, and updates.
                  </p>
                </div>
              </div>

              <div className="newsletter-email-capture">
                <div className="newsletter-input-container">
                  <div className="newsletter-input-row">
                    <div className="newsletter-input-base">
                      <div className="newsletter-input-content">
                        <img
                          src={emailIcon}
                          alt="Email"
                          className="newsletter-input-icon"
                        />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="newsletter-input-field"
                        />
                      </div>
                      <img
                        src={helpIcon}
                        alt="Help"
                        className="newsletter-help-icon"
                      />
                    </div>
                    <div className="newsletter-button-container">
                      <button className="newsletter-subscribe-btn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <p className="newsletter-hint-text">
                    We care about your data in our{" "}
                    <a href="/privacy-policy">privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Newsletter;
