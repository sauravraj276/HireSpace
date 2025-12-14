import React from "react";
import "../../styles/components/static-pages.css";
import { User, Search, FileText, Building2, HelpCircle } from "lucide-react";

function HelpDocs() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <HelpCircle size={64} className="hero-icon" />
          <h1 className="static-title">Help Documentation</h1>
          <p className="static-subtitle">
            Guides and answers to your questions
          </p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <User size={40} />
              </div>
              <h3 className="feature-title">Account Management</h3>
              <p>How to create, update, and secure your account.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Search size={40} />
              </div>
              <h3 className="feature-title">Searching for Jobs</h3>
              <p>Tips for finding the best opportunities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={40} />
              </div>
              <h3 className="feature-title">Application Process</h3>
              <p>Step-by-step guide to applying for internships.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Building2 size={40} />
              </div>
              <h3 className="feature-title">For Employers</h3>
              <p>Posting jobs and managing candidates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpDocs;
