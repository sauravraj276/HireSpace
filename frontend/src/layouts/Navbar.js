import React, { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import { logout } from "../auth/auth";
import navbar_logo from "../assets/logos/navbar_logo.svg";
import "../styles/components/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { appData, updateAppData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    updateAppData(false);
    navigate("/");
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img src={navbar_logo} alt="HireSpace Logo" />
          </Link>
        </div>

        <nav className={`navbar-nav ${isOpen ? "navbar-nav-open" : ""}`}>
          <CustomLink to="/Findjobs" onClick={() => setIsOpen(false)}>
            Find Jobs
          </CustomLink>
          <CustomLink to="/BrowseCompany" onClick={() => setIsOpen(false)}>
            Browse Companies
          </CustomLink>

          <div className="navbar-actions-mobile">
            {appData.isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            ) : (
              <>
                <div
                  className={`dropdown ${
                    openDropdown === "login" ? "dropdown-open" : ""
                  }`}
                >
                  <button
                    className="btn btn-outline dropdown-toggle"
                    onClick={() => handleDropdownToggle("login")}
                  >
                    Login
                  </button>
                  <div className="dropdown-menu">
                    <CustomLink
                      to="/Candidate"
                      className="dropdown-item"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      Candidate
                    </CustomLink>
                    <CustomLink
                      to="/Company"
                      className="dropdown-item"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      Company
                    </CustomLink>
                  </div>
                </div>
                <div
                  className={`dropdown ${
                    openDropdown === "signup" ? "dropdown-open" : ""
                  }`}
                >
                  <button
                    className="btn btn-outline dropdown-toggle"
                    onClick={() => handleDropdownToggle("signup")}
                  >
                    Sign Up
                  </button>
                  <div className="dropdown-menu">
                    <CustomLink
                      to="/CandidateSignUp"
                      className="dropdown-item"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      Candidate
                    </CustomLink>
                    <CustomLink
                      to="/CompanySignUp"
                      className="dropdown-item"
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsOpen(false);
                      }}
                    >
                      Company
                    </CustomLink>
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>

        <div className="navbar-actions navbar-actions-desktop">
          {appData.isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <>
              <div
                className={`dropdown ${
                  openDropdown === "login" ? "dropdown-open" : ""
                }`}
              >
                <button
                  className="btn btn-outline dropdown-toggle"
                  onClick={() => handleDropdownToggle("login")}
                >
                  Login
                </button>
                <div className="dropdown-menu">
                  <CustomLink
                    to="/Candidate"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Candidate
                  </CustomLink>
                  <CustomLink
                    to="/Company"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Company
                  </CustomLink>
                </div>
              </div>
              <div
                className={`dropdown ${
                  openDropdown === "signup" ? "dropdown-open" : ""
                }`}
              >
                <button
                  className="btn btn-outline dropdown-toggle"
                  onClick={() => handleDropdownToggle("signup")}
                >
                  Sign Up
                </button>
                <div className="dropdown-menu">
                  <CustomLink
                    to="/CandidateSignUp"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Candidate
                  </CustomLink>
                  <CustomLink
                    to="/CompanySignUp"
                    className="dropdown-item"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Company
                  </CustomLink>
                </div>
              </div>
            </>
          )}
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

function CustomLink({ to, className = "", children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      className={`nav-link ${isActive ? "active" : ""} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default Navbar;
