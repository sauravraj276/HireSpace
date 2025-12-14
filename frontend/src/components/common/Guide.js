import React from "react";
import "../../styles/components/static-pages.css";
import { BookOpen } from "lucide-react";

function Guide() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <BookOpen size={64} className="hero-icon" />
          <h1 className="static-title">Platform Guide</h1>
          <p className="static-subtitle">Master HireSpace in minutes</p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <h2 className="section-title">Getting Started</h2>
          <div className="text-block">
            <ol style={{ marginLeft: "20px", lineHeight: "2" }}>
              <li>
                <strong>Sign Up:</strong> Create an account as a Candidate or
                Company.
              </li>
              <li>
                <strong>Complete Profile:</strong> Upload your resume or fill in
                company details.
              </li>
              <li>
                <strong>Browse/Post:</strong> Search for jobs or post new
                openings.
              </li>
              <li>
                <strong>Connect:</strong> Apply directly or contact candidates.
              </li>
            </ol>
          </div>

          <h2 className="section-title">Best Practices</h2>
          <div className="text-block">
            <ul style={{ marginLeft: "20px", lineHeight: "2" }}>
              <li>Keep your profile updated with latest skills.</li>
              <li>Use keywords in job descriptions for better matching.</li>
              <li>Respond promptly to messages and applications.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
