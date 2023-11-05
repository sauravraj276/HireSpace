import React, { useState, useContext } from 'react';
import '../style/navbar_style.css';
import navbar_logo from '../navbar_logo.svg';
import { Link, Navigate, useMatch, useResolvedPath } from "react-router-dom";
import AppContext from '../context';
import { logout } from '../auth/auth';
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { appData, updateAppData } = useContext(AppContext);
  const Navigate = useNavigate();


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
        {
          
          appData.isLoggedIn ?
            <div className='dropdown'>
              <button onClick={() => { logout(); updateAppData(false); Navigate('/'); }} className="dropbtn">LogOut
              </button>
            </div>
            : <>
              <div className='dropdown'>
                <button className="dropbtn">Login
                </button>
                <div className="dropdown-content">
                  <div><CustomLink to="/Candidate">Candidate</CustomLink></div>
                  <div> <CustomLink to="/Company">Company</CustomLink>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn ">Sign Up
                </button>
                <div className="dropdown-content">
                  <div><CustomLink to="/CandidateSignUp">Candidate</CustomLink></div>
                  <div><CustomLink to="/CompanySignUp">Company</CustomLink></div>
                </div>
              </div>
            </>
        }
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