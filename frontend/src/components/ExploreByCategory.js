import React,{useState} from "react";
import "../style/exploreByCategory.css";
import arrow from "../images/Arrow.svg";
import icon from "../style/icon-1.png";
import { Link } from "react-router-dom";

const ExploreByCategory = () => {

  const job = [
    {
      id: 1,
      image: { icon },
      name: "Design",
      number: "235",
      description: "jobs availables",
    },
    {
      id: 2,
      image: { icon },
      name: "Web Development",
      number: "153",
      description: "jobs availables",
    },
    {
      id: 3,
      image: { icon },
      name: "Data Analysis",
      number: "87",
      description: "jobs availables",
    },
    {
      id: 4,
      image: { icon },
      name: "Marketing",
      number: "120",
      description: "jobs availables",
    },
    {
      id: 5,
      image: { icon },
      name: "Software Engineering",
      number: "98",
      description: "jobs availables",
    },
    {
      id: 6,
      image: { icon },
      name: "Sales",
      number: "64",
      description: "jobs availables",
    },
    {
      id: 7,
      image: { icon },
      name: "Writing",
      number: "112",
      description: "jobs availables",
    },
    {
      id: 8,
      image: { icon },
      name: "Graphic Design",
      number: "78",
      description: "jobs availables",
    },
    {
      id: 9,
      image: { icon },
      name: "Project Management",
      number: "43",
      description: "jobs availables",
    },
  ];
  
  
  

  const[jobData, setjobData]=useState(job);
  return (
    <>
    <div className="container0">
      <h3 className="heading1">
        Explore by<span style={{ color: "#3A90C0" }}> category</span>
      </h3>
      <div className="box-container0">

    {jobData.map((curElem)=>{
      return(
      <>
        <div className="box0" key={curElem.id}>

            <div>
              <img src={icon} alt="icon" />
            </div>

              <div className="job0">
                <Link to="#">{curElem.name}</Link>
              </div>
  
          <div className="desc">
                <div className="para0">
                  <p>
                  {curElem.number}  {curElem.description}
                  </p>
                </div>
                <div className="arrow">
                  <img src={arrow} alt="icon" />
                </div>
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

export default ExploreByCategory;
