import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";

// import GlassIcons from "./GlassIcons";
// import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";

// update with your own icons and colors
// const items = [
//   { icon: <FiFileText />, color: 'blue', label: 'Files' },
//   { icon: <FiBook />, color: 'purple', label: 'Books' },
//   { icon: <FiHeart />, color: 'red', label: 'Health' },
//   { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
//   { icon: <FiEdit />, color: 'orange', label: 'Notes' },
//   { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
// ];

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
                Full-stack dev, futures trader, and creative who loves building tools,
                games, and experimental projects with Python, Flask, React, and AI.
              </p>
              <p className="hero-body">
                Right now I’m focused on shipping polished portfolio projects,
                automating workflows, and crafting a personal brand around Axolynth —
                blending code, trading, and synthwave aesthetics.
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
                <a
                  href="mailto:nmcava01@gmail.com"
                  aria-label="Email"
                >
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
    </div>
  );
}


export default App;
