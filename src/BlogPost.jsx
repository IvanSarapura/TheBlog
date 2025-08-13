import { useState, useEffect } from "react";
import "./App.css";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon-dark.svg";
import menuIcon from "./assets/menu.svg";
import arrowIcon from "./assets/Arrow-up-right.svg";
import arrowLeftIcon from "./assets/arrow-left.svg";

function BlogPost({ darkMode, setDarkMode, setCurrentPage, postId }) {
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
    heroImage:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop",
    content: `
      <p>Grid systems are the backbone of great user interface design. They provide structure, consistency, and visual harmony that makes digital products not only beautiful but also functional and intuitive to use. In this comprehensive guide, we'll explore how to implement effective grid systems that will elevate your UI design to the next level.</p>

      <h2>What is a Grid System?</h2>
      
      <p>A grid system is a structure comprising a series of horizontal and vertical lines used to arrange content. It's the invisible foundation that guides the placement of elements on a page, creating order from chaos and ensuring consistency across different screens and components.</p>

      <p>Think of a grid system as the skeleton of your design—it's not always visible to the end user, but it provides the essential structure that makes everything else work harmoniously together.</p>

      <h2>The Anatomy of a Grid System</h2>

      <p>Understanding the components of a grid system is crucial for implementing it effectively:</p>

      <h3>Columns</h3>
      <p>Columns are the vertical sections that divide your layout. Most modern grid systems use 12 columns, but this can vary based on your design needs. The beauty of a 12-column system is its flexibility—you can create layouts with 1, 2, 3, 4, 6, or 12 columns by combining or dividing these base units.</p>

      <h3>Gutters</h3>
      <p>Gutters are the spaces between columns. They provide breathing room and prevent elements from feeling cramped. Consistent gutter widths are essential for maintaining visual rhythm throughout your design.</p>

      <h3>Margins</h3>
      <p>Margins are the spaces on the outer edges of your grid. They frame your content and ensure it doesn't touch the edges of the screen, providing a comfortable reading experience.</p>

      <blockquote>
        "Good design is obvious. Great design is transparent. A well-implemented grid system is the difference between the two."
      </blockquote>

      <h2>Benefits of Using Grid Systems</h2>

      <h3>Consistency</h3>
      <p>Grid systems ensure that elements align properly across different pages and components. This consistency creates a cohesive user experience and makes your product feel polished and professional.</p>

      <h3>Scalability</h3>
      <p>When you have a solid grid foundation, adding new components or pages becomes much easier. The grid provides a framework that new elements can fit into naturally.</p>

      <h3>Responsive Design</h3>
      <p>Modern grid systems are built with responsiveness in mind. They adapt seamlessly to different screen sizes, ensuring your design looks great on everything from mobile phones to large desktop monitors.</p>

      <h3>Faster Development</h3>
      <p>With a well-defined grid system, developers can work more efficiently. They don't need to guess spacing or alignment—the grid provides clear guidelines for implementation.</p>

      <h2>Implementing Grid Systems in Practice</h2>

      <h3>Choose Your Base Unit</h3>
      <p>Start by defining a base unit for your grid. This could be 8px, 16px, or any value that works for your design. This base unit should be used consistently throughout your system for spacing, sizing, and alignment.</p>

      <h3>Define Breakpoints</h3>
      <p>Establish clear breakpoints for different device sizes. Common breakpoints include:</p>
      <ul>
        <li>Mobile: 320px - 768px</li>
        <li>Tablet: 768px - 1024px</li>
        <li>Desktop: 1024px and above</li>
      </ul>

      <h3>Create Component Guidelines</h3>
      <p>Document how different components should behave within your grid system. This includes how they span across columns, how they stack on mobile devices, and how spacing should be handled.</p>

      <h2>Common Grid System Mistakes to Avoid</h2>

      <h3>Over-complicating the System</h3>
      <p>Keep your grid system simple and intuitive. If team members can't understand it quickly, it's probably too complex.</p>

      <h3>Ignoring Content Hierarchy</h3>
      <p>Your grid should support content hierarchy, not fight against it. Make sure important content gets appropriate visual weight and positioning within the grid.</p>

      <h3>Forgetting About Mobile</h3>
      <p>Always design your grid system with mobile-first principles. It's easier to scale up from mobile than to scale down from desktop.</p>

      <h2>Tools and Frameworks</h2>

      <p>There are many excellent tools and frameworks available for implementing grid systems:</p>

      <ul>
        <li><strong>CSS Grid:</strong> Native CSS solution with powerful layout capabilities</li>
        <li><strong>Flexbox:</strong> Great for one-dimensional layouts and component-level grids</li>
        <li><strong>Bootstrap:</strong> Popular framework with a robust 12-column grid system</li>
        <li><strong>CSS Grid Generator:</strong> Online tools for quickly generating grid CSS</li>
      </ul>

      <h2>Conclusion</h2>

      <p>A well-implemented grid system is one of the most powerful tools in a designer's toolkit. It provides the foundation for creating consistent, scalable, and beautiful user interfaces that work across all devices and screen sizes.</p>

      <p>Remember, the best grid system is one that serves your content and users, not the other way around. Start simple, iterate based on real usage, and always keep the user experience at the center of your decisions.</p>

      <p>By mastering grid systems, you'll not only create better designs but also improve collaboration with developers and speed up your entire design process. The investment in learning and implementing proper grid systems pays dividends in every project you work on.</p>
    `,
    relatedPosts: [
      {
        id: "2",
        title: "Designing for Accessibility: A Comprehensive Guide",
        excerpt:
          "Learn how to create inclusive digital experiences that work for everyone.",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
        date: "March 10, 2024",
        readTime: "6 min read",
      },
      {
        id: "3",
        title: "The Psychology of Color in Web Design",
        excerpt:
          "Understanding how color choices impact user behavior and perception.",
        image:
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=250&fit=crop",
        date: "March 5, 2024",
        readTime: "7 min read",
      },
      {
        id: "4",
        title: "Modern Typography in Digital Design",
        excerpt:
          "How to choose and implement typography that enhances user experience.",
        image:
          "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
        date: "February 28, 2024",
        readTime: "8 min read",
      },
    ],
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
                  className={`nav-link ${true ? "active" : ""}`}
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
                    className={`mobile-nav-link ${true ? "active" : ""}`}
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
        {/* Back Button */}
        <section className="blog-post-back page-grid">
          <div className="container">
            <button
              className="back-button"
              onClick={() => setCurrentPage("blog")}
            >
              <img src={arrowLeftIcon} alt="Back" className="back-icon" />
              Back to Blog
            </button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="blog-post-hero page-grid">
          <div className="container">
            <div className="blog-post-hero-content">
              <div className="blog-post-meta">
                <span className="blog-post-category">{blogPost.category}</span>
                <span className="blog-post-date">{blogPost.date}</span>
                <span className="blog-post-separator">•</span>
                <span className="blog-post-read-time">{blogPost.readTime}</span>
              </div>
              <h1 className="blog-post-title">{blogPost.title}</h1>
              <p className="blog-post-subtitle">{blogPost.subtitle}</p>
              <div className="blog-post-author">
                <div className="author-info">
                  <span className="author-name">By {blogPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="blog-post-content page-grid">
          <div className="container">
            <div className="blog-post-layout">
              <article className="blog-post-main">
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
              </article>

              {/* Sidebar */}
              <aside className="blog-post-sidebar">
                <div className="sidebar-section">
                  <h3 className="sidebar-title">Share this post</h3>
                  <div className="share-buttons">
                    <button className="share-button twitter">Twitter</button>
                    <button className="share-button linkedin">LinkedIn</button>
                    <button className="share-button facebook">Facebook</button>
                  </div>
                </div>

                <div className="sidebar-section">
                  <h3 className="sidebar-title">Related Posts</h3>
                  <div className="related-posts-list">
                    {blogPost.relatedPosts.map((post) => (
                      <div key={post.id} className="related-post-item">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="related-post-image"
                        />
                        <div className="related-post-content">
                          <h4 className="related-post-title">{post.title}</h4>
                          <p className="related-post-excerpt">{post.excerpt}</p>
                          <div className="related-post-meta">
                            <span className="related-post-date">
                              {post.date}
                            </span>
                            <span className="related-post-read-time">
                              {post.readTime}
                            </span>
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

export default BlogPost;
