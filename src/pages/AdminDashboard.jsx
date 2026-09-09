import { useState } from "react";

function AdminDashboard() {
  const [reports, setReports] = useState(
    JSON.parse(localStorage.getItem("civicReports")) || []
  );

  const totalReports = reports.length;

  const pendingReports = reports.filter(
    (report) => report.status === "Pending"
  ).length;

  const resolvedReports = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1>Admin Dashboard</h1>

        <p className="dashboard-intro">
          Manage and monitor all citizen complaints.
        </p>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h2>{totalReports}</h2>
            <p>Total Complaints</p>
          </div>

          <div className="stat-card">
            <h2>{pendingReports}</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card">
            <h2>{resolvedReports}</h2>
            <p>Resolved</p>
          </div>
        </div>

        <div className="complaints-section">
          <h2>All Complaints</h2>

          {reports.length === 0 ? (
            <p>No complaints available.</p>
          ) : (
            reports.map((report) => (
              <div className="complaint-card" key={report.complaintId}>
                <h3>{report.complaintId}</h3>

                <p>
                  <strong>Issue:</strong> {report.category}
                </p>

                <p>
                  <strong>Description:</strong> {report.description}
                </p>

                <p>
                  <strong>Location:</strong> {report.location}
                </p>

                <p>
                  <strong>Status:</strong> {report.status}
                </p>

                {report.status === "Pending" && (
                  <button
                    type="button"
                    onClick={() => {
                      const updatedReports = reports.map((item) =>
                        item.complaintId === report.complaintId
                          ? { ...item, status: "Resolved" }
                          : item
                      );

                      localStorage.setItem(
                        "civicReports",
                        JSON.stringify(updatedReports)
                      );

                      setReports(updatedReports);
                    }}
                  >
                    Mark as Resolved
                  </button>
                )}

                <p>
                  <strong>Reported:</strong> {report.reportedAt}
                </p>
              </div>
            ))
          )}
        </div>

        <button
          type="button"
          className="back-home-btn"
          onClick={() => {
            localStorage.removeItem("adminLoggedIn");
            window.location.href = `${import.meta.env.BASE_URL}admin-login`;
          }}
        >
          Logout
        </button>

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

export default AdminDashboard;