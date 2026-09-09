import { useState } from "react";

function ReportIssue() {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);
  const [submittedId, setSubmittedId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category || !description || !location) {
      alert("Please fill all required fields.");
      return;
    }

    const complaintId = "CT-" + Date.now().toString().slice(-5);

    const saveReport = (photoData) => {
      const newReport = {
        complaintId,
        category,
        description,
        location,
        photoName: photo ? photo.name : "",
        photoData: photoData || "",
        status: "Pending",
        reportedAt: new Date().toLocaleString(),
      };

      const existingReports =
        JSON.parse(localStorage.getItem("civicReports")) || [];

      existingReports.push(newReport);

      localStorage.setItem("civicReports", JSON.stringify(existingReports));

      setSubmittedId(complaintId);

      setCategory("");
      setDescription("");
      setLocation("");
      setPhoto(null);

      console.log("Saved Report:", newReport);
    };

    if (photo) {
      const reader = new FileReader();

      reader.onloadend = () => {
        saveReport(reader.result);
      };

      reader.readAsDataURL(photo);
    } else {
      saveReport("");
    }
  };

  return (
    <div className="report-page">
      <div className="report-container">
        <h1>Report a Civic Issue</h1>

        <p className="report-intro">
          Help improve your city by reporting a civic problem.
        </p>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Issue Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select an issue</option>
              <option value="Broken Road">Broken Road</option>
              <option value="Garbage Dump">Garbage Dump</option>
              <option value="Open Drain">Open Drain</option>
              <option value="Broken Street Light">Broken Street Light</option>
            </select>
          </div>

          <div className="form-group">
            <label>Issue Description</label>

            <textarea
              placeholder="Describe the problem..."
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              placeholder="Enter the location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Upload Photo</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Report
          </button>
        </form>
        {submittedId && (
          <div className="success-message">
            <h2>Report Submitted Successfully! 🎉</h2>

            <p>Your Complaint ID is:</p>

            <div className="complaint-id">{submittedId}</div>
            <button
              type="button"
              className="copy-btn"
              onClick={() => {
                navigator.clipboard.writeText(submittedId);
                alert("Complaint ID copied!");
              }}
            >
              Copy Complaint ID
            </button>

            <p>Save this ID to track your civic issue later.</p>
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
  );
}

export default ReportIssue;
