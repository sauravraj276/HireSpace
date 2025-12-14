import React from "react";
import "../../styles/components/static-pages.css";
import { Shield } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="static-page">
      <div className="static-hero">
        <div className="container">
          <Shield size={64} className="hero-icon" />
          <h1 className="static-title">Privacy Policy</h1>
          <p className="static-subtitle">
            Your data security is our top priority
          </p>
        </div>
      </div>

      <div className="container">
        <div className="static-content">
          <h2 className="section-title">Data Collection</h2>
          <p className="text-block">
            We collect information that you provide directly to us, such as when
            you create or modify your account, request on-demand services,
            contact customer support, or otherwise communicate with us.
          </p>

          <h2 className="section-title">Use of Information</h2>
          <p className="text-block">
            We use the information we collect to provide, maintain, and improve
            our services, such as to facilitate payments, send receipts, provide
            products and services you request (and send related information),
            develop new features, provide customer support to Users and Drivers,
            develop safety features, authenticate users, and send product
            updates and administrative messages.
          </p>

          <h2 className="section-title">Sharing of Information</h2>
          <p className="text-block">
            We may share the information we collect about you as described in
            this Statement or as described at the time of collection or sharing,
            including as follows:
          </p>
          <ul className="text-block" style={{ marginLeft: "20px" }}>
            <li>
              With recruitment agencies and companies for job applications.
            </li>
            <li>
              With third parties to provide you a service you requested through
              a partnership or promotional offering made by a third party or us.
            </li>
            <li>
              With the general public if you submit content in a public forum,
              such as blog comments, social media posts, or other features of
              our Services that are viewable by the general public.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
