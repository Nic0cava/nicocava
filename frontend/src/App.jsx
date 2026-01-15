import { useRef, useState } from "react";
import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

function ProjectCarousel({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const total = images.length;
  const current = images[index];

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="project-card-media">
      <div className="project-carousel">
        <div className="project-carousel-viewport">
          <img
            className="project-carousel-img"
            src={current.src}
            alt={current.alt}
          />
        </div>
        {total > 1 && (
          <>
            <div className="project-carousel-controls">
              <button
                type="button"
                className="project-carousel-btn"
                onClick={goPrev}
                aria-label="Previous screenshot"
              >
                {"<"}
              </button>
              <button
                type="button"
                className="project-carousel-btn"
                onClick={goNext}
                aria-label="Next screenshot"
              >
                {">"}
              </button>
            </div>
            <div className="project-carousel-dots">
              {images.map((image, i) => (
                <button
                  key={`${image.src}-dot-${i}`}
                  type="button"
                  className={`project-carousel-dot ${
                    i === index ? "is-active" : ""
                  }`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function App({ username }) {
  const displayName = username || "Nico";
  const [copiedKey, setCopiedKey] = useState("");
  const copyTimeoutRef = useRef(null);

  const copyToClipboard = (value, key) => {
    if (!value) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value);
      setCopiedKey(key);
    } else {
      const fallback = document.createElement("textarea");
      fallback.value = value;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "absolute";
      fallback.style.left = "-9999px";
      document.body.appendChild(fallback);
      fallback.select();
      document.execCommand("copy");
      document.body.removeChild(fallback);
      setCopiedKey(key);
    }

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => {
      setCopiedKey("");
    }, 1800);
  };

  return (
    <div>
      <Silk
        speed={5}
        scale={1}
        color="#006a50"
        noiseIntensity={1.5}
        rotation={0}
      />

      {/* HERO SECTION */}
      <main className="hero">
        <div className="hero-inner">
          {/* LEFT: Profile Card */}
          <div className="hero-left">
            <ProfileCard
              name={displayName}
              title="Data Science & AI Undergraduate"
              handle="the.nico.cava"
              status="Building data-driven tools, automation & intelligent systems"
              contactText="Contact Me"
              avatarUrl="/static/images/nico_nobg1.png"
              miniAvatarUrl="/static/images/nico_nobg1.png"
              behindGlowEnabled={true}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "#contact";
                }
              }}
            />
          </div>

          {/* RIGHT: Text + socials */}
          <div className="hero-right">
            <div className="hero-text">
              <h1 className="hero-title">Hey, I'm Nico 👋</h1>
              <p className="hero-subtitle">
                A Data Science & AI undergraduate and software engineer focused on backend systems, automation, and intelligent applications using Python, AI, and other data-driven tools.
              </p>
              <p className="hero-body">
                I’m currently focused on shipping production-quality projects, learning how real systems scale, and building a strong foundation in data-driven development, automation, and applied AI.
              </p>

              <div className="hero-socials">
                <a
                  href="https://github.com/Nic0cava"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolascava01/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a href="mailto:nmcava01@gmail.com" aria-label="Email">
                  <FiMail />
                </a>
                <a
                  href="https://www.instagram.com/the.nico.cava"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PROJECTS SECTION WITH SCROLL STACK */}
      <section id="projects" className="projects-section">
        <div className="projects-inner">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A growing collection of projects exploring software engineering, data-driven systems, and applied AI across real-world use cases.
          </p>

          <ScrollStack
            baseScale={0.92}
            maxExtraScale={0.08}
            maxTranslateY={20}
            rotationAmount={0}
            focusWindow={1.15}
          >
            <ScrollStackItem>
              <div className="project-card">
                <h3 className="project-card-title">Funky Buddha Merch Inventory App</h3>
                <p className="project-card-summary">
                  A production inventory management system actively used daily by the Funky Buddha Brewery team to track stock by location, calculate inventory value, and export monthly data for reporting and analysis.
                </p>
                <ProjectCarousel
                  images={[
                    {
                      src: "/static/images/fb_merch_example1.png",
                      alt: "Funky Buddha Merch Inventory App screenshot",
                    },
                    {
                      src: "/static/images/fb_merch_example2.png",
                      alt: "Funky Buddha Merch Inventory App screenshot",
                    },
                  ]}
                />
                <p className="project-card-tech">
                  Stack: Python · PostgreSQL · Flask · Linux · HTML/CSS · Deployed on Hostinger VPS
                </p>
                <div className="project-card-links">
                  <a
                    href="https://github.com/Nic0cava/FB_Merch.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/FB_Merch.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / README
                  </a>
                </div>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="project-card">
                <h3 className="project-card-title">Coffee Shop Simulator</h3>
                <p className="project-card-summary">
                  A backend-focused Flask application simulating orders and inventory, built to explore application state, data flow, and CRUD-style logic—all wrapped in a fun game featuring my own custom pixel art.
                </p>
                <ProjectCarousel
                  images={[
                    {
                      src: "/static/images/Coffee_Shop_Screenshot.png",
                      alt: "Coffee Shop Simulator screenshot",
                    },
                  ]}
                />
                <p className="project-card-tech">
                  Stack: Python · Flask · Jinja · HTML/CSS · Deployed on Render
                </p>
                <div className="project-card-links">
                  <a
                    href="https://flask-coffee-shop-app-game.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/Flask-Coffee-Shop-App-Game.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / README
                  </a>
                </div>
                <p className="project-card-note">
                  Note: Render apps may take 30–60s to wake.
                </p>
              </div>
            </ScrollStackItem>

            <ScrollStackItem>
              <div className="project-card">
                <h3 className="project-card-title">Tappy Plane</h3>
                <p className="project-card-summary">
                  A Flappy Bird–style game project built in Godot featuring my own custom pixel art and scoring logic, demonstrating event-driven programming and system state management.
                </p>
                <ProjectCarousel
                  images={[
                    {
                      src: "/static/images/tappy_plane_ss1.png",
                      alt: "Tappy Plane screenshot",
                    },
                    {
                      src: "/static/images/tappy_plane_ss2.png",
                      alt: "Tappy Plane screenshot",
                    },
                  ]}
                />
                <p className="project-card-tech">
                  Stack: Godot · GDScript · Pixel Art · AI Sound Assets · Deployed on GitHub Pages
                </p>
                <div className="project-card-links">
                  <a
                    href="https://nic0cava.github.io/Tappy_Plane/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/Tappy_Plane.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / README
                  </a>
                </div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Open to opportunities and collaborations.
          </p>
          <p className="contact-note">Email is the best way to reach me.</p>
          <div className="contact-details">
            <a href="sms:+17548028348" className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+1 (754) 802-8348</span>
              <button
                type="button"
                className="contact-copy"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  copyToClipboard("+17548028348", "phone");
                }}
                aria-label="Copy phone number"
              >
                {copiedKey === "phone" ? <FiCheck /> : <FiCopy />}
              </button>
            </a>
            <a href="mailto:nmcava01@gmail.com" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">nmcava01@gmail.com</span>
              <button
                type="button"
                className="contact-copy"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  copyToClipboard("nmcava01@gmail.com", "email");
                }}
                aria-label="Copy email"
              >
                {copiedKey === "email" ? <FiCheck /> : <FiCopy />}
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolascava01/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/nicolascava01</span>
              <button
                type="button"
                className="contact-copy"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  copyToClipboard(
                    "https://www.linkedin.com/in/nicolascava01/",
                    "linkedin"
                  );
                }}
                aria-label="Copy LinkedIn profile link"
              >
                {copiedKey === "linkedin" ? <FiCheck /> : <FiCopy />}
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
