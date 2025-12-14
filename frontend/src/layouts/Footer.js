import React from "react";
import { Link } from "react-router-dom";
import navbar_logo from "../assets/logos/navbar_logo.svg";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <img src={navbar_logo} alt="HireSpace Logo" />
            </Link>
            <p className="footer-description">
              Great platform for the job seeker that passionate about their
              dream. Find your dream job easier.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/affiliate">Affiliate Program</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/help">Help Docs</Link>
              </li>
              <li>
                <Link to="/guide">Guide</Link>
              </li>
              <li>
                <Link to="/updates">Updates</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Get Job Notification</h4>
            <p className="footer-newsletter-text">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="footer-social">
              <Link to="#" aria-label="Facebook" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" aria-label="Twitter" className="social-link">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" aria-label="Instagram" className="social-link">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" aria-label="LinkedIn" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} HireSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
