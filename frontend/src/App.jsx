import "./App.css";
import Silk from "./Silk";

function App({ username }) {
  return (
    <div>
      <Silk
        speed={5}
        scale={1}
        color="#006a50"
        noiseIntensity={1.5}
        rotation={0}
      />

      {/* All page content lives here */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          padding: "5rem 1.5rem 6rem", // top/bottom padding
        }}
      >
        {/* Hero section */}
        <section className="container mb-5">
          <h1 className="display-4 text-light">
            Hey, I'm {username || "Nico"}
          </h1>
          <p className="lead text-light-50">
            Junior full-stack dev, trader, and creative — building tools,
            games, and weird experiments.
          </p>
        </section>

        {/* Projects section with cards */}
        <section className="container mb-5">
          <h2 className="h3 text-light mb-4">Featured Projects</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card bg-dark bg-opacity-75 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-light">
                    FB Merch Inventory App
                  </h5>
                  <p className="card-text text-light-50">
                    Inventory system for Funky Buddha Brewery's merch
                    department.
                  </p>
                  <span className="badge bg-secondary me-1">Flask</span>
                  <span className="badge bg-secondary me-1">PostgreSQL</span>
                  <span className="badge bg-secondary me-1">VPS</span>
                </div>
              </div>
            </div>

            {/* more cards here */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
