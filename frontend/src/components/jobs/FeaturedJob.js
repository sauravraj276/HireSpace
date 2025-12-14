import React, { useState } from "react";
import icon from "../../assets/images/icon-1.png";
import { Link } from "react-router-dom";
import "../../styles/components/featured-job.css";

const FeaturedJob = () => {
  const jobs = [
    {
      id: 1,
      time: "Full Time",
      name: "Email Marketing",
      address: "San Francisco",
      company: "HireSpace",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Design",
      type2: "Marketing",
    },
    {
      id: 2,
      time: "Part Time",
      name: "Web Development",
      address: "New York",
      company: "Tech Solutions",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Development",
      type2: "Software",
    },
    {
      id: 3,
      time: "Contract",
      name: "Graphic Design",
      address: "Los Angeles",
      company: "Creative Studio",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Design",
      type2: "Art",
    },
    {
      id: 4,
      time: "Full Time",
      name: "Data Analysis",
      address: "Chicago",
      company: "Analytics Inc.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Analysis",
      type2: "Statistics",
    },
    {
      id: 5,
      time: "Part Time",
      name: "Social Media Management",
      address: "London",
      company: "Digital Marketing Agency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Marketing",
      type2: "Social Media",
    },
    {
      id: 6,
      time: "Full Time",
      name: "Software Engineering",
      address: "Seattle",
      company: "Tech Innovators",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Development",
      type2: "Programming",
    },
  ];

  const [jobData] = useState(jobs);

  return (
    <section className="featured-jobs section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="text-primary">Jobs</span>
          </h2>
          <p className="section-subtitle">
            Discover the latest job opportunities from top companies
          </p>
        </div>
        <div className="jobs-grid">
          {jobData.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-card-inner">
                <div className="job-card-header">
                  <div className="job-icon-wrapper">
                    <img src={icon} alt="Company icon" className="job-icon" />
                  </div>
                  <span className="job-badge">{job.time}</span>
                </div>
                
                <div className="job-card-body">
                  <h3 className="job-title">{job.name}</h3>
                  <p className="job-company">{job.company}</p>
                  <p className="job-location">{job.address}</p>
                  <p className="job-description">{job.description}</p>
                </div>
                
                <div className="job-card-footer">
                  <div className="job-tags">
                    <span className="job-tag">{job.type1}</span>
                    <span className="job-tag">{job.type2}</span>
                  </div>
                  <Link to="#" className="job-apply-btn">Apply Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;

