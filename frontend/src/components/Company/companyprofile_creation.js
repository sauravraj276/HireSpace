import React ,{useState,useEffect} from "react";
import {
  Link,
  useMatch,
  BrowserRouter as Router,
  useResolvedPath,
} from "react-router-dom";
import "../../style/profile_company.css";
import "../../style/profilecreate_company.css";

function Companyprofile_creation() {
  return (
    <>
    <div className="profile-company0">
      <div className="profile-company-container">
        <h2>Company Profile Creation</h2>
        <input type="file" className="form-field" name="photo" id="photo" placeholder="Png file"  /> <br/>
        <input type="text" className="form-field" name="name" id="name" placeholder="Name" required />
        <input type="text" className="form-field" name="Company" id="Company" placeholder="Company Name" required />
        <input type="text" className="form-field" name="website" id="website" placeholder="Website URL" required />
        <textarea type="textarea" className="form-field" name="desc" id="desc" placeholder="Company Description" required />
        <button type="submit" className='btn-signup btn-ctrl'>Submit</button>
        <button type="reset" className='btn-signup btn-ctrl'>Reset</button>
      </div>
    </div>
    </>
  )
}

export default Companyprofile_creation