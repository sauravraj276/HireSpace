import React from "react";
import SearchBar from "../../components/common/SearchBar";
import FindjobContent from "../../components/jobs/FindjobContent";
import "../../styles/pages/find-jobs.css";

const FindJobsPage = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (query) => {
    // setSearchQuery(query);
    // Perform search or filtering logic here
    // const filtered = // Perform your filtering logic using the search query
    // setFilteredResults(filtered);
    console.log("Search query:", query);
  };

  return (
    <div className="find-jobs-page">
      <div className="find-jobs-hero">
        <div className="container">
          <h1 className="page-title">Find Your Dream Job</h1>
          <p className="page-subtitle">
            Discover opportunities that match your skills and passion
          </p>
          <div className="search-container">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>
      <FindjobContent />
    </div>
  );
};

export default FindJobsPage;
