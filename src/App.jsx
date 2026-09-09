import "./App.css";
import Navbar from "./components/Navbar";
import ReportIssue from "./pages/ReportIssue";
import TrackIssues from "./pages/TrackIssues";
import CitizenDashboard from "./pages/CitizenDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

function App() {
  const params = new URLSearchParams(window.location.search);
  const route = params.get("route");

  const path = route
    ? `/${route}`
    : window.location.pathname;

  if (path.endsWith("/report")) {
    return <ReportIssue />;
  }

  if (path.endsWith("/track")) {
    return <TrackIssues />;
  }

  if (path.endsWith("/dashboard")) {
    return <CitizenDashboard />;
  }

  if (path.endsWith("/admin-login")) {
    return <AdminLogin />;
  }

  if (path.endsWith("/admin")) {
    const isAdminLoggedIn =
      localStorage.getItem("adminLoggedIn") === "true";

    if (!isAdminLoggedIn) {
      window.location.href = `${import.meta.env.BASE_URL}admin-login`;
      return null;
    }

    return <AdminDashboard />;
  }

  return (
    <div className="app">
      <Navbar />

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
                window.location.href = `${import.meta.env.BASE_URL}report`;
              }}
            >
              Report an Issue
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                window.location.href = `${import.meta.env.BASE_URL}track`;
              }}
            >
              Track an Issue
            </button>

            <button
              className="secondary-btn"
              onClick={() => {
                window.location.href = `${import.meta.env.BASE_URL}dashboard`;
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