import Silk from "./Silk";
import ProfileCard from "./ProfileCard";

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

      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "5rem 1.5rem 6rem",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <ProfileCard
            name={displayName}
            title="Junior Full-Stack Developer & Creative"
            handle="the.nico.cava"
            status="Building tools, games & experiments"
            contactText="Contact Me"
            avatarUrl="/static/images/nico_nobg1.png"
            // iconUrl="/static/images/Robot.png"
            // grainUrl="/static/images/nico_nobgb1.png"
            miniAvatarUrl="/static/images/nico_nobg1.png"
            behindGlowEnabled={true}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              window.location.href = "mailto:nmcava01@gmail.com";
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
