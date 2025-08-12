import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import emailIcon from "./assets/Icon-email.svg";
import helpIcon from "./assets/Icon-help.svg";
import arrowIcon from "./assets/Arrow-up-right.svg";
import image5 from "./assets/Image-5.png";
import image6 from "./assets/Image-6.png";
import image7 from "./assets/Image-7.png";

function Newsletter({ darkMode, setDarkMode, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar when scrolling up or at the top
          if (currentScrollY < lastScrollY || currentScrollY < 100) {
            setNavbarVisible(true);
          }
          // Hide navbar when scrolling down and past 100px
          else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setNavbarVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
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
          <div className="logo">John Doe</div>

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
                  className={`nav-link ${false ? "active" : ""}`}
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
                  className={`nav-link ${true ? "active" : ""}`}
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
                    className={`mobile-nav-link ${false ? "active" : ""}`}
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
                    className={`mobile-nav-link ${true ? "active" : ""}`}
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

        {/* Related Posts Section */}
        <section className="related-posts-section page-grid">
          <div className="container">
            <h2 className="section-heading">All blog posts</h2>
            <div className="posts-grid">
              {/* Row 1 - Copied from Blog page */}
              <div className="blog-card post-card">
                <div className="card-image">
                  <img
                    src={image5}
                    alt="Bill Walsh leadership lessons of finance and business"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Bill Walsh leadership lessons of finance and business
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Alec Whitten</span>
                    <span className="date">20 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
                  </p>
                  <div className="card-categories">
                    <span className="category-badge leadership">
                      LEADERSHIP
                    </span>
                    <span className="category-badge management">
                      MANAGEMENT
                    </span>
                  </div>
                </div>
              </div>

              <div className="blog-card post-card">
                <div className="card-image">
                  <img
                    src={image6}
                    alt="PM mental models for product managers"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      PM mental models for product managers
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Demi Wilkinson</span>
                    <span className="date">19 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Mental models are simple expressions of complex processes or
                    relationships.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge product">PRODUCT</span>
                    <span className="category-badge research">RESEARCH</span>
                    <span className="category-badge frameworks">
                      FRAMEWORKS
                    </span>
                  </div>
                </div>
              </div>

              <div className="blog-card post-card">
                <div className="card-image">
                  <img
                    src={image7}
                    alt="What is Wireframing in the tech industry?"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      What is Wireframing in the tech industry?
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Candice Wu</span>
                    <span className="date">18 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Introduction to Wireframing and its Principles. Learn from
                    the best in the industry.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge design">DESIGN</span>
                    <span className="category-badge research">RESEARCH</span>
                  </div>
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
                <h3 className="footer-logo">John Doe</h3>
                <p className="footer-description">
                  A personal blog sharing insights on design, development, and
                  creative thinking.
                </p>
              </div>

              <div className="footer-links">
                <div className="footer-column">
                  <h4 className="footer-heading">Navigation</h4>
                  <ul className="footer-nav">
                    <li>
                      <span
                        className="footer-link"
                        onClick={() => setCurrentPage("blog")}
                        style={{ cursor: "pointer" }}
                      >
                        Blog
                      </span>
                    </li>
                    <li>
                      <span
                        className="footer-link"
                        onClick={() => setCurrentPage("projects")}
                        style={{ cursor: "pointer" }}
                      >
                        Projects
                      </span>
                    </li>
                    <li>
                      <span
                        className="footer-link"
                        onClick={() => setCurrentPage("about")}
                        style={{ cursor: "pointer" }}
                      >
                        About
                      </span>
                    </li>
                    <li>
                      <span
                        className="footer-link"
                        onClick={() => setCurrentPage("newsletter")}
                        style={{ cursor: "pointer" }}
                      >
                        Newsletter
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Resources</h4>
                  <ul className="footer-nav">
                    <li>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Dribbble
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h4 className="footer-heading">Contact</h4>
                  <ul className="footer-nav">
                    <li>
                      <a
                        href="mailto:hello@example.com"
                        className="footer-link"
                      >
                        Email
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Schedule Call
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://behance.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Behance
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        Medium
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2025 John Doe - All rights reserved
              </p>
              <div className="footer-bottom-links">
                <a href="/privacy" className="footer-bottom-link">
                  Privacy Policy
                </a>
                <a href="/terms" className="footer-bottom-link">
                  Terms of Service
                </a>
                <a href="/sitemap" className="footer-bottom-link">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Newsletter;
