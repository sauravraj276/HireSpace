import React , {useState} from 'react'
import '../../styles/pages/profile.css'

function Candidateprofile_creation() {

//adding multiple educations function
    const [inputList, setInputList] = useState(['']);

    const handleInputChange = (index, event) => {
        const values = [...inputList];
        values[index] = event.target.value;
        setInputList(values);
    };

    const handleAddInput = () => {
        setInputList([...inputList, '']);
    };

    const handleRemoveInput = (index) => {
        const values = [...inputList];
        values.splice(index, 1);
        setInputList(values);
    };
//adding multiple project function
    const [inputListp, setInputListp] = useState(['']);

    const handleInputChangep = (index, event) => {
        const values = [...inputListp];
        values[index] = event.target.value;
        setInputListp(values);
    };

    const handleAddInputp = () => {
        setInputListp([...inputListp, '']);
    };

    const handleRemoveInputp = (index) => {
        const values = [...inputListp];
        values.splice(index, 1);
        setInputListp(values);
    };


  return (
    <>
    <div className="profile-candidate">
    <h1>Candidate Profile Creation</h1><br/>
        <div className='profile-candidate-container'>

           <form action='#' className='form-container'> 

                <div className='top-profile'>
                    <input type='file' className='form-field-job'></input>
                    <input type='text' className='form-field-job' placeholder='Name'></input>
                    <input type='text' className='form-field-job' placeholder='Job-Title'></input>
                    <input type='text'className='form-field-job' placeholder='Summary'></input>
                </div>
{/* basic-information section */}
                <div className='basic-info top-profile'>
                    <h2>Basic Information :</h2>
                    <input type='text' className='form-field-job' placeholder='Age'></input>
                    <input type='text' className='form-field-job' placeholder='Mobile Number'></input>
                    <input type='text' className='form-field-job' placeholder='Experience'></input>
                    <input type='text' className='form-field-job' placeholder='Income'></input>
                    <input type='text' className='form-field-job' placeholder='Email'></input>
                </div>
{/* required skill section                 */}
                <div className="top-profile">
                <h2>Required Skills :</h2>
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
                </div>

{/* education section */}
            <div className="education top-profile">
                <h2>Education :</h2>
                {inputList.map((inputValue, index) => (
                    <div key={index} className='display-ma'>
                    <input
                        type="text"
                        className='form-field-job'
                        // value={inputValue}
                        placeholder='College/School Name'
                        onChange={(event) => handleInputChange(index, event)}
                    />
                    <textarea type='text' className='form-field-job' placeholder='Description' onChange={(event) => handleInputChange(index, event)}></textarea>   
                    <button className="close-add" onClick={() => handleRemoveInput(index)}>&times;</button> 
                    
                    </div>
                ))}
                <button className='close-add'onClick={handleAddInput}>+</button>
            </div>
{/* project section */}
            <div className="education top-profile">
                <h2>Project :</h2>
                {inputListp.map((inputValue, index) => (
                    <div key={index} className='display-ma'>
                    <input
                        type="text"
                        className='form-field-job'
                        
                        placeholder='Project Name'
                        onChange={(event) => handleInputChangep(index, event)}
                    />
                    <textarea type='text' className='form-field-job' placeholder='Description' onChange={(event) => handleInputChangep(index, event)}></textarea>   
                    <button className="close-add" onClick={() => handleRemoveInputp(index)}>&times;</button> 
                    
                    </div>
                ))}
                <button className='close-add'onClick={handleAddInputp}>+</button>
            </div>
{/* certificate section */}
                <div className="Certificate top-profile ">
                    <h2>Certificate :</h2>
                        <input type='text' className='form-field-job' placeholder='Name'></input>
                        <textarea type='text' className='form-field-job' placeholder='Description'></textarea>
                </div>
{/* submit or reset  */}
                <button type="submit" className='btn-signup btn-ctrl'>Submit</button>
                <button type="reset" className='btn-signup btn-ctrl'>Reset</button>
                
            </form>

        </div>
    </div>


    </>
  )
}

export default Candidateprofile_creation