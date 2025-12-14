import React, { useState } from 'react';
import SortByDropdown from '../common/SortByDropdown';
import SideFilter from '../common/SideFilter';
import icon from '../../assets/images/icon-1.png';
import { Link } from "react-router-dom";
import '../../styles/components/findjob-content.css';

const FindjobContent = () => {
  const jobs = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      companyName: "ABC Company",
      location: "City A",
      vacancy: 30,
      time: "Full-Time",
      fieldOfWork: "Software Testing"
    },
    {
      id: 2,
      jobTitle: "Web Developer",
      companyName: "XYZ Inc.",
      location: "City B",
      vacancy: 2,
      time: "Full-Time",
      fieldOfWork: "Database Administration"
    },
    {
      id: 3,
      jobTitle: "Data Analyst",
      companyName: "123 Corp",
      location: "City C",
      vacancy: 1,
      time: "Full-Time",
      fieldOfWork: "Database Administration"
    },
    {
      id: 4,
      jobTitle: "Database Administrator",
      companyName: "DataTech Solutions",
      location: "City K",
      vacancy: 2,
      time: "Full-Time",
      fieldOfWork: "Database Administration"
    },
    {
      id: 5,
      jobTitle: "AI Engineer",
      companyName: "Artificial Minds",
      location: "City L",
      vacancy: 1,
      time: "Full-Time",
      fieldOfWork: "Artificial Intelligence"
    },
  ];

  const [jobData] = useState(jobs);

  return (
    <div className="findjob-content">
      <div className="container">
        <div className="findjob-layout">
          <aside className="findjob-sidebar">
            <SideFilter />
          </aside>
          
          <main className="findjob-main">
            <div className="findjob-header">
              <h2 className="findjob-title">
                All <span className="text-primary">Jobs</span>
              </h2>
              <SortByDropdown />
            </div>
            
            <div className="jobs-list">
              {jobData.map((job) => (
                <div className="job-item" key={job.id}>
                  <div className="job-item-icon">
                    <img src={icon} alt="Company icon" />
                  </div>
                  
                  <div className="job-item-content">
                    <h3 className="job-item-title">
                      <Link to="#">{job.jobTitle}</Link>
                    </h3>
                    <p className="job-item-meta">
                      {job.companyName} <span className="dot-separator">•</span> {job.location}
                    </p>
                    <div className="job-item-tags">
                      <span className="job-tag">{job.time}</span>
                      <span className="job-tag job-tag-secondary">{job.fieldOfWork}</span>
                    </div>
                  </div>
                  
                  <div className="job-item-actions">
                    <button className="btn btn-primary">Apply</button>
                    <div className="job-vacancy">
                      <span className="vacancy-count">{job.vacancy}</span>
                      <span className="vacancy-label">Vacancy</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FindjobContent;

