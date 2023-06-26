import React, {useState} from 'react';
import '../style/navbar_style.css';
import navbar_logo from '../navbar_logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  const navToggle = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <header className="header">
    <div className="container">
        <div className="row align-items-center justify-content-between">
            <div className="logo">
               <Link to="/">
               <img src={navbar_logo} alt="Logo" width="151.1" height="50.2" padding="0"/> 
               </Link>
            </div>
            <button className={`nav-toggler ${isOpen ? 'active' : ''}`} onClick={navToggle}>
               <span></span>
            </button>
            <nav className={`nav ${isOpen ? 'open' : ''}`} style={isOpen ? { maxHeight: '100%' } : {}}>
               <ul>
                  
                  <li><CustomLink to="/Findjobs">Find Jobs</CustomLink></li>
                  <li><CustomLink to="/BrowseCompany">Browse Companies</CustomLink></li>

                  <li className="dropdown">
                     <button className="dropbtn">Login
                       <i className="fa fa-caret-down"></i>
                     </button>
                     <div className="dropdown-content">
                       <CustomLink to="/Student">Student</CustomLink>
                       <CustomLink to="/Company">Company</CustomLink>
                     </div> 
                   </li> 
                   
                   <li className="dropdown">
                     <button className="dropbtn">Sign Up
                       <i className="fa fa-caret-down"></i>
                     </button>
                     <div className="dropdown-content">
                       <CustomLink to="/StudentSignUp">Student</CustomLink>
                       <CustomLink to="/CompanySignUp">Company</CustomLink>
                     </div>
                   </li> 

               </ul>
            </nav>
        </div>
    </div>
 </header>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }


export default Navbar