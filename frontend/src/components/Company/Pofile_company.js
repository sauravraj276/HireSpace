import React ,{useState,useEffect} from "react";
import {
  Link,
  useMatch,
  BrowserRouter as Router,
  useResolvedPath,
} from "react-router-dom";
import "../../style/profile_company.css";
function Profile_company() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, []);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };
  return (
    <>
    {isOpen && (
    <div className="overlay active" onClick={handleModalClick}>
    <div className="post-job">
      <button className="close" onClick={closeModal}>&times;</button>
      <h2>POST JOB</h2>
      <form action="#" className="post-job show-post-job" id="post-job">
          <input type="file" className="form-field-job" name="name" id="photo" placeholder="Png file"  /> <br/>
          <input type="text" className="form-field-job" name="name" id="name" placeholder="Job Title" required />
          <select name="Job Time"className="form-field-job" id="Job_time" required>
            <option value="selected">Job Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Contract">Contract</option>
          </select>
          <input type="text" className="form-field-job" name="Company" id="Company" placeholder="Company Name" required />
          <input type="text" className="form-field-job" name="website" id="website" placeholder="Website URL" required />
          <select name="Job Type"className="form-field-job" id="Job_type" required>
            <option value="selected">Job Type</option>
            <option value="Remote">Remote</option>
            <option value="In Office">In Office</option>
          </select>
          <select name="Pay Scale"className="form-field-job" id="pay_scale" required>
            <option selected>Pay Scale(In LPA)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">7+ LPA</option>
          </select>
          <textarea type="textarea" className="form-field-job form-field-job0" name="desc" id="desc" placeholder="Job Description" required />
          <h3>Required Skills</h3>
          <select name="skills"className="form-field-job form-field-job0" id="skills" multiple required>
            <option value="Node.js">Node.js</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React.js">React.js</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="Ruby on Rails">Ruby on Rails</option>
            <option value="Angular">Angular</option>
            <option value="C#">C#</option>
            <option value="Vue.js">Vue.js</option>
            <option value="PHP">PHP</option>
            <option value="Swift">Swift</option>
            <option value=".NET">.NET</option>
            <option value="Go">Go</option>
            <option value="Rust">Rust</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Scala">Scala</option>
            <option value="Kotlin">Kotlin</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="SQL">SQL</option>
            <option value="AWS">AWS</option>
            <option value="Docker">Docker</option>

          </select>
          <button type="submit" className='btn-signup btn-ctrl'>Post Job</button>
          <button type="reset" className='btn-signup btn-ctrl'>Reset</button>
      </form>
    </div>
    </div>
    )}
      <div className="profile-company">
        <div className="job-first">
            <button className="btn-signup btn-job" id="trigger"  onClick={openModal}>Post a Job</button>
          
          <Link to="Posted_job">
            <button className="btn-signup btn-job">Your Posted Jobs</button>
          </Link>
        </div>
        <div className="job-second">
          <p>
            Step - 1 :- First of all, Press the Icon of First Right Corner of
            the page and Create a Profile.
            <br />
            Step - 2 :- Click on the Post an Internship Button.
            <br />
            Step - 3 :- After that Post an Internship form will appear.
            <br />
            Step - 4 :- Fill in the necessary details that are required for
            posting the internship.
            <br />
            Step - 5 :- After filling the necessary details click on the post
            button.
            <br />
            Step - 6 :- To check if internship has been posted or not go through
            the posted internships page and verify it.
            <br />
          </p>
        </div>
      </div>

    </>
  );

  
  // const trigger = document.querySelector('#trigger');
  // const modalWrapper = document.querySelector('.overlay');
  // const closeBtn = document.querySelector('.close');
  
  // trigger.addEventListener('click', function(){
  //     openModal();
  // });
  
  // closeBtn.addEventListener('click', function(){
  //     closeModal();
  // });
  
  // modalWrapper.addEventListener('click', function(e){
  //     if(e.target !== this) return;
  //     closeModal();
  // });
  
  // document.addEventListener('keydown', function(e){
  //     if(e.key === 'Escape') {
  //         closeModal();
  //     }
  // });
  
  // function openModal() {
  //     modalWrapper.classList.add('active');
  // }
  // function closeModal() {
  //     modalWrapper.classList.remove('active');
  // }

}

export default Profile_company;
