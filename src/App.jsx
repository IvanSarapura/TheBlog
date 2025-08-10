import { useState } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
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

  return (
    <div className="app">
      <header className="header page-grid">
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
        <div className="hero-container page-grid">
          <h1 className="hero-title">THE BLOG</h1>
        </div>

        {/* First Blog Section */}
        <section className="blog-section page-grid">
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

        {/* Featured Blog Post Section */}
        <section className="featured-section page-grid">
          <div className="container">
            <div className="featured-content">
              <div className="blog-card featured-card">
                <div className="card-image">
                  <img src={image4} alt="Featured blog post" />
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
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and managing them. Here's how to build a
                    robust API stack that scales with your business needs.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Development</span>
                    <span className="category-badge">API</span>
                    <span className="category-badge">Backend</span>
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
              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image5} alt="UX review presentations" />
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

              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image6} alt="Migrating to Linear 101" />
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

              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image7} alt="Building your API Stack" />
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
                    The rise of RESTful APIs has been met by a rise in tools for
                    creating, testing, and managing them.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Design</span>
                    <span className="category-badge">Research</span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image8} alt="Bill Walsh leadership lessons" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">
                      Bill Walsh leadership lessons
                    </h3>
                    <img
                      src={arrowIcon}
                      alt="Read more"
                      className="arrow-icon"
                    />
                  </div>
                  <div className="card-meta">
                    <span className="author">Alec Whitten</span>
                    <span className="date">17 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Like to know the secrets of transforming a 2-14 team into a
                    3x Super Bowl winning Dynasty?
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Leadership</span>
                    <span className="category-badge">Management</span>
                  </div>
                </div>
              </div>

              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image9} alt="PM mental models" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">PM mental models</h3>
                    <img
                      src={arrowIcon}
                      alt="Read more"
                      className="arrow-icon"
                    />
                  </div>
                  <div className="card-meta">
                    <span className="author">Demi WIlkinson</span>
                    <span className="date">16 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Mental models are simple expressions of complex processes or
                    relationships.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Product</span>
                    <span className="category-badge">Research</span>
                    <span className="category-badge">Frameworks</span>
                  </div>
                </div>
              </div>

              <div className="blog-card post-card">
                <div className="card-image">
                  <img src={image10} alt="What is Wireframing?" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">What is Wireframing?</h3>
                    <img
                      src={arrowIcon}
                      alt="Read more"
                      className="arrow-icon"
                    />
                  </div>
                  <div className="card-meta">
                    <span className="author">Candice Wu</span>
                    <span className="date">15 Jan 2024</span>
                  </div>
                  <p className="card-description">
                    Introduction to Wireframing and its Principles. Learn from
                    the best in the industry.
                  </p>
                  <div className="card-categories">
                    <span className="category-badge">Design</span>
                    <span className="category-badge">Research</span>
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

export default App;
