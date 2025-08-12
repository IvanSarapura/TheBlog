import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import image11 from "./assets/Image-11.png";
import image12 from "./assets/Image-12.png";
import image13 from "./assets/Image-13.png";
import image14 from "./assets/Image-14.png";
import image15 from "./assets/Image-15.png";
import arrowIcon from "./assets/Arrow-up-right.svg";

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

        {/* Projects Section */}
        <section className="projects-section page-grid">
          <div className="container">
            <h2 className="section-heading">List Projects</h2>

            {/* First Row - Featured Project + 2 Small Cards */}
            <div className="projects-row featured-layout">
              <div className="project-card featured">
                <div className="card-image">
                  <img src={image13} alt="Featured Project" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      How to Solve User Problems with Data & Inclusive
                      Collaboration Design
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">Full Stack Development</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    A comprehensive full-stack web application that demonstrates
                    advanced development techniques, modern architecture, and
                    scalable design patterns. The project is a web application
                    that allows users to manage their hotel reservations and
                    bookings. The project is built with React.js for the
                    frontend and Node.js for the backend. The project is
                    deployed on Vercel.
                  </p>
                  <p className="card-description">
                    Built with cutting-edge frameworks and tools, this project
                    represents the pinnacle of modern web development practices.
                    It includes comprehensive testing, documentation, and
                    deployment strategies for production environments.
                  </p>
                  <p className="card-description">
                    The project features a robust backend API with real-time
                    data processing capabilities and a modern frontend built
                    with responsive design principles.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge fullstack">FULL STACK</span>
                    <span className="category-badge development">
                      DEVELOPMENT
                    </span>
                    <span className="category-badge web">WEB</span>
                  </div>
                </div>
              </div>

              <div className="small-cards-column">
                <div className="project-card small">
                  <div className="card-image">
                    <img src={image11} alt="Project 1" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">
                        User Experience Design Dashboard Hotel Management
                        <img
                          src={arrowIcon}
                          alt="View project"
                          className="arrow-icon"
                        />
                      </h3>
                    </div>
                    <div className="card-meta">
                      <span className="category">UI/UX Design</span>
                      <span className="date">2024</span>
                    </div>
                    <p className="card-description">
                      User experience (UX) design is a discipline that focuses
                      on creating products and services that are easy to use,
                      efficient, and enjoyable for users.
                    </p>
                    <div className="card-categories">
                      <span className="category-badge ui">UI/UX</span>
                      <span className="category-badge design">DESIGN</span>
                    </div>
                  </div>
                </div>

                <div className="project-card small">
                  <div className="card-image">
                    <img src={image12} alt="Project 2" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">
                        How to Impact Society with Natural Activism
                        <img
                          src={arrowIcon}
                          alt="View project"
                          className="arrow-icon"
                        />
                      </h3>
                    </div>
                    <div className="card-meta">
                      <span className="category">E-commerce Platform</span>
                      <span className="date">2024</span>
                    </div>
                    <p className="card-description">
                      The natural activism is a movement that focuses on
                      protecting and preserving the natural environment.
                    </p>
                    <div className="card-categories">
                      <span className="category-badge ecommerce">
                        E-COMMERCE
                      </span>
                      <span className="category-badge platform">PLATFORM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - 2 Cards */}
            <div className="projects-row">
              <div className="project-card">
                <div className="card-image">
                  <img src={image14} alt="Project 4" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Icon Package of Sling Icon Package for Social Media
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">UI/UX Design</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    An icon package is a collection of icons that can be used in
                    various design projects, such as website design, app
                    development, and graphic design.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge ui">UI/UX</span>
                    <span className="category-badge design">DESIGN</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="card-image">
                  <img src={image15} alt="Project 5" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      UX review presentations for a mobile app in Figma and
                      Framer
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">E-commerce Platform</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    UX review presentations are a great way to get feedback on
                    your design work. They are a great way to get feedback on
                    your design work.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge ecommerce">E-COMMERCE</span>
                    <span className="category-badge platform">PLATFORM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row - 2 Cards */}
            <div className="projects-row">
              <div className="project-card">
                <div className="card-image">
                  <img src={image14} alt="Project 6" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Project Name 5
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">UI/UX Design</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    A user interface and experience design project focused on
                    creating intuitive and engaging digital experiences.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge ui">UI/UX</span>
                    <span className="category-badge design">DESIGN</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="card-image">
                  <img src={image15} alt="Project 7" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Project Name 6
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">E-commerce Platform</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    A complete e-commerce solution with advanced features,
                    secure payment processing, and optimized user experience.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge ecommerce">E-COMMERCE</span>
                    <span className="category-badge platform">PLATFORM</span>
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

export default Projects;
