import React, { useState } from 'react';
import '../../styles/components/sort-dropdown.css';

function SortByDropdown() {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort-select" className="sort-label">Sort by:</label>
      <select 
        id="sort-select"
        className="sort-select"
        value={sortBy} 
        onChange={handleSortChange}
      >
        <option value="">Most Relevant</option>
        <option value="name">Name</option>
        <option value="date">Date Posted</option>
        <option value="salary">Salary</option>
      </select>
    </div>
  );
}

export default SortByDropdown;

