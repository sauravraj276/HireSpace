import React from 'react'
import navbar_logo from '../navbar_logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={navbar_logo} alt="Logo" width="151.1" height="50.2" padding="0"/> 
      </Link>
      <ul> 
        <CustomLink to="/Findjobs">Find Jobs</CustomLink>
        <CustomLink to="/BrowseCompany">Browse Company</CustomLink>
      </ul>
      <ul className="dropdown"> 
      <button class="dropbtn">Login</button>
          <div class="dropdown-content">
          <CustomLink to="/Student">Student</CustomLink>
          <CustomLink to="/Company">Company</CustomLink>
          </div>
      </ul>
      <ul className="dropdown"> 
      <button class="dropbtn1">SignUp</button>
          <div class="dropdown-content">
          <CustomLink to="/StudentSignUp">Student</CustomLink>
          <CustomLink to="/CompanySignUp">Company</CustomLink>
          </div>
      </ul>
    </nav>
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
