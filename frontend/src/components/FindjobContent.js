import React, { useState } from 'react';
import SortByDropdown from './SortByDropdown';
import arrow from "../images/Arrow.svg";
import "../style/featured_job.css";
import icon from "../style/icon-1.png";
import { Link } from "react-router-dom";

import "../style/findjob.css";
import SideFilter from './SideFilter';

const FindjobContent = () => {
    const job = [
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
        {
          id: 6,
          jobTitle: "Quality Assurance Tester",
          companyName: "Testers R Us",
          location: "City M",
          vacancy: 3,
          time: "Full-Time",
          fieldOfWork: "Software Testing"
        },
        {
          id: 7,
          jobTitle: "IT Project Manager",
          companyName: "TechPro Services",
          location: "City N",
          vacancy: 1,
          time: "Full-Time",
          fieldOfWork: "Project Management"
        },
        {
          id: 8,
          jobTitle: "Frontend Developer",
          companyName: "WebGenius",
          location: "City O",
          vacancy: 2,
          time: "Part-Time",
          fieldOfWork: "Web Development"
        },
        {
          id: 9,
          jobTitle: "Software Architect",
          companyName: "Architects Inc.",
          location: "City P",
          vacancy: 1,
          time: "Full-Time",
          fieldOfWork: "Software Architecture"
        },
        {
          id: 17,
          jobTitle: "Systems Analyst",
          companyName: "Systematic Solutions",
          location: "City Q",
          vacancy: 2,
          time: "Full-Time",
          fieldOfWork: "Systems Analysis"
        },
        {
          id: 18,
          jobTitle: "Network Engineer",
          companyName: "NetConnect",
          location: "City R",
          vacancy: 1,
          time: "Full-Time",
          fieldOfWork: "Network Engineering"
        },
        {
          id: 19,
          jobTitle: "Game Designer",
          companyName: "GameGen",
          location: "City S",
          vacancy: 2,
          time: "Full-Time",
          fieldOfWork: "Game Design"
        },
        {
          id: 20,
          jobTitle: "Cloud Solutions Architect",
          companyName: "CloudTech Solutions",
          location: "City T",
          vacancy: 1,
          time: "Full-Time",
          fieldOfWork: "Cloud Computing"
        }
        
        
      ];


    
      const[jobData, setjobData]=useState(job);
      return (
        <>
        <div className='apple'>
            <SideFilter/>
            <div className="right-side">
                 <div className='part1'>
                    <div className="heading1">  <h3 >
                        All<span style={{ color: "#3A90C0" }}> jobs</span>
                      </h3>
                      </div>
                     <div className='sort-by-dropdown'>  < SortByDropdown/></div>
                      </div>
           {jobData.map((curElem)=>{
              return(
                <>
                  
                  <div className='dabba'key={curElem.id}>
                    <div className='box1'>
                    <img src={icon} alt="icon" />
                    </div>
                    <div className='box2'>
                      <div className='profiles'><Link to="#">{curElem.jobTitle}</Link> </div>
                      <br />
                      <div className='names'><span class="dot-between">{curElem.companyName} <span class="dot">.</span> {curElem.location}</span>
</div>
                      <div className='box2-last'>
                      <div className="btn_f0">{curElem.time}</div>
                      <div className="btn_f0 btn_f01">{curElem.fieldOfWork}</div>
                      </div>
                    </div>
                    <div className='box3'>
                    <button className="apply-button">Apply</button>

            <div className="btn_f0 btn_f01">{curElem.vacancy}</div>
            <div className='names2'>Vacancy</div>
                    </div>
                  </div>
              </>
              );
            })}      

           </div>
           </div>
        </>
      );
    };
    
   
export default FindjobContent;



// // sort drop down
// const [selectedOption, setSelectedOption] = useState('name');
// const options = [
//   { value: 'most relevant', label: 'most relevant' },
//   { value: 'input2', label: 'bas job chahyie' },
//   { value: 'input3', label: 'bxsub' },
// ];

// const handleSortByChange = (option) => {
//   setSelectedOption(option);
//   // sort drop down ends here
   
{/* <SortByDropdown onChange={handleSortChange} /> */}


