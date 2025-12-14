import React, { useState } from 'react';
import '../../styles/components/search-bar.css';

const SearchBar = ({ onSearch }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ jobTitle, location });
  };
    
  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-wrapper">
        <input 
          className="search-input" 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          placeholder="Job Title" 
        />
      </div>
      <div className="search-input-wrapper">
        <input 
          className="search-input" 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Location" 
        />
      </div>
      <button type="submit" className="btn btn-primary search-submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;

