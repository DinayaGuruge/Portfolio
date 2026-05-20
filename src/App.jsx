import { useState, useEffect } from "react";
import heroImage from "./assets/dinaya.jpeg";
import cvPdf from "./assets/Dinaya_GurugeCV.pdf";
import "./App.css";

function App() {
  const [activeNav, setActiveNav] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">DG</div>
          <ul className="nav-menu">
            <li>
              <button
                className={activeNav === "home" ? "active" : ""}
                onClick={() => scrollToSection("home")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activeNav === "experience" ? "active" : ""}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={activeNav === "projects" ? "active" : ""}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={activeNav === "skills" ? "active" : ""}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={activeNav === "contact" ? "active" : ""}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div
            className="profile-image-hero"
            role="img"
            aria-label="Dinaya Guruge"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <h1>Dinaya Guruge</h1>
          <p className="subtitle">Full Stack Developer & CS Undergraduate</p>
          <p className="description">
            I build real-world software solutions that turn ideas into polished,
            user-friendly experiences. I enjoy creating intuitive interfaces,
            solving meaningful problems, and contributing to practical digital
            products.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </button>
            <a
              className="btn btn-secondary"
              href="https://github.com/DinayaGuruge"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a className="btn btn-cv" href={cvPdf} download>
              Download CV
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/dinaya-guruge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/DinayaGuruge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              ◇
            </a>
            <a href="mailto:dinayasajali03@gmail.com" aria-label="Email">
              ✉
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="content-section">
        <div className="section-container">
          <h2>About</h2>
          <div className="text-panel centered-copy">
            <p>
              A dedicated Computer Science undergraduate at the University of
              Westminster with a year of industry experience as a Software
              Developer Intern. Passionate about full-stack development and
              building real-world software solutions.
            </p>
            <p>
              As a strong team player with a problem-solving mindset, I'm
              committed to continuous learning and professional growth. I
              specialize in developing scalable applications using modern
              technologies and best practices.
            </p>
            <p>
              When I'm not writing code, I'm researching new technologies or
              participating in hackathons. I'm always open to collaborating with
              passionate individuals and turning ideas into practical products.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="content-section">
        <div className="section-container">
          <h2>Experience</h2>
          <div className="experience-card centered-card">
            <h3>Software Developer - Intern</h3>
            <p className="company">Sensus Hub Pvt Ltd</p>
            <p className="date">June 2025 - June 2026</p>
            <p className="description-text">
              Led end-to-end development of multiple POS systems and ERP
              modules. Implemented comprehensive solutions for stock management,
              invoicing, and admin dashboards. Collaborated with
              cross-functional teams to deliver scalable applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section">
        <div className="section-container">
          <h2>Projects</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3>CoastalCanopy.lk - Mangrove Monitoring</h3>
              <p>
                Web application for monitoring and restoring mangroves in Sri
                Lanka with AI-based analysis and community reporting.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Cloud</span>
                <span>Machine Learning</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Laundry POS System</h3>
              <p>
                Full-stack point of sale system with cashier panel, invoice
                generation, transaction handling, and admin dashboard.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Restaurant POS System</h3>
              <p>
                Complete POS solution with menu management, customer management,
                sales reporting, and admin dashboard.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>Prisma</span>
              </div>
            </div>

            <div className="project-card">
              <h3>E-Commerce System</h3>
              <p>
                Full e-commerce platform with product management, categories,
                coupon handling, and order processing.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Stripe</span>
              </div>
            </div>

            <div className="project-card">
              <h3>College Admin Portals</h3>
              <p>
                Admin panel backends for multiple college portals including
                notice, gallery, and event management systems.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Personal Finance Tracker</h3>
              <p>
                Desktop application for tracking personal finances with
                categorized expenses and visual analytics.
              </p>
              <div className="tech-tags">
                <span>Python</span>
                <span>Tkinter</span>
                <span>GUI</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Estate Agent App</h3>
              <p>
                Responsive real estate listing website with modern design and
                media queries for all devices.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JSON</span>
              </div>
            </div>

            <div className="project-card">
              <h3>Student Activity Management</h3>
              <p>
                Desktop application for managing student activities and records
                using object-oriented programming.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>JavaFX</span>
                <span>OOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <div className="section-container">
          <h2>Skills</h2>

          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML/CSS</span>
              <span>Figma</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>.NET</span>
              <span>C#</span>
              <span>PHP</span>
              <span>Java</span>
              <span>Python</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>SQL</span>
              <span>Prisma ORM</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Tools & Others</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>WordPress</span>
              <span>Elementor</span>
              <span>Figma</span>
              <span>RESTful APIs</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span>Time Management</span>
              <span>Teamwork</span>
              <span>Communication</span>
              <span>Adaptability</span>
              <span>Creativity</span>
              <span>Problem-Solving</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section">
        <div className="section-container">
          <h2>Get in Touch</h2>
          <div className="text-panel centered-copy contact-panel">
            <p>
              I'm always open to new opportunities and collaborations. Feel free
              to reach out if you have any questions or would like to work
              together!
            </p>

            <div className="contact-info centered-contact">
              <a
                className="contact-item"
                href="mailto:dinayasajali03@gmail.com"
              >
                <span className="icon">✉</span>
                <span>dinayasajali03@gmail.com</span>
              </a>
              <a className="contact-item" href="tel:+94778711370">
                <span className="icon">📱</span>
                <span>+94 77 871 1370</span>
              </a>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Dehiwala, Colombo, Sri Lanka</span>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href="https://www.linkedin.com/in/dinaya-guruge"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/DinayaGuruge"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="mailto:dinayasajali03@gmail.com">Gmail</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Dinaya Guruge. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
