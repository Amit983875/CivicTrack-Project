import "./App.css";
import Navbar from "./components/Navbar";
import ReportIssue from "./pages/ReportIssue";
import TrackIssues from "./pages/TrackIssues";
import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function App() {
  if (window.location.pathname === "/report") {
    return <ReportIssue />;
  }
  if (window.location.pathname === "/track") {
    return <TrackIssues />;
  }
  if (window.location.pathname === "/dashboard") {
    return <CitizenDashboard />;
  }
  if (window.location.pathname === "/admin") {
    const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

    if (!isAdminLoggedIn) {
      window.location.href = "/admin-login";
      return null;
    }

    return <AdminDashboard />;
  }
  if (window.location.pathname === "/admin-login") {
    return <AdminLogin />;
  }

  return (
    <div className="app">
      <Navbar />

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
            <button
              className="primary-btn"
              onClick={() => {
                window.location.href = "/report";
              }}
            >
              Report an Issue
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                window.location.href = "/track";
              }}
            >
              Track an Issue
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Citizen Dashboard
            </button>
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
