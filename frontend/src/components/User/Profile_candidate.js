import React from 'react'
import '../../style/profile_candidate.css'
import img from '../../images/divy.png'
function Profile_candidate() {

  const { appData, updateAppData } = useContext(AppContext);


  return (
    <>
        <div className="candidate-container">
            <h1> Your Profile</h1>
            <div className="container-candidate">
                <div className="left-profile">

                    <img src={img} alt='profile-pic'></img>
        
                    <label>Name</label>
                        <p className="input-profile">{appData.candidate.name}</p>
                    <label>Student/Company</label>
                
                    <label>Summary</label>
                    <p className='input-profile'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit unde eius fugiat consequatur accusantium, magnam consequuntur praesentium. Nobis quaerat neque voluptatibus natus accusamus temporibus nihil dolorem fuga optio omnis. Similique.</p>
                
                    <label>Skills</label>
                    <p className='input-profile'>Skills</p>
                    
                </div>

                <div className="right-profile">
                    <div className="basic-info-profile">
                         <div className="align-box">
                            <label>Name</label> 
                            <p className="right-input-profile">Divyanshu</p>
                         </div>

                         <div className="align-box">
                            <label>Experience</label> 
                            <p className="right-input-profile">3 Year</p>
                          </div> 
                           <div className="align-box">                         
                            <label>Phone no.</label> 
                            <p className="right-input-profile">+91 9192631770</p>
                            </div>
                            <div className="align-box">                         
                            <label>CTC </label>
                            <p className="right-input-profile">7LPA</p>
                            </div>
                            <div className="align-box">                         
                            <label>Location</label> 
                            <p className="right-input-profile">Noida</p>
                            </div>
                             <div className="align-box">                    
                            <label>email </label>
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            </div>

                            <label>download-resume</label>
                            {/* <p className="right-input-profile">download</p>
                         */}
                    </div>

                    <div className="education-profile basic-info-profile">
                                                    
                            <span>Education :</span>
                            <div className="align-box0">
                             <p className="right-input-profile">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsum quam nisi porro voluptatibus doloribus quibusdam non repellat delectus molestiae dolorum maiores, atque dignissimos sapiente tenetur ullam. Modi, natus aliquid.</p>
                             <p className="right-input-profile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore quas repudiandae repellat velit mollitia, autem, adipisci, unde beatae dicta debitis atque ea cupiditate quidem explicabo praesentium et ipsa maxime?</p>
                            </div>
                            <div className="align-box0">
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            </div>
                            
                    </div>

                    <div className="education-profile basic-info-profile">
                                                    
                            <span>Projects :</span>
                            <div className="align-box0">
                             <p className="right-input-profile">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsum quam nisi porro voluptatibus doloribus quibusdam non repellat delectus molestiae dolorum maiores, atque dignissimos sapiente tenetur ullam. Modi, natus aliquid.</p>
                             <p className="right-input-profile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore quas repudiandae repellat velit mollitia, autem, adipisci, unde beatae dicta debitis atque ea cupiditate quidem explicabo praesentium et ipsa maxime?</p>
                            </div>
                            <div className="align-box0">
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            </div>
                            
                    </div>

                    <div className="certificate education-profile basic-info-profile">
                                                    
                            <span>Certificate:</span>
                            <div className="align-box0">
                             <p className="right-input-profile">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsum quam nisi porro voluptatibus doloribus quibusdam non repellat delectus molestiae dolorum maiores, atque dignissimos sapiente tenetur ullam. Modi, natus aliquid.</p>
                             <p className="right-input-profile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolore quas repudiandae repellat velit mollitia, autem, adipisci, unde beatae dicta debitis atque ea cupiditate quidem explicabo praesentium et ipsa maxime?</p>
                            </div>
                            <div className="align-box0">
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            <p className="right-input-profile">fakeprofile@gmail.com</p>
                            </div>
                            
                    </div>
                    
                </div>
            </div>
        </div>


    </>
  )
}

export default Profile_candidate