import React, { useContext } from 'react';
import login from '../../../images/login.png';
import google from '../../../images/google.svg';
import linkedin from '../../../images/linkedin.svg';
import '../../../style/login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import candidateApi from '../../../api/axiosInstance'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context';




function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isvalid, setValid] = useState(false);
  const { appData, updateAppData } = useContext(AppContext);
  
  const handleLogin = (e) => {
    e.preventDefault();
    setValid(false);

    // Create a request body object
    const requestBody = {
      email,
      password
    };
    candidateApi.post('/login', requestBody)
      .then(data => {
        // if response is ok 200
        if (data.status === 200) {
          localStorage.setItem('token', data.data.token);
          // console.log(data.data.candidate);
          updateAppData({isLoggedIn:true,candidate:{...data.data.candidate}});
          Navigate('/Profile_candidate');

        }
        

        // else something went wrong throw error


      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        setValid(true);
      });
  };

  useEffect(() => {

    if (appData.isLoggedIn) {
      Navigate('/Profile_candidate')
    }
  });

  return (
    <div>
      <div className="container-sign">
        <div className="forms-container">
          <div className="left-login">
            <img src={login} alt='login'></img>
          </div>

          <div className="right-login">

            <h2 className="form-title form-title-login">Candidate Login</h2>
            <form onSubmit={handleLogin} className="register-form" id="register-form">
              <div className="signup-icon">
                <Link to='/'>
                  <img src={google} alt="google" />
                </Link>
                <Link to='/About'>
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </div>
              <h3>or</h3><br />
              <input type="text" className="form-field" name="email" id="email" placeholder="Your Email" required value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" className="form-field" name="paswd" id="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
              <button className='btn-signup'>Login</button>
              <div className="form-field1">
                {isvalid ? <h3 style={{ color: "red" }}>Invalid Credentials</h3> : <></>}
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