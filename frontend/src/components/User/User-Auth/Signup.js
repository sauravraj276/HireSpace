import React, { useContext } from 'react';
import signup from '../../../images/login.png';
import google from '../../../images/google.svg';
import linkedin from '../../../images/linkedin.svg';
import '../../../style/signupe.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import candidateApi from '../../../api/axiosInstance'
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context';






function Signup() {
  const Navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mobile, setMobile] = useState("")
  const [isvalid, setValid] = useState(false)
  const [msg, setMessage]=useState("");
  const { appData} = useContext(AppContext);


  const handleSignup = (e) => {
    e.preventDefault();
    setValid(false);
    

    // Create a request body object
    const requestBody = {
      name,
      email,
      password,
      mobile,
    };
    candidateApi.post('/', requestBody)
      .then(data => {
        // if response is ok 200
        if (data.status === 200) {
          Navigate('/Candidate');

        }
        
        // else something went wrong throw error
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        setMessage(error.response.data.msg+"");
        setValid(true);
      });
  };

  useEffect(() => {

    if (appData.isLoggedIn) {
      Navigate('/Candidate')
    }
  });



  return (
    <div>
      <div className="container-sign">
        <div className="forms-container">
          <div className="left">
            <h2 className="form-title">Candidate Sign Up</h2>
            <form onSubmit={handleSignup} className="register-form" id="register-form">
              <div className="signup-icon">
                <Link to='/'>
                  <img src={google} alt="google" />
                </Link>
                <Link to='/About'>
                  <img src={linkedin} alt="linkedin" />
                </Link>
              </div>
              <h3>or</h3><br />
              <input type="text" className="form-field" name="name" id="name" placeholder="Your Name" required value={name} onChange={e => setName(e.target.value)} />
              <input type="email" className="form-field" name="email" id="email" placeholder="Your email" required value={email} onChange={e => setEmail(e.target.value)} />
              <input type="number" className="form-field" name="mobile" id="mob" placeholder="Mobile No." required value={mobile} onChange={e => setMobile(e.target.value)} />
              <input type="password" className="form-field" name="password" id="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
              <div className="form-field0">
              {isvalid ? <h3 style={{ color: "red" }}>{msg}</h3> : <></>}
                <input type="checkbox" required />I Accept Term of use & Privacy Policy.
              </div>
              <button className='btn-signup'>Sign Up</button>
              <div className="form-field1">
                <h3>Already have an account?<Link to='/Candidate'> Login</Link></h3>
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

export default Signup