import React, { useState } from 'react';
import '../style/navbar_style.css';
import navbar_logo from '../navbar_logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };

  return (

    <header className="navbar" >
      <div className="first-section">
        <div className="logo">
          <Link to="/">
            <img src={navbar_logo} alt="Logo" width="200" height="59" />
          </Link>
        </div>
        <CustomLink to="/Findjobs" >Find Jobs</CustomLink>
        <CustomLink to="/BrowseCompany" >Browse Companies</CustomLink>
      </div>

      <div className="second-section">
        <div className='dropdown'>
          <button className="dropbtn">Login
          </button>
          <div className="dropdown-content">
            <div><CustomLink to="/Candidate">Candidate</CustomLink></div>
            <div> <CustomLink to="/Company">Company</CustomLink>
            </div>
          </div>
        </div>



        <li className="dropdown">
          <button className="dropbtn ">Sign Up
          </button>
          <div className="dropdown-content">
            <div><CustomLink to="/CandidateSignUp">Candidate</CustomLink></div>
            <div><CustomLink to="/CompanySignUp">Company</CustomLink></div>
          </div>
        </li>
      </div>
    </header>
  )
}

function CustomLink({ to, classname, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={classname + isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}


export default Navbar