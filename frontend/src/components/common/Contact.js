import React from "react";
import "../../styles/components/static-pages.css";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

function ContactUs() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <MessageSquare size={64} className="hero-icon" />
          <h1 className="static-title">Contact Us</h1>
          <p className="static-subtitle">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <div className="contact-grid">
            <div className="contact-info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="feature-title">Email Us</h3>
                <p>support@hirespace.com</p>
                <p>sales@hirespace.com</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="feature-title">Visit Us</h3>
                <p>123 Innovation Drive</p>
                <p>Tech Valley, CA 94043</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="feature-title">Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "50px" }}>
            <h2 className="section-title">Send us a Message</h2>
            <form
              className="register-form"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <input
                type="text"
                className="form-field"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-field"
                placeholder="Your Email"
              />
              <textarea
                className="form-field"
                placeholder="Your Message"
                rows="5"
                style={{ paddingTop: "10px" }}
              ></textarea>
              <button className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
