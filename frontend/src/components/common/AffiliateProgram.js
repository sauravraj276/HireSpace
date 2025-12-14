import React from "react";
import "../../styles/components/static-pages.css";
import { DollarSign, TrendingUp, Gift, Users } from "lucide-react";

function AffiliateProgram() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <Users size={64} className="hero-icon" />
          <h1 className="static-title">Affiliate Program</h1>
          <p className="static-subtitle">Partner with us and earn rewards</p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <div className="text-block">
            <p>
              Join the HireSpace Affiliate Program and earn commissions by
              referring talented candidates and companies to our platform. It's
              free to join and easy to get started.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={40} />
              </div>
              <h3 className="feature-title">High Commission</h3>
              <p>Earn up to 20% commission on every paid subscription.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingUp size={40} />
              </div>
              <h3 className="feature-title">Real-time Tracking</h3>
              <p>Monitor your referrals and earnings in real-time dashboard.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Gift size={40} />
              </div>
              <h3 className="feature-title">Exclusive Perks</h3>
              <p>Get access to special bonuses and promotional materials.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              className="btn btn-primary"
              style={{ padding: "12px 30px" }}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateProgram;
