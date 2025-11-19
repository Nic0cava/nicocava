import Silk from "./Silk";
import ProfileCard from "./ProfileCard";
import GlassIcons from "./GlassIcons";
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from "react-icons/fi";

// update with your own icons and colors
const items = [
  { icon: <FiFileText />, color: 'blue', label: 'Files' },
  { icon: <FiBook />, color: 'purple', label: 'Books' },
  { icon: <FiHeart />, color: 'red', label: 'Health' },
  { icon: <FiCloud />, color: 'indigo', label: 'Weather' },
  { icon: <FiEdit />, color: 'orange', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'green', label: 'Stats' },
];

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

          {/* RIGHT: Glass Icons */}
          <div className="hero-right">
            <GlassIcons items={items} className="custom-class" />
          </div>
        </div>
      </main>
    </div>
  );
}



export default App;
