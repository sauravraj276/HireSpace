import React, { useState } from 'react';
import "../style/findjob.css";

function SideFilter() {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  // Function to handle checkbox selection
  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    const isChecked = event.target.checked;

    // Update the selectedCheckboxes state based on checkbox selection
    if (isChecked) {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
    }
  };

  return (
    <div className="left-side" >
      <h3 className='SubHeading'>Type of Employment:</h3>
      <li className='Option' >
            
         <input type="checkbox" value="option1" 
  
          checked={selectedCheckboxes.includes('option1')}
          onChange={handleCheckboxChange} />
       
        <label> Full-Time</label>
      
          </li>
          <li className='Option' >
            
            <input type="checkbox" value="option2" 
     
             checked={selectedCheckboxes.includes('option2')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option3" 
     
             checked={selectedCheckboxes.includes('option3')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option4" 
     
             checked={selectedCheckboxes.includes('option4')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option'>
            
            <input type="checkbox" value="option5" 
     
             checked={selectedCheckboxes.includes('option5')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <h3 className='SubHeading'>Categories:</h3>
      <li className='Option' >
            
         <input type="checkbox" value="option6" 
  
          checked={selectedCheckboxes.includes('option6')}
          onChange={handleCheckboxChange} />
       
        <label> Full-Time</label>
      
          </li>
          <li className='Option' >
            
            <input type="checkbox" value="option7" 
     
             checked={selectedCheckboxes.includes('option7')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option8" 
     
             checked={selectedCheckboxes.includes('option8')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option9" 
     
             checked={selectedCheckboxes.includes('option9')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option'>
            
            <input type="checkbox" value="option10" 
     
             checked={selectedCheckboxes.includes('option10')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <h3 className='SubHeading'>Range Of Salary:</h3>
      <li className='Option' >
            
         <input type="checkbox" value="option11" 
  
          checked={selectedCheckboxes.includes('option11')}
          onChange={handleCheckboxChange} />
       
        <label> Full-Time</label>
      
          </li>
          <li className='Option' >
            
            <input type="checkbox" value="option12" 
     
             checked={selectedCheckboxes.includes('option12')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option13" 
     
             checked={selectedCheckboxes.includes('option13')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option' >
            
            <input type="checkbox" value="option14" 
     
             checked={selectedCheckboxes.includes('option14')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
             <li className='Option'>
            
            <input type="checkbox" value="option15" 
     
             checked={selectedCheckboxes.includes('option15')}
             onChange={handleCheckboxChange} />
          
           <label> Full-Time</label>
         
             </li>
      
     
      
    
    </div>
  );
}

export default SideFilter;
