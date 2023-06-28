import React from 'react'
import signup from '../../../images/signup.png';
import person from  '../../../images/person.svg';
import '../../../style/signupe.css';

function SignupE() {
  return (
    <div>
      <div className="container-sign">
        <div className="forms-container">
          <div className="left">
                <h2 className="form-title">Sign Up</h2>
                <form action="#" className="register-form" id="register-form">
                    <input type="text" className="form-field" name="name" id="name" placeholder="Your Name" required />
                    <input type="email" className="form-field" name="email" id="email" placeholder="Your email" required/>
                    <input type="password" className="form-field" name="paswd" id="password" placeholder="Password" required />
                    <button className='btn-signup'>Sign Up</button>
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