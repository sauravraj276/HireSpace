import React from 'react'
import signup from '../../../images/signup.png';
import google from  '../../../images/google.svg';
import linkedin from  '../../../images/linkedin.svg';
import '../../../style/signupe.css';
import {Link} from 'react-router-dom';

function SignupE() {
  return (
    <div>
      <div className="container-sign">
        <div className="forms-container">
          <div className="left">
                <h2 className="form-title">Company Sign Up</h2>
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
                    <input type="email" className="form-field" name="email" id="email" placeholder="Your official email" required/>
                    <input type="password" className="form-field" name="paswd" id="password" placeholder="Password" required />
                    <div className="form-field0">  
                    <input type="checkbox" required/>I Accept Term of use & Privacy Policy.
                    </div>
                    <button className='btn-signup'>Sign Up</button>
                    <div className="form-field1">  
                    <h3>Already have an account?<Link to='/Company'> Login</Link></h3>
                    </div>
                </form>
            </div>

            <div className="right">
              <img src={signup} alt='signup'></img>
            </div>
        </div>
    </div>

    </div>
  )
}

export default SignupE