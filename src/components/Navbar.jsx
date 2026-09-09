function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Civic<span>Track</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="/report">Report Issue</a>
        <a href="/track">Track Issues</a>
        <a href="/dashboard">Citizen Dashboard</a>
        <a href="/admin-login">Admin Login</a>
      </div>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;
