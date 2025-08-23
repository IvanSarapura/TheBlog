import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

function Projects() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/")
      return location.pathname === "/" || location.pathname.startsWith("/blog");
    return location.pathname.startsWith(path);
  };
  const go = (path) => navigate(path);
  const onKeyGo = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Projects data with IDs
  const projects = [
    {
      id: "1",
      title:
        "How to participate in volunteering activities in the New Zealand Islands",
      category: "Volunteering",
      date: "2024",
      description:
        "A comprehensive full-stack web application that demonstrates advanced development techniques, modern architecture, and scalable design patterns. The project is a web application that allows users to manage their hotel reservations and bookings. The project is built with React.js for the frontend and Node.js for the backend. The project is deployed on Vercel.",
      image: image13,
      categories: ["design", "research", "presentation", "collaboration"],
    },
    {
      id: "2",
      title: "Mobile App Development for E-commerce Platform",
      category: "Mobile Development",
      date: "2024",
      description:
        "A cross-platform mobile application built with React Native that provides a seamless shopping experience for users. Features include product browsing, secure payment processing, order tracking, and personalized recommendations.",
      image: image11,
      categories: ["mobile", "app", "fullstack"],
    },
    {
      id: "3",
      title: "AI-Powered Analytics Dashboard",
      category: "Data Science",
      date: "2024",
      description:
        "An intelligent analytics platform that uses machine learning algorithms to provide real-time insights and predictive analytics for business decision-making.",
      image: image12,
      categories: ["development", "ui", "ecommerce"],
    },
    {
      id: "4",
      title: "Sustainable Energy Management System",
      category: "IoT & Energy",
      date: "2024",
      description:
        "An Internet of Things (IoT) solution for monitoring and optimizing energy consumption in commercial buildings, helping reduce carbon footprint and operational costs.",
      image: image14,
      categories: ["platform", "saas", "tools"],
    },
    {
      id: "5",
      title: "Blockchain-Based Supply Chain Tracker",
      category: "Blockchain",
      date: "2024",
      description:
        "A decentralized application (DApp) that provides end-to-end transparency and traceability in supply chain management using blockchain technology.",
      image: image15,
      categories: ["development", "ui", "ecommerce"],
    },
  ];

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  role="link"
                  tabIndex={0}
                  onClick={() => go("/")}
                  onKeyDown={(e) => onKeyGo(e, "/")}
                >
                  Blog
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${
                    isActive("/projects") ? "active" : ""
                  }`}
                  role="link"
                  tabIndex={0}
                  onClick={() => go("/projects")}
                  onKeyDown={(e) => onKeyGo(e, "/projects")}
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  role="link"
                  tabIndex={0}
                  onClick={() => go("/about")}
                  onKeyDown={(e) => onKeyGo(e, "/about")}
                >
                  About
                </span>
              </li>
              <li>
                <span
                  className={`nav-link ${
                    isActive("/newsletter") ? "active" : ""
                  }`}
                  role="link"
                  tabIndex={0}
                  onClick={() => go("/newsletter")}
                  onKeyDown={(e) => onKeyGo(e, "/newsletter")}
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
                    className={`mobile-nav-link ${
                      isActive("/") ? "active" : ""
                    }`}
                    role="link"
                    tabIndex={0}
                    onClick={() => {
                      go("/");
                      setMobileMenuOpen(false);
                    }}
                    onKeyDown={(e) => onKeyGo(e, "/")}
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${
                      isActive("/projects") ? "active" : ""
                    }`}
                    role="link"
                    tabIndex={0}
                    onClick={() => {
                      go("/projects");
                      setMobileMenuOpen(false);
                    }}
                    onKeyDown={(e) => onKeyGo(e, "/projects")}
                  >
                    Projects
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${
                      isActive("/about") ? "active" : ""
                    }`}
                    role="link"
                    tabIndex={0}
                    onClick={() => {
                      go("/about");
                      setMobileMenuOpen(false);
                    }}
                    onKeyDown={(e) => onKeyGo(e, "/about")}
                  >
                    About
                  </span>
                </li>
                <li>
                  <span
                    className={`mobile-nav-link ${
                      isActive("/newsletter") ? "active" : ""
                    }`}
                    role="link"
                    tabIndex={0}
                    onClick={() => {
                      go("/newsletter");
                      setMobileMenuOpen(false);
                    }}
                    onKeyDown={(e) => onKeyGo(e, "/newsletter")}
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
              <div
                className="project-card featured clickable-card"
                onClick={() => {
                  // TODO: Implement project navigation
                  console.log("Navigate to project 1");
                }}
              >
                <div className="card-image">
                  <img src={image13} alt="Featured Project" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      How to participate in volunteering activities in the New
                      Zealand Islands
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">Volunteering</span>
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
                    <span className="category-badge design">DESIGN</span>
                    <span className="category-badge research">RESEARCH</span>
                    <span className="category-badge presentation">
                      PRESENTATION
                    </span>
                    <span className="category-badge collaboration">
                      COLLABORATION
                    </span>
                  </div>
                </div>
              </div>

              <div className="small-cards-column">
                <div
                  className="project-card small clickable-card"
                  onClick={() => {
                    // TODO: Implement project navigation
                    console.log("Navigate to project 2");
                  }}
                >
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
                      <span className="category-badge research">RESEARCH</span>
                    </div>
                  </div>
                </div>

                <div
                  className="project-card small clickable-card"
                  onClick={() => {
                    // TODO: Implement project navigation
                    console.log("Navigate to project 3");
                  }}
                >
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
                      <span className="category">Social Activism</span>
                      <span className="date">2024</span>
                    </div>
                    <p className="card-description">
                      The natural activism is a movement that focuses on
                      protecting and preserving the natural environment and
                      wildlife.
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
              <div
                className="project-card clickable-card"
                onClick={() => {
                  // TODO: Implement project navigation
                  console.log("Navigate to project 4");
                }}
              >
                <div className="card-image">
                  <img src={image14} alt="Project 4" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Icon Package of Sling Icon Package for Social Media
                      Management
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

              <div
                className="project-card clickable-card"
                onClick={() => {
                  // TODO: Implement project navigation
                  console.log("Navigate to project 5");
                }}
              >
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
              <div
                className="project-card clickable-card"
                onClick={() => {
                  // TODO: Implement project navigation
                  console.log("Navigate to project 6");
                }}
              >
                <div className="card-image">
                  <img src={image14} alt="Project 6" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Interactive news paper on the impact of cryptocurrencies
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">Development</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    An interactive news paper on the impact of cryptocurrencies
                    on the legal system.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge development">
                      DEVELOPMENT
                    </span>
                    <span className="category-badge product">PRODUCT</span>
                  </div>
                </div>
              </div>

              <div
                className="project-card clickable-card"
                onClick={() => {
                  // TODO: Implement project navigation
                  console.log("Navigate to project 7");
                }}
              >
                <div className="card-image">
                  <img src={image15} alt="Project 7" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      University course on cryptocurrencies and legaltech
                      <img
                        src={arrowIcon}
                        alt="View project"
                        className="arrow-icon"
                      />
                    </h3>
                  </div>
                  <div className="card-meta">
                    <span className="category">University Course</span>
                    <span className="date">2024</span>
                  </div>
                  <p className="card-description">
                    A university course on cryptocurrencies and legaltech, with
                    an interesting interaction with a Smart Contract.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge podcast">PODCAST</span>
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

export default Projects;
