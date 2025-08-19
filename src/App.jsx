import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import arrowIcon from "./assets/Arrow-up-right.svg";
import arrowLeftIcon from "./assets/arrow-left.svg";
import arrowRightIcon from "./assets/arrow-right.svg";
import image1 from "./assets/Image-1.png";
import image2 from "./assets/Image-2.png";
import image3 from "./assets/Image-3.png";
import image4 from "./assets/Image-4.png";
import image5 from "./assets/Image-5.png";
import image6 from "./assets/Image-6.png";
import image7 from "./assets/Image-7.png";
import image8 from "./assets/Image-8.png";
import image9 from "./assets/Image-9.png";
import image10 from "./assets/Image-10.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

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
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/newsletter"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Newsletter
                </NavLink>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/newsletter"
                    className={({ isActive }) =>
                      `mobile-nav-link ${isActive ? "active" : ""}`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Newsletter
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-container page-grid">
          <h1 className="hero-title">THE BLOG</h1>
        </div>

        {/* First Blog Section */}
        <section className="blog-section page-grid">
          <div className="container">
            <h2 className="section-heading">Recent blog posts</h2>
            <div className="blog-grid">
              {/* Left Column - Main Blog Card */}
              <div
                className="blog-card main-card clickable-card"
                onClick={() => navigate("/blog/1")}
              >
                <div className="card-image">
                  <img src={image1} alt="UX review presentations" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      UX review presentations
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Olivia Rhye</span>
                    <span className="date">20 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers with the use of AI in
                    your presentations or other documents?
                  </p>
                  <div className="card-categories">
                    <span className="category-badge design">Design</span>
                    <span className="category-badge research">Research</span>
                    <span className="category-badge presentation">
                      Presentation
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Secondary Blog Cards */}
              <div className="secondary-cards">
                <div
                  className="blog-card secondary-card clickable-card"
                  onClick={() => navigate("/blog/2")}
                >
                  <div className="card-image">
                    <img src={image2} alt="Migrating to Linear 101" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">
                        Migrating to Linear 101
                        <img
                          src={arrowIcon}
                          alt="Read more"
                          className="arrow-icon"
                        />
                      </h3>
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
                      <span className="category-badge design">Design</span>
                      <span className="category-badge research">Research</span>
                    </div>
                  </div>
                </div>

                <div
                  className="blog-card secondary-card clickable-card"
                  onClick={() => navigate("/blog/3")}
                >
                  <div className="card-image">
                    <img src={image3} alt="Building your API Stack" />
                  </div>
                  <div className="card-content">
                    <div className="card-header">
                      <h3 className="card-title">
                        Building your API Stack
                        <img
                          src={arrowIcon}
                          alt="Read more"
                          className="arrow-icon"
                        />
                      </h3>
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
                      <span className="category-badge design">Design</span>
                      <span className="category-badge research">Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Blog Post Section */}
        <section className="featured-section page-grid">
          <div className="container">
            <div className="featured-content">
              <div
                className="blog-card featured-card clickable-card"
                onClick={() => navigate("/blog/4")}
              >
                <div className="card-image">
                  <img
                    src={image4}
                    alt="Grid system for better Design User Interface"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Grid system for better Design User Interface
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Olivia Rhye</span>
                    <span className="date">18 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    A grid system is a design tool used to arrange content on a
                    webpage using vertical and horizontal lines. It helps create
                    consistent layouts and makes websites more visually
                    appealing and easier to navigate.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge design">DESIGN</span>
                    <span className="category-badge interface">INTERFACE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Blog Posts Section */}
        <section className="all-posts-section page-grid">
          <div className="container">
            <h2 className="section-heading">All blog posts</h2>
            <div className="posts-grid">
              {/* Row 1 */}
              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/5")}
              >
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

              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/6")}
              >
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

              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/7")}
              >
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

              {/* Row 2 */}
              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/8")}
              >
                <div className="card-image">
                  <img
                    src={image8}
                    alt="How collaboration makes us better designers"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      How collaboration makes us better designers
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Natali Craig</span>
                    <span className="date">17 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Collaboration can make our teams stronger, and our
                    individual designs better.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge design">DESIGN</span>
                    <span className="category-badge research">RESEARCH</span>
                  </div>
                </div>
              </div>

              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/9")}
              >
                <div className="card-image">
                  <img
                    src={image9}
                    alt="Our top 10 Javascript frameworks to use"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Our top 10 Javascript frameworks to use in 2025
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Drew Cano</span>
                    <span className="date">16 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    JavaScript frameworks make development easy with extensive
                    features and functionalities.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge development">
                      DEVELOPMENT
                    </span>
                    <span className="category-badge tools">TOOLS</span>
                    <span className="category-badge saas">SAAS</span>
                  </div>
                </div>
              </div>

              <div
                className="blog-card post-card clickable-card"
                onClick={() => navigate("/blog/10")}
              >
                <div className="card-image">
                  <img
                    src={image10}
                    alt="Podcast: Creating a better CX Community"
                  />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Podcast: Creating a better CX Community
                      <img
                        src={arrowIcon}
                        alt="Read more"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="author">Orlando Diggs</span>
                    <span className="date">15 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Starting a community doesn’t need to be complicated, but how
                    do you get started?
                  </p>
                  <div className="card-categories">
                    <span className="category-badge podcast">PODCAST</span>
                    <span className="category-badge customer-success">
                      CUSTOMER SUCCESS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="pagination">
              <button className="pagination-btn prev-btn">
                <img
                  src={arrowLeftIcon}
                  alt="Previous"
                  className="pagination-arrow"
                />
                <span>Previous</span>
              </button>

              <div className="pagination-numbers">
                <span className="pagination-number active">1</span>
                <span className="pagination-number">2</span>
                <span className="pagination-number">3</span>
                <span className="pagination-number">...</span>
                <span className="pagination-number">8</span>
                <span className="pagination-number">9</span>
                <span className="pagination-number">10</span>
              </div>

              <button className="pagination-btn next-btn">
                <span>Next</span>
                <img
                  src={arrowRightIcon}
                  alt="Next"
                  className="pagination-arrow"
                />
              </button>
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
                      <Link
                        className="footer-link"
                        to="/"
                        style={{ cursor: "pointer" }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="footer-link"
                        to="/projects"
                        style={{ cursor: "pointer" }}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="footer-link"
                        to="/about"
                        style={{ cursor: "pointer" }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="footer-link"
                        to="/newsletter"
                        style={{ cursor: "pointer" }}
                      >
                        Newsletter
                      </Link>
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

export default App;
