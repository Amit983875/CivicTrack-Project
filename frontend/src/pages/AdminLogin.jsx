import { useState } from "react";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true");

      window.location.href = `${import.meta.env.BASE_URL}admin`;
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Admin Login</h1>

        <p>Login to access the CivicTrack Admin Dashboard.</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter admin username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        {error && <p className="track-error">{error}</p>}

        <button
          type="button"
          className="back-home-btn"
          onClick={() => {
            window.location.href = import.meta.env.BASE_URL;
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;