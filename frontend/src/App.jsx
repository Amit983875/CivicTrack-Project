import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          Civic<span>Track</span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Report Issue</a>
          <a href="#">Track Issues</a>
          <a href="#">My Reports</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <p className="tagline">SMART CIVIC ISSUE REPORTING</p>

          <h1>
            Report Problems.
            <br />
            <span>Build a Better City.</span>
          </h1>

          <p className="description">
            CivicTrack makes it easy for citizens to report civic problems,
            track their complaints, and see how quickly issues are resolved.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Report an Issue</button>
            <button className="secondary-btn">Track an Issue</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">📍</div>
          <h2>Your City. Your Voice.</h2>
          <p>
            Report broken roads, garbage dumps, open drains and other civic
            problems directly to the authorities.
          </p>
        </div>
      </main>

      {/* Issue Categories */}
      <section className="categories">
        <h2>What can you report?</h2>

        <div className="category-grid">
          <div className="category-card">
            <div>🛣️</div>
            <h3>Broken Roads</h3>
            <p>Report potholes and damaged roads.</p>
          </div>

          <div className="category-card">
            <div>🗑️</div>
            <h3>Garbage</h3>
            <p>Report garbage dumps and waste problems.</p>
          </div>

          <div className="category-card">
            <div>💧</div>
            <h3>Open Drains</h3>
            <p>Report blocked or dangerous drains.</p>
          </div>

          <div className="category-card">
            <div>💡</div>
            <h3>Street Lights</h3>
            <p>Report damaged or non-working lights.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;