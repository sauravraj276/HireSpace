import React from "react";
import "../../styles/components/static-pages.css";
import { Bell } from "lucide-react";

function Updates() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <Bell size={64} className="hero-icon" />
          <h1 className="static-title">Product Updates</h1>
          <p className="static-subtitle">What's new at HireSpace</p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <h2 className="section-title">Latest Release - v2.0</h2>
          <p className="text-block">
            <strong>Released on:</strong> October 2023
          </p>
          <div className="text-block">
            <p>
              We've completely redesigned the user interface for a smoother
              experience. Key features include:
            </p>
            <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
              <li>Refactored folder structure for better performance.</li>
              <li>New dashboard for companies.</li>
              <li>Enhanced job search filters.</li>
            </ul>
          </div>

          <h2 className="section-title">Previous Release - v1.5</h2>
          <p className="text-block">
            <strong>Released on:</strong> August 2023
          </p>
          <ul className="text-block" style={{ marginLeft: "20px" }}>
            <li>Added Social Login (Google, LinkedIn).</li>
            <li>Integrated Chatbot support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Updates;
