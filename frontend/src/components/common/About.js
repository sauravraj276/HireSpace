import React from "react";
import "../../styles/components/static-pages.css";
import { Rocket, Handshake, Bot, Target } from "lucide-react";
import aboutHeroImage from "../../assets/images/about_hero.png";

function About() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <Target size={64} className="hero-icon" />
          <h1 className="static-title">About HireSpace</h1>
          <p className="static-subtitle">
            Bridging the gap between talent and opportunity
          </p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <img
              src={aboutHeroImage}
              alt="HireSpace Community"
              style={{
                maxWidth: "100%",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
          </div>
          <div className="text-block">
            <p>
              Our platform focuses on providing an opportunity for university
              candidates to apply for summer internships seamlessly. We believe
              in empowering students to take control of their career path right
              from college.
            </p>
          </div>

          <h2 className="section-title">Our Mission</h2>
          <div className="text-block">
            <p>
              Candidates can create their profiles, browse internships provided
              by top companies, and apply according to their skills. By allowing
              direct resume uploads and streamlining the review process, we
              create an autonomous ecosystem where companies can reach out to
              accepted candidates directly.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Rocket size={40} />
              </div>
              <h3 className="feature-title">Fast Applying</h3>
              <p>One-click applications to save you time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Handshake size={40} />
              </div>
              <h3 className="feature-title">Direct Connection</h3>
              <p>Connect directly with top recruiters.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Bot size={40} />
              </div>
              <h3 className="feature-title">AI Support</h3>
              <p>Smart chatbot assistance for new users.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
