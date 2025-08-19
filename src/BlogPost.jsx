import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import arrowIcon from "./assets/Arrow-up-right.svg";
import arrowLeftIcon from "./assets/arrow-left.svg";
import heroImage from "./assets/Image-4-01.png";
import contentImage1 from "./assets/Image-4-02.png";
import contentImage2 from "./assets/Image-4-03.png";
import contentImage3 from "./assets/Image-4-04.png";
import contentImage4 from "./assets/Image-4-05.png";
import contentImage5 from "./assets/Image-4-06.png";
import contentImage6 from "./assets/Image-4-07.png";
import contentImage7 from "./assets/Image-4-08.png";
import contentImage8 from "./assets/Image-4-09.png";
import contentImage9 from "./assets/Image-4-10.png";
// Import all blog post images
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

function BlogPost() {
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
  const params = useParams();
  const postId = params.postId || "1";
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

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

  // All blog posts data from the Blog page
  const allBlogPosts = [
    {
      id: "1",
      title: "UX review presentations",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: image1,
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
      categories: ["design", "research"],
    },
    {
      id: "4",
      title: "Grid system for better Design User Interface",
      author: "Olivia Rhye",
      date: "18 Jan 2024",
      description:
        "A grid system is a design tool used to arrange content on a webpage using vertical and horizontal lines. It helps create consistent layouts and makes websites more visually appealing and easier to navigate.",
      image: image4,
      categories: ["design", "interface"],
    },
    {
      id: "5",
      title: "Bill Walsh leadership lessons of finance and business",
      author: "Alec Whitten",
      date: "20 Jan 2024",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      image: image5,
      categories: ["leadership", "management"],
    },
    {
      id: "6",
      title: "PM mental models for product managers",
      author: "Demi Wilkinson",
      date: "19 Jan 2024",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      image: image6,
      categories: ["product", "research", "frameworks"],
    },
    {
      id: "7",
      title: "What is Wireframing in the tech industry?",
      author: "Candice Wu",
      date: "18 Jan 2024",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      image: image7,
      categories: ["design", "research"],
    },
    {
      id: "8",
      title: "How collaboration makes us better designers",
      author: "Natali Craig",
      date: "17 Jan 2024",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      image: image8,
      categories: ["design", "research"],
    },
    {
      id: "9",
      title: "Our top 10 Javascript frameworks to use in 2025",
      author: "Drew Cano",
      date: "16 Jan 2024",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      image: image9,
      categories: ["development", "tools", "saas"],
    },
    {
      id: "10",
      title: "Podcast: Creating a better CX Community",
      author: "Orlando Diggs",
      date: "15 Jan 2024",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      image: image10,
      categories: ["podcast", "customer-success"],
    },
  ];

  // Mock blog post data - Grid system for better Design User Interface
  const blogPost = {
    id: postId || "1",
    title: "Grid system for better Design User Interface",
    subtitle:
      "How to create consistent, scalable, and beautiful user interfaces using grid systems",
    author: "John Doe",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Design",
    tags: ["Grid System", "UI Design", "Layout", "Design System"],
    heroImage: heroImage,
    content: `
      <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>

      <p>If you've been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.</p> 

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage1} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.
        </figcaption>
      </figure>

      <p>There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.</p>

      <p>Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.</p>

      <p>Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.</p>

      <p>Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.</p>

      <h3>Breaking Down the Grid</h3>

      <p>Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.</p>

      <p><strong>Columns:</strong> Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.</p>

      <p><strong>Gutters:</strong> The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.</p>

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage2} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.
        </figcaption>
      </figure>

      <h3>Examples of Grids in Use</h3>

      <p><strong>Example 1: Hierarchical Grid</strong></p>

      <p>
        Our first example is from <a href="https://www.nytimes.com" target="_blank" rel="noopener noreferrer">The New York Times</a>. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.
      </p>

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage3} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
        </figcaption>
      </figure>

      <p><strong>Example 2: Column Grid</strong></p>

      <p>
        Our second example is from <a href="https://www.ritual.com" target="_blank" rel="noopener noreferrer">Ritual.com</a>, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.
      </p>
      
      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage4} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
        </figcaption>
      </figure>

      <p><strong>Example 3: Modular Grid</strong></p>

      <p>Our third example is from Behance, a design library. The site's design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.</p>

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage5} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
        </figcaption>
      </figure>
      
      <p><strong>Example 4: Breaking the Grid</strong></p>

      <p>
        Our last example is <a href="https://m2.material.io/design/material-studies/shrine.html#product-architecture" target="_blank" rel="noopener noreferrer">Shrine from Google's Material Studies</a>. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.
      </p>

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage6} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)
        </figcaption>
      </figure>

      <p><strong>Benefits of the Grid</strong></p>

      <p>Using a grid benefits both end users and the designers alike:</p>
     
      <ul>
        <li>Designers can quickly put together well-aligned interfaces.</li>
        <li>Users can easily scan predictable grid-based interfaces.</li>
        <li>A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.</li>
      </ul>

      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage7} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          At the mobile size, Behance's one-column grid (left) was reflowed into a four-column grid structure (right).
        </figcaption>
      </figure>

      <p>Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.</p>

      <h3>Choosing and Setting Up Your Grid</h3>

      <p>How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.</p>

      <p><strong>Choose the right grid for your needs.</strong> Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.</p>

      <p><strong>Spend time setting up your grid.</strong> Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.</p>
      
      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage8} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Easily set the number of columns, the gutter size, and margin size in Figma.
        </figcaption>
      </figure>
      
      <p><strong>Always place content within columns, not gutters.</strong> The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.</p>
      
      <figure style={{ margin: "2rem 0" }}>
        <img src=${contentImage9} alt="Grid system illustration" style={{ width: "100%" }} />
        <figcaption style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.875rem", color: "var(--color-secondary-text)", fontFamily: "Inter" }}>
          Content or elements should be placed within and across columns, not gutters.
        </figcaption>
      </figure>

      <p><strong>Consider using an 8px grid system.</strong> For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.</p>
      
      <h3>Conclusion</h3>

      <p>Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.</p>
      `,
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
        {/* Back Button */}
        <section className="blog-post-back page-grid">
          <div className="container">
            <Link to="/" className="back-button">
              <img src={arrowLeftIcon} alt="Back" className="back-icon" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Content Section */}
        <section className="blog-post-content page-grid">
          <div className="container">
            <div className="blog-post-layout">
              <article className="blog-post-main">
                {/* Hero Section */}
                <div className="blog-post-hero-content">
                  <div className="blog-post-meta">
                    <span className="blog-post-category">
                      {blogPost.category}
                    </span>
                    <span className="blog-post-date">{blogPost.date}</span>
                    <span className="blog-post-separator">•</span>
                    <span className="blog-post-read-time">
                      {blogPost.readTime}
                    </span>
                  </div>
                  <h1 className="blog-post-title">{blogPost.title}</h1>
                  <p className="blog-post-subtitle">{blogPost.subtitle}</p>
                  <div className="blog-post-author">
                    <div className="author-info">
                      <span className="author-name">By {blogPost.author}</span>
                    </div>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="blog-post-image-container">
                  <img
                    src={blogPost.heroImage}
                    alt={blogPost.title}
                    className="blog-post-hero-image"
                  />
                </div>

                <div
                  className="blog-post-body"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Tags */}
                <div className="blog-post-tags">
                  {blogPost.tags.map((tag) => (
                    <span key={tag} className="blog-post-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Share Section */}
                <div className="mobile-share-section">
                  <h3 className="sidebar-title">Share this post</h3>
                  <div className="share-buttons">
                    <button className="share-button twitter">
                      <span>Twitter</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="share-button linkedin">
                      <span>LinkedIn</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button className="share-button facebook">
                      <span>Facebook</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="blog-post-sidebar">
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Share this post</h3>
                  <div className="share-buttons">
                    <button className="share-button twitter">
                      <span>Twitter</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </button>
                    <button className="share-button linkedin">
                      <span>LinkedIn</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </button>
                    <button className="share-button facebook">
                      <span>Facebook</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3 className="sidebar-title">All blog posts</h3>
                  <div className="sidebar-blog-posts">
                    {allBlogPosts
                      .filter((post) => post.id !== "4")
                      .map((post) => (
                        <div
                          key={post.id}
                          className="blog-card sidebar-post-card clickable-card"
                          onClick={() => go(`/blog/${post.id}`)}
                        >
                          <div className="card-image">
                            <img src={post.image} alt={post.title} />
                          </div>
                          <div className="card-content">
                            <div className="card-header">
                              <h3 className="card-title">
                                {post.title}
                                <img
                                  src={arrowIcon}
                                  alt="Read more"
                                  className="arrow-icon"
                                />
                              </h3>
                            </div>
                            <div className="card-meta">
                              <span className="author">{post.author}</span>
                              <span className="date">{post.date}</span>
                            </div>
                            <p className="card-description">
                              {post.description}
                            </p>
                            <div className="card-categories">
                              {post.categories.map((category) => (
                                <span
                                  key={category}
                                  className={`category-badge ${category}`}
                                >
                                  {category.toUpperCase()}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </aside>
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

export default BlogPost;
