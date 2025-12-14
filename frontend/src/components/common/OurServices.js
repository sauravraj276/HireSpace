import React from "react";
import "../../styles/components/static-pages.css";
import {
  Search,
  FileText,
  Building2,
  BarChart3,
  Briefcase,
} from "lucide-react";

function OurServices() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <Briefcase size={64} className="hero-icon" />
          <h1 className="static-title">Our Services</h1>
          <p className="static-subtitle">
            Comprehensive solutions for candidates and recruiters
          </p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Search size={40} />
              </div>
              <h3 className="feature-title">Job Search</h3>
              <p className="text-block">
                Advanced filtering and smart matching to find your perfect role.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={40} />
              </div>
              <h3 className="feature-title">Resume Building</h3>
              <p className="text-block">
                Tools to create ATS-friendly resumes that stand out.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Building2 size={40} />
              </div>
              <h3 className="feature-title">Company Branding</h3>
              <p className="text-block">
                Showcase your company culture to attract top talent.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={40} />
              </div>
              <h3 className="feature-title">Analytics</h3>
              <p className="text-block">
                Insights on job views and application trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
