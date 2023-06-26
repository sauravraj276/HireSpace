import React from "react";
import navbar_logo from '../navbar_logo.svg';
import '../style/footer_style.css';
import { Link } from "react-router-dom";

const Footer=()=> {
  return (
    <>
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
		   <div className="footer-col" id="right">
		   <Link to="/">
      <img src={navbar_logo} alt="Logo" width="151.1" height="50.2" padding="0"/> 
      </Link>
	  <p>Great platform for the job seeker that passionate about their dream. Find your dream job easier.</p>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><Link to="/Aboutus">about us</Link></li>
  	 				<li><Link to="#">our services</Link></li>
  	 				<li><Link to="#">privacy policy</Link></li>
  	 				<li><Link to="#">affiliate program</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Resources</h4>
  	 			<ul>
  	 				<li><Link to="#">Help Docs</Link></li>
  	 				<li><Link to="#">Guide</Link></li>
  	 				<li><Link to="#">Updates</Link></li>
  	 				<li><Link to="#">Contact Us</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Get job Notification</h4>
  	 			<div className="social-links">
					<p>The latests job news, articles, sent to your inbox weekly.</p>
  	 				<Link to="#"><i className="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i className="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i className="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i className="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  </>
  )
}

export default Footer
