import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import imagePerson from "./assets/Image-person.png";
import image1 from "./assets/Image-1.png";
import image2 from "./assets/Image-2.png";
import image3 from "./assets/Image-3.png";
import image11 from "./assets/Image-11.png";
import image12 from "./assets/Image-12.png";
import image13 from "./assets/Image-13.png";

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
    {
      name: "React",
      category: "Frontend",
      description: "Modern UI development with hooks and context",
      icon: "⚛️",
      tags: ["Hooks", "Context", "Redux"],
    },
    {
      name: "JavaScript",
      category: "Frontend",
      description: "ES6+ features and modern development",
      icon: "🟨",
      tags: ["ES6+", "Async", "DOM"],
    },
    {
      name: "TypeScript",
      category: "Frontend",
      description: "Type-safe development and interfaces",
      icon: "🔷",
      tags: ["Types", "Interfaces", "Generics"],
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Server-side JavaScript and APIs",
      icon: "🟢",
      tags: ["Express", "APIs", "Middleware"],
    },
    {
      name: "Python",
      category: "Backend",
      description: "Data processing and automation",
      icon: "🐍",
      tags: ["Django", "Flask", "Data"],
    },
    {
      name: "Figma",
      category: "Design",
      description: "UI/UX design and prototyping",
      icon: "🎨",
      tags: ["Prototyping", "Components", "Design System"],
    },
    {
      name: "Adobe Creative Suite",
      category: "Design",
      description: "Graphic design and visual content",
      icon: "✨",
      tags: ["Photoshop", "Illustrator", "XD"],
    },
    {
      name: "SQL",
      category: "Database",
      description: "Database design and optimization",
      icon: "🗄️",
      tags: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      name: "AWS",
      category: "Cloud",
      description: "Cloud infrastructure and services",
      icon: "☁️",
      tags: ["EC2", "S3", "Lambda"],
    },
    {
      name: "Docker",
      category: "DevOps",
      description: "Containerization and deployment",
      icon: "🐳",
      tags: ["Containers", "Kubernetes", "CI/CD"],
    },
  ];

  const experience = [
    {
      company: "TechCorp",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description:
        "Leading the development of user-facing features for a SaaS platform serving 2M+ users. Mentored junior developers and implemented best practices.",
      technologies: ["React", "TypeScript", "Node.js", "AWS"],
      achievements: [
        "Increased performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
    },
    {
      company: "DesignStudio",
      position: "UI/UX Designer & Developer",
      period: "2020 - 2022",
      description:
        "Designed and developed responsive web applications for clients across various industries. Collaborated with cross-functional teams to deliver exceptional user experiences.",
      technologies: ["Figma", "React", "JavaScript", "CSS3"],
      achievements: [
        "Designed 20+ client projects",
        "Improved conversion rates by 25%",
        "Created design system",
      ],
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description:
        "Built and maintained web applications from concept to deployment. Worked closely with product managers to implement new features and improve existing functionality.",
      technologies: ["JavaScript", "Python", "PostgreSQL", "Docker"],
      achievements: [
        "Built MVP in 3 months",
        "Reduced bugs by 60%",
        "Implemented automated testing",
      ],
    },
    {
      company: "DigitalAgency",
      position: "Semi Senior Frontend Developer",
      period: "2017 - 2018",
      description:
        "Developed and maintained multiple client websites using modern frontend technologies. Collaborated with designers and backend developers to deliver high-quality products.",
      technologies: ["React", "Vue.js", "JavaScript", "Sass"],
      achievements: [
        "Delivered 15+ client projects",
        "Improved code quality standards",
        "Mentored 2 junior developers",
      ],
    },
    {
      company: "WebSolutions",
      position: "Junior Frontend Developer",
      period: "2016 - 2017",
      description:
        "Started my professional journey building responsive websites and learning modern web development practices. Worked on various projects under senior developer supervision.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      achievements: [
        "Built 10+ responsive websites",
        "Learned modern development workflows",
        "Contributed to team projects",
      ],
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
      highlights: [
        "Research Assistant",
        "Teaching Assistant",
        "Published 3 papers",
      ],
      type: "Graduate",
      field: "Computer Science",
      location: "Stanford, CA",
      achievements: [
        "Summa Cum Laude",
        "Dean's Fellowship",
        "Best Thesis Award",
      ],
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Arts in Design",
      period: "2012 - 2016",
      description:
        "Focused on graphic design, user experience, and digital media. Completed honors thesis on interactive design.",
      gpa: "3.8/4.0",
      highlights: [
        "Dean's List",
        "Design Award Winner",
        "Student Council President",
      ],
      type: "Undergraduate",
      field: "Design",
      location: "Berkeley, CA",
      achievements: [
        "Magna Cum Laude",
        "Design Excellence Award",
        "Leadership Award",
      ],
    },
    {
      institution: "MIT OpenCourseWare",
      degree: "Self-Directed Learning",
      period: "2015 - Present",
      description:
        "Continuous learning through online courses in advanced computer science, machine learning, and emerging technologies.",
      gpa: "N/A",
      highlights: [
        "Completed 20+ courses",
        "Specialized in AI/ML",
        "Modern Web Technologies",
      ],
      type: "Online",
      field: "Computer Science",
      location: "Online",
      achievements: [
        "Machine Learning Certificate",
        "Web Development Specialization",
        "AI Fundamentals",
      ],
    },
  ];

  const stats = [
    { number: "150+", label: "Blog Posts" },
    { number: "25K+", label: "Readers" },
    { number: "500+", label: "Comments" },
    { number: "4.8", label: "Average Rating" },
  ];

  const experienceStats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Technologies Used" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  // All blog posts data for About Me section
  const allBlogPosts = [
    {
      id: "1",
      title: "UX review presentations",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: image1,
      category: "Design",
      categories: ["design", "research", "presentation"],
    },
    {
      id: "2",
      title: "Migrating to Linear 101",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      image: image2,
      category: "Design",
      categories: ["design", "research"],
    },
    {
      id: "3",
      title: "Building your API Stack",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      image: image3,
      category: "Development",
      categories: ["design", "research"],
    },
    {
      id: "4",
      title: "Grid system for better Design User Interface",
      author: "Olivia Rhye",
      date: "18 Jan 2024",
      description:
        "A grid system is a design tool used to arrange content on a webpage using vertical and horizontal lines. It helps create consistent layouts and makes websites more visually appealing and easier to navigate.",
      image: image1,
      category: "Design",
      categories: ["design", "interface"],
    },
    {
      id: "5",
      title: "Bill Walsh leadership lessons of finance and business",
      author: "Alec Whitten",
      date: "20 Jan 2024",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: image2,
      category: "Leadership",
      categories: ["leadership", "management"],
    },
    {
      id: "6",
      title: "PM mental models for product managers",
      author: "Demi Wilkinson",
      date: "19 Jan 2024",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: image3,
      category: "Product",
      categories: ["product", "research", "frameworks"],
    },
    {
      id: "7",
      title: "What is Wireframing in the tech industry?",
      author: "Candice Wu",
      date: "18 Jan 2024",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: image1,
      category: "Design",
      categories: ["design", "research"],
    },
    {
      id: "8",
      title: "How collaboration makes us better designers",
      author: "Natali Craig",
      date: "17 Jan 2024",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: image2,
      category: "Design",
      categories: ["design", "research"],
    },
    {
      id: "9",
      title: "Our top 10 Javascript frameworks to use in 2025",
      author: "Drew Cano",
      date: "16 Jan 2024",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: image3,
      category: "Development",
      categories: ["development", "tools", "saas"],
    },
    {
      id: "10",
      title: "Podcast: Creating a better CX Community",
      author: "Orlando Diggs",
      date: "15 Jan 2024",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: image1,
      category: "Community",
      categories: ["community", "podcast"],
    },
  ];

  const featuredProjects = [
    {
      id: "1",
      title: "UX review presentations",
      image: image1,
      category: "Design",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: "2",
      title: "Migrating to Linear 101",
      image: image2,
      category: "Development",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking.",
    },
    {
      id: "3",
      title: "Building your API Stack",
      image: image3,
      category: "Backend",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    },
  ];

  // Experience projects data for Experience section
  const experienceProjects = [
    {
      id: "1",
      title:
        "How to participate in volunteering activities in the New Zealand Islands",
      image: image13,
      category: "Volunteering",
      description:
        "A comprehensive full-stack web application that demonstrates advanced development ...",
    },
    {
      id: "2",
      title: "Mobile App Development for E-commerce Platform",
      image: image11,
      category: "Mobile Development",
      description:
        "A cross-platform mobile application built with React Native that provides a seamless ...",
    },
    {
      id: "3",
      title: "AI-Powered Analytics Dashboard",
      image: image12,
      category: "Data Science",
      description:
        "An intelligent analytics platform that uses machine learning algorithms to provide real-time ...",
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
                <div className="about-hero-badge">
                  <span className="badge-text">
                    Available for new opportunities
                  </span>
                </div>
                <h1 className="about-hero-title">
                  Hi, I'm <span className="highlight">John Doe</span>
                </h1>
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
                <div className="about-hero-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="hero-stat">
                      <div className="stat-content">
                        <div className="stat-number">{stat.number}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-hero-image">
                <div className="about-image-container">
                  <div className="about-image-background"></div>
                  <img
                    src={imagePerson}
                    alt="John Doe"
                    className="about-profile-image"
                  />
                  <div className="about-image-decoration">
                    <div className="decoration-circle circle-1"></div>
                    <div className="decoration-circle circle-2"></div>
                    <div className="decoration-circle circle-3"></div>
                  </div>
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
                <div className="about-me-independent-grid">
                  <div className="about-me-independent-main">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-me-independent-text">
                      <p className="about-me-independent-paragraph">
                        I'm a passionate designer and developer with over 8
                        years of experience creating digital experiences that
                        matter. I believe in the power of thoughtful design to
                        solve complex problems and create meaningful connections
                        between people and technology.
                      </p>
                      <p className="about-me-independent-paragraph">
                        My journey in design started with a curiosity about how
                        things work and evolved into a deep appreciation for the
                        intersection of aesthetics, functionality, and user
                        experience. Today, I specialize in building scalable web
                        applications that not only look great but also provide
                        exceptional user experiences.
                      </p>
                      <p className="about-me-independent-paragraph">
                        When I'm not designing or coding, you can find me
                        exploring new technologies, sharing knowledge with the
                        community, or enjoying a good cup of coffee while
                        reading about the latest design trends. I'm always eager
                        to learn new skills and take on challenging projects
                        that push the boundaries of what's possible.
                      </p>
                    </div>
                    <div className="about-me-independent-features">
                      <div className="about-me-independent-feature-item">
                        <div className="about-me-independent-feature-content">
                          <h4 className="about-me-independent-feature-title">
                            Problem Solver
                          </h4>
                          <p className="about-me-independent-feature-description">
                            I approach every project with a focus on solving
                            real user problems
                          </p>
                        </div>
                      </div>
                      <div className="about-me-independent-feature-item">
                        <div className="about-me-independent-feature-content">
                          <h4 className="about-me-independent-feature-title">
                            Fast Learner
                          </h4>
                          <p className="about-me-independent-feature-description">
                            Quickly adapt to new technologies and industry
                            trends
                          </p>
                        </div>
                      </div>
                      <div className="about-me-independent-feature-item">
                        <div className="about-me-independent-feature-content">
                          <h4 className="about-me-independent-feature-title">
                            Team Player
                          </h4>
                          <p className="about-me-independent-feature-description">
                            Collaborate effectively with designers, developers,
                            and stakeholders
                          </p>
                        </div>
                      </div>
                      <div className="about-me-independent-feature-item">
                        <div className="about-me-independent-feature-content">
                          <h4 className="about-me-independent-feature-title">
                            Creative Thinker
                          </h4>
                          <p className="about-me-independent-feature-description">
                            Bring innovative solutions and creative approaches
                            to every project
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-me-independent-sidebar">
                    <div className="about-me-independent-stats">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="about-me-independent-stat-card"
                        >
                          <div className="about-me-independent-stat-number">
                            {stat.number}
                          </div>
                          <div className="about-me-independent-stat-label">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="about-me-independent-blogs">
                      <h3 className="about-me-independent-blogs-title">
                        Best Blogs
                      </h3>
                      <div className="about-me-independent-blogs-grid">
                        {allBlogPosts.slice(0, 3).map((blog) => (
                          <div
                            key={blog.id}
                            className="about-me-independent-blog-card"
                          >
                            <div className="about-me-independent-blog-image">
                              <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="about-me-independent-blog-content">
                              <span className="about-me-independent-blog-category">
                                {blog.category}
                              </span>
                              <h4 className="about-me-independent-blog-title">
                                {blog.title}
                              </h4>
                              <p className="about-me-independent-blog-description">
                                {blog.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeTab === "skills" && (
              <div className="about-content-section">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="skills-content">
                  <div className="skills-intro">
                    <p className="skills-description">
                      My expertise spans across multiple domains, from frontend
                      development to cloud infrastructure. I focus on creating
                      efficient, scalable solutions that deliver exceptional
                      user experiences.
                    </p>
                  </div>
                  <div className="skills-categories">
                    {[
                      "Frontend",
                      "Backend",
                      "Design",
                      "Database",
                      "Cloud",
                      "DevOps",
                    ].map((category) => (
                      <div key={category} className="skills-category-section">
                        <h3 className="skills-category-title">{category}</h3>
                        <div className="skills-list">
                          {skills
                            .filter((skill) => skill.category === category)
                            .map((skill) => (
                              <div key={skill.name} className="skill-row">
                                <div className="skill-info">
                                  <h4 className="skill-name">{skill.name}</h4>
                                  <p className="skill-description">
                                    {skill.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeTab === "experience" && (
              <div className="about-content-section">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-layout">
                  <div className="experience-main">
                    <div className="experience-features">
                      {experience.map((job, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-content">
                            <h4 className="feature-title">{job.position}</h4>
                            <p className="feature-description">
                              {job.company} • {job.period}
                            </p>
                            <p className="feature-description">
                              {job.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="experience-sidebar">
                    <div className="experience-stats">
                      {experienceStats.map((stat, index) => (
                        <div key={index} className="experience-stat-card">
                          <div className="experience-stat-number">
                            {stat.number}
                          </div>
                          <div className="experience-stat-label">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="experience-featured-projects">
                      <h3 className="experience-featured-projects-title">
                        Featured Projects
                      </h3>
                      <div className="experience-featured-projects-grid">
                        {experienceProjects.map((project) => (
                          <div
                            key={project.id}
                            className="experience-featured-project-card"
                          >
                            <div className="experience-project-image">
                              <img src={project.image} alt={project.title} />
                            </div>
                            <div className="experience-project-content">
                              <span className="experience-project-category">
                                {project.category}
                              </span>
                              <h4 className="experience-project-title">
                                {project.title}
                              </h4>
                              <p className="experience-project-description">
                                {project.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeTab === "education" && (
              <div className="about-content-section">
                <h2 className="section-title">Education</h2>
                <div className="education-layout">
                  <div className="education-main">
                    <div className="education-features">
                      <div className="education-timeline">
                        {education.map((edu, index) => (
                          <div key={index} className="education-timeline-item">
                            <div className="timeline-marker">
                              <div className="marker-dot"></div>
                              <div className="marker-line"></div>
                            </div>
                            <div className="timeline-content">
                              <div className="education-degree">
                                <h3 className="degree-title">{edu.degree}</h3>
                                <div className="degree-meta">
                                  <span className="institution">
                                    {edu.institution}
                                  </span>
                                  <span className="period">{edu.period}</span>
                                </div>
                                <div className="degree-gpa">
                                  <span className="gpa-label">GPA</span>
                                  <span className="gpa-value">{edu.gpa}</span>
                                </div>
                              </div>
                              <div className="education-details">
                                <p className="degree-description">
                                  {edu.description}
                                </p>
                                <div className="field-info">
                                  <span className="field-label">Field</span>
                                  <span className="field-value">
                                    {edu.field}
                                  </span>
                                </div>
                              </div>
                              <div className="education-achievements">
                                {edu.achievements.map((achievement, idx) => (
                                  <div key={idx} className="achievement-tag">
                                    {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="education-sidebar">
                    <div className="education-stats">
                      <div className="education-stat-card">
                        <div className="education-stat-number">3</div>
                        <div className="education-stat-label">
                          Degrees & Certifications
                        </div>
                      </div>
                      <div className="education-stat-card">
                        <div className="education-stat-number">8+</div>
                        <div className="education-stat-label">
                          Years of Learning
                        </div>
                      </div>
                      <div className="education-stat-card">
                        <div className="education-stat-number">20+</div>
                        <div className="education-stat-label">
                          Online Courses
                        </div>
                      </div>
                      <div className="education-stat-card">
                        <div className="education-stat-number">3.85</div>
                        <div className="education-stat-label">Average GPA</div>
                      </div>
                    </div>
                    <div className="education-certifications">
                      <h3 className="education-certifications-title">
                        Certifications
                      </h3>
                      <div className="education-certifications-grid">
                        {education.map((edu) => (
                          <div
                            key={edu.institution}
                            className="education-certification-card"
                          >
                            <div className="certification-content">
                              <span className="certification-type">
                                {edu.type}
                              </span>
                              <h4 className="certification-title">
                                {edu.degree}
                              </h4>
                              <p className="certification-institution">
                                {edu.institution}
                              </p>
                              <p className="certification-period">
                                {edu.period}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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
