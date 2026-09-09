function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Civic<span>Track</span>
      </div>

      <div className="nav-links">
        <a href={import.meta.env.BASE_URL}>Home</a>

        <a href={`${import.meta.env.BASE_URL}report`}>
          Report Issue
        </a>

        <a href={`${import.meta.env.BASE_URL}track`}>
          Track Issues
        </a>

        <a href={`${import.meta.env.BASE_URL}dashboard`}>
          Citizen Dashboard
        </a>
      </div>

      <button
        className="login-btn"
        onClick={() => {
          window.location.href = `${import.meta.env.BASE_URL}admin-login`;
        }}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;