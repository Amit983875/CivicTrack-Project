import { useState } from "react";

function TrackIssues() {
  const [complaintId, setComplaintId] = useState("");
  const [report, setReport] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();

    setError("");
    setReport(null);

    if (!complaintId.trim()) {
      setError("Please enter a complaint ID.");
      return;
    }

    const savedReports = JSON.parse(localStorage.getItem("civicReports")) || [];

    const enteredId = complaintId.trim().toUpperCase();

    const foundReport = savedReports.find(
      (item) => String(item.complaintId).trim().toUpperCase() === enteredId,
    );

    if (!foundReport) {
      setError("Complaint ID not found.");
      return;
    }

    setReport(foundReport);
  };

  return (
    <div className="track-page">
      <div className="track-container">
        <h1>Track Your Issue</h1>

        <p className="track-intro">
          Enter your complaint ID to check the current status of your civic
          issue.
        </p>

        <form className="track-search" onSubmit={handleTrack}>
          <input
            type="text"
            placeholder="Enter complaint ID"
            value={complaintId}
            onChange={(e) => setComplaintId(e.target.value)}
          />

          <button type="submit" className="track-btn">
            Track Issue
          </button>
        </form>

        {error && <p className="track-error">{error}</p>}

        {report && (
          <div className="status-card">
            <div className="status-header">
              <div>
                <p className="status-label">Complaint ID</p>
                <h2>{report.complaintId}</h2>
              </div>

              <span
                className={`status-badge ${
                  report.status === "Resolved" ? "resolved" : "pending"
                }`}
              >
                {report.status}
              </span>
            </div>

            <div className="status-details">
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
                <strong>Reported:</strong> {report.reportedAt}
              </p>

              {report.photoName && (
                <div>
                  <p>
                    <strong>Photo:</strong>{" "}
                    <span style={{ wordBreak: "break-word" }}>
                      {report.photoName}
                    </span>
                  </p>

                  {report.photoData && (
                    <img
                      src={report.photoData}
                      alt="Reported civic issue"
                      style={{
                        width: "100%",
                        maxWidth: "400px",
                        marginTop: "10px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                </div>
              )}
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
        )}
      </div>
    </div>
  );
}

export default TrackIssues;
