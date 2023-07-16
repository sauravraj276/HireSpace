import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search or other actions with the searchQuery
    console.log('Search query:', searchQuery);
    onSearch(searchQuery);
  };
    
  return (
    <form onSubmit={handleSearchSubmit}>
        <div className="search-button-container">
      <input className='search1'type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Job tittle " />
      <input className='search1' type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Location" />
      
      <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
