import React from 'react'
import '../../style/profile_candidate.css'
function Profile_candidate() {
  return (
    <>
        <div className="candidate-container">
            <h1> Your Profile</h1>
            <div className="container-candidate">
                <div className="left-profile">
                    <img src='#' alt='profile-pic'></img>
                    <div className="input-profile">
                        <h1>Name</h1>
                            <p>Divyanshu</p>
                        <h1>Student/Company</h1>
                    </div>
                    <div className="input-profile">
                        <h1>Summary</h1>
                        <p className='desc-profile'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde eius fugiat consequatur accusantium, magnam consequuntur praesentium. Nobis quaerat neque voluptatibus natus accusamus temporibus nihil dolorem fuga optio omnis. Similique.</p>
                    </div>
                    <div className="input-profile">
                        <p className='desc-profile'>Skills</p>
                    </div>
                    
                </div>

                <div className="right-profile">
                    <div className="basic-info-profile">
                        <div className="input-profile">
                            <h1>Name</h1> 
                            <p>Divyanshu</p>
                        </div>
                        <div className="input-profile">
                            <h1>Experience</h1> 
                            <p>3 Year</p>
                        </div>
                        <div className="input-profile">                            
                            <h1>Phone no.</h1> 
                            <p>+91 9192631770</p>
                        </div>
                        <div className="input-profile">                            
                            <h1>CTC </h1>
                            <p>7LPA</p>
                        </div>
                        <div className="input-profile">                            
                            <h1>Location</h1> 
                            <p>Noida</p>
                        </div>
                        <div className="input-profile">                            
                            <h1>email </h1>
                            <p>fakeprofile@gmail.com</p>
                        </div>
                        <div className="input-profile">                            
                            <h1>download-resume</h1>
                            <p>download</p>
                        </div>
                    </div>

                    <div className="education-profile">
                        <div className="input-profile">                            
                            <h1>Education</h1>
                        </div>
                    </div>

                    <div className="project">
                        <div className="input-profile">                            
                            <h1>Project</h1>
                        </div>
                    </div>

                    <div className="certificate">
                        <div className="input-profile">                                                     
                        <h1>Certificate</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


    </>
  )
}

export default Profile_candidate