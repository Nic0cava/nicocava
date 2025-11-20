import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

function App({ username }) {
  const displayName = username || "Nico";

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
              title="Junior Full-Stack Developer & Creative"
              handle="the.nico.cava"
              status="Building tools, games & experiments"
              contactText="Contact Me"
              avatarUrl="/static/images/nico_nobg1.png"
              miniAvatarUrl="/static/images/nico_nobg1.png"
              behindGlowEnabled={true}
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
              onContactClick={() => {
                window.location.href = "mailto:nmcava01@gmail.com";
              }}
            />
          </div>

          {/* RIGHT: Text + socials */}
          <div className="hero-right">
            <div className="hero-text">
              <h1 className="hero-title">Hey, I'm Nico 👋</h1>
              <p className="hero-subtitle">
                Full-stack dev, futures trader, and creative who loves building
                tools, games, and experimental projects with Python, Flask, React,
                and AI.
              </p>
              <p className="hero-body">
                Right now I’m focused on shipping polished portfolio projects,
                automating workflows, and crafting a personal brand around
                Axolynth — blending code, trading, and synthwave aesthetics.
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
            A mix of real-world tools, games, and experiments I’ve built while
            learning Flask, React, and automation.
          </p>

          <ScrollStack   baseScale={0.92}
  maxExtraScale={0.08}
  maxTranslateY={20}
  rotationAmount={0}
  >
            <ScrollStackItem>
              <div className="project-card">
                <h3 className="project-card-title">FB Merch Inventory App</h3>
                <p className="project-card-summary">
                  Inventory system for Funky Buddha Brewery’s merch department,
                  built to cut down backroom trips and save staff time.
                </p>
                <p className="project-card-tech">
                  Stack: Flask · PostgreSQL · Bootstrap · VPS
                </p>
                <div className="project-card-links">
                  <a
                    href="https://your-live-fb-merch-url.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/YOUR_FB_MERCH_REPO"
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
                  A small Flask app simulating drink orders and inventory – used
                  as a playground for routes, forms, and state.
                </p>
                <p className="project-card-tech">
                  Stack: Flask · Jinja · CSS
                </p>
                <div className="project-card-links">
                  <a
                    href="https://your-live-coffee-sim-url.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/YOUR_COFFEE_SIM_REPO"
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
                <h3 className="project-card-title">Tappy Plane</h3>
                <p className="project-card-summary">
                  A Flappy Bird–style game made in Godot with custom pixel art
                  and high-score logic.
                </p>
                <p className="project-card-tech">
                  Stack: Godot · Pixel Art · JS
                </p>
                <div className="project-card-links">
                  <a
                    href="https://nic0cava.github.io/TappyPlane"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                  <a
                    href="https://github.com/Nic0cava/TappyPlane"
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
    </div>
  );
}

export default App;
