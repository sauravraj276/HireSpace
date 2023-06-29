import React from 'react';
import login from '../../../images/login.png';
import google from  '../../../images/google.svg';
import linkedin from  '../../../images/linkedin.svg';
import '../../../style/login.css';
import {Link} from 'react-router-dom';


function Login() {
  return (
    <div>
    <div className="container-sign">
      <div className="forms-container">
      <div className="left-login">
            <img src={login} alt='login'></img>
      </div>

        <div className="right-login">
              
              <h2 className="form-title form-title-login">Candidate Login</h2>
              <form action="#" className="register-form" id="register-form">
                  <div className="signup-icon">
                    <Link to='/'>
                    <img src={google} alt="google" />
                    </Link>
                    <Link to='/About'>
                    <img src={linkedin} alt="linkedin" />
                    </Link>
                  </div>
                  <h3>or</h3><br/>
                  <input type="text" className="form-field" name="name" id="name" placeholder="Your Name" required />
                  <input type="password" className="form-field" name="paswd" id="password" placeholder="Password" required />
                  <button className='btn-signup'>Login</button>
                  <div className="form-field1">  
                  <h3>Don't have an account?<Link to='/CandidateSignUp'> Sign Up</Link></h3>
                  </div>
              </form>

        </div>

      </div>
  </div>

  </div>
  )
}

export default Login