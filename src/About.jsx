import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import imagePerson from "./assets/Image-person.png";

function About({ darkMode, setDarkMode, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("about");

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

  const skills = [
    { name: "React", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "Figma", level: 90, category: "Design" },
    { name: "Adobe Creative Suite", level: 85, category: "Design" },
    { name: "SQL", level: 70, category: "Database" },
    { name: "AWS", level: 65, category: "Cloud" },
    { name: "Docker", level: 60, category: "DevOps" },
  ];

  const experience = [
    {
      company: "TechCorp",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description:
        "Leading the development of user-facing features for a SaaS platform serving 2M+ users. Mentored junior developers and implemented best practices.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      company: "DesignStudio",
      position: "UI/UX Designer & Developer",
      period: "2020 - 2022",
      description:
        "Designed and developed responsive web applications for clients across various industries. Collaborated with cross-functional teams to deliver exceptional user experiences.",
      technologies: ["Figma", "React", "JavaScript", "CSS3"],
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description:
        "Built and maintained web applications from concept to deployment. Worked closely with product managers to implement new features and improve existing functionality.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "Docker"],
    },
  ];

  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science in Computer Science",
      period: "2016 - 2018",
      description:
        "Specialized in Human-Computer Interaction and Software Engineering. Graduated with honors.",
      gpa: "3.9/4.0",
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Arts in Design",
      period: "2012 - 2016",
      description:
        "Focused on graphic design, user experience, and digital media. Completed honors thesis on interactive design.",
      gpa: "3.8/4.0",
    },
  ];

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
                  className={`nav-link ${true ? "active" : ""}`}
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
                    className={`mobile-nav-link ${true ? "active" : ""}`}
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
        {/* Hero Section */}
        <section className="about-hero page-grid">
          <div className="container">
            <div className="about-hero-content">
              <div className="about-hero-text">
                <h1 className="about-hero-title">John Doe</h1>
                <p className="about-hero-subtitle">
                  Senior Frontend Developer & UI/UX Designer
                </p>
                <p className="about-hero-description">
                  Passionate about creating exceptional digital experiences that
                  combine beautiful design with powerful functionality. 8+ years
                  of experience building products that users love.
                </p>
                <div className="about-hero-actions">
                  <button className="about-btn primary">Download CV</button>
                  <button className="about-btn secondary">Get in Touch</button>
                </div>
              </div>
              <div className="about-hero-image">
                <div className="about-image-container">
                  <img src={imagePerson} alt="John Doe" />
                  <div className="about-image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="about-tabs page-grid">
          <div className="container">
            <div className="about-tabs-nav">
              <button
                className={`about-tab ${activeTab === "about" ? "active" : ""}`}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
              <button
                className={`about-tab ${
                  activeTab === "skills" ? "active" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </button>
              <button
                className={`about-tab ${
                  activeTab === "experience" ? "active" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`about-tab ${
                  activeTab === "education" ? "active" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="about-content page-grid">
          <div className="container">
            {/* About Me Section */}
            {activeTab === "about" && (
              <div className="about-content-section">
                <div className="about-me-grid">
                  <div className="about-me-main">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-me-text">
                      <p>
                        I'm a passionate designer and developer with over 8
                        years of experience creating digital experiences that
                        matter. I believe in the power of thoughtful design to
                        solve complex problems and create meaningful connections
                        between people and technology.
                      </p>
                      <p>
                        My journey in design started with a curiosity about how
                        things work and evolved into a deep appreciation for the
                        intersection of aesthetics, functionality, and user
                        experience. Today, I specialize in building scalable web
                        applications that not only look great but also provide
                        exceptional user experiences.
                      </p>
                      <p>
                        When I'm not designing or coding, you can find me
                        exploring new technologies, sharing knowledge with the
                        community, or enjoying a good cup of coffee while
                        reading about the latest design trends. I'm always eager
                        to learn new skills and take on challenging projects
                        that push the boundaries of what's possible.
                      </p>
                    </div>
                  </div>
                  <div className="about-me-stats">
                    <div className="stat-card">
                      <div className="stat-number">8+</div>
                      <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">50+</div>
                      <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">15+</div>
                      <div className="stat-label">Technologies</div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-number">100%</div>
                      <div className="stat-label">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeTab === "skills" && (
              <div className="about-content-section">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-grid">
                  {[
                    "Frontend",
                    "Backend",
                    "Design",
                    "Database",
                    "Cloud",
                    "DevOps",
                  ].map((category) => (
                    <div key={category} className="skills-category">
                      <h3 className="skills-category-title">{category}</h3>
                      <div className="skills-list">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill) => (
                            <div key={skill.name} className="skill-item">
                              <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="skill-bar">
                                <div
                                  className="skill-progress"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeTab === "experience" && (
              <div className="about-content-section">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-timeline">
                  {experience.map((job, index) => (
                    <div key={index} className="experience-item">
                      <div className="experience-marker"></div>
                      <div className="experience-content">
                        <div className="experience-header">
                          <h3 className="experience-position">
                            {job.position}
                          </h3>
                          <span className="experience-company">
                            {job.company}
                          </span>
                          <span className="experience-period">
                            {job.period}
                          </span>
                        </div>
                        <p className="experience-description">
                          {job.description}
                        </p>
                        <div className="experience-technologies">
                          {job.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeTab === "education" && (
              <div className="about-content-section">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                  {education.map((edu, index) => (
                    <div key={index} className="education-card">
                      <div className="education-header">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <span className="education-institution">
                          {edu.institution}
                        </span>
                        <span className="education-period">{edu.period}</span>
                      </div>
                      <p className="education-description">{edu.description}</p>
                      <div className="education-gpa">
                        <span className="gpa-label">GPA:</span>
                        <span className="gpa-value">{edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

export default About;
