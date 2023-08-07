import React, { useState } from 'react';

import "../style/findjob.css";

// function SortByDropdown({ options, selectedOption, onSelectOption }) {
//   const [selectedOption, setSelectedOption] = useState('name');
//   const options = [
//     { value: 'most relevant', label: 'most relevant' },
//     { value: 'input2', label: 'bas job chahyie' },
//     { value: 'input3', label: 'bxsub' },
//   ];
  
//   const handleSortByChange = (options) => {
//     setSelectedOption(options);
// };
//   return (
//     <div className="sort-by-dropdown">
//       <label htmlFor="sort-by">Sort By:</label>
//       <select
//         id="sort-by"
//         value={selectedOption}
//         onChange={(e) => onSelectOption(e.target.value)}
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default SortByDropdown;
function SortByDropdown() {
  const [sortBy, setSortBy] = useState('');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <select  onChange={handleSortChange}>
      <option value="first">Sort by</option>
      <option value="name">Name</option>
      <option value="price">gyjgy</option>
      <option value="date">cjjg</option>
    </select>
  );
}

export default SortByDropdown;
