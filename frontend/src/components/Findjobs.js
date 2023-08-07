import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FindjobContent from '../components/FindjobContent';
import "../style/findjob.css";
import { Users } from './user';


const Findjobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search or filtering logic here
    const filtered = // Perform your filtering logic using the search query
    setFilteredResults(filtered);
  };

  return (<>
        <div className='container_j'>
          <p className='line1'> Find your dream job</p>
          <p className='line2'>ubbc hsubs jsxix jshuix</p>
          
         <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        </div>
        {/* Display the filtered results */}
         {filteredResults.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))} 
        </div>
        <FindjobContent/>
        </>

  );
};

export default Findjobs;

