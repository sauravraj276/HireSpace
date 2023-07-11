import React,{useState} from "react";
import "../style/featured_job.css";
import icon from "../style/icon-1.png";
import { Link } from "react-router-dom";

const FeaturedJob = () => {

  const job = [
    {
      id: 1,
      image: { icon },
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
      image: { icon },
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
      image: { icon },
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
      image: { icon },
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
      image: { icon },
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
      image: { icon },
      time: "Full Time",
      name: "Software Engineering",
      address: "Seattle",
      company: "Tech Innovators",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Development",
      type2: "Programming",
    },
    {
      id: 7,
      image: { icon },
      time: "Contract",
      name: "UX/UI Design",
      address: "Berlin",
      company: "Creative Agency",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Design",
      type2: "User Experience",
    },
    {
      id: 8,
      image: { icon },
      time: "Full Time",
      name: "Content Writing",
      address: "Toronto",
      company: "Digital Content Creators",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Writing",
      type2: "Content Creation",
    },
    {
      id: 9,
      image: { icon },
      time: "Part Time",
      name: "Sales Representative",
      address: "Sydney",
      company: "Sales Solutions",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi.",
      type1: "Sales",
      type2: "Negotiation",
    },
   
  ];
  
  

  const[jobData, setjobData]=useState(job);
  return (
    <>
    <div className="container_f">
      <h3 className="heading0">
        Featured<span style={{ color: "#3A90C0" }}> jobs</span>
      </h3>
      <div className="box-container_f">

    {jobData.map((curElem)=>{
      return(
      <>
        <div className="box_f" key={curElem.id}>

          <div>
            <img src={icon} alt="icon" />
            <div className="btn_f">{curElem.time}</div>
            <br />
          </div>

          <div>
            <div className="job">
              <Link to="#">{curElem.name}</Link>
            </div>
            <div className="p">{curElem.company} , {curElem.address}</div>
          </div>

          <div className="para">
            <p>
                {curElem.description}
            </p>
            </div>

          <div>
            <div className="btn_f0">{curElem.type1}</div>
            <div className="btn_f0 btn_f01">{curElem.type2}</div>
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

export default FeaturedJob;
