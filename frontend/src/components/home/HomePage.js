import React from 'react';
import HeroCarousel from '../../components/common/HeroCarousel';
import FeaturedJob from '../../components/jobs/FeaturedJob';
import ExploreByCategory from '../../components/categories/ExploreByCategory';
import WhyChooseUs from '../../components/common/WhyChooseUs';
import '../../styles/pages/home.css';

const HomePage = () => {
  return (
    <>
      <div className="home-hero-wrapper">
        <HeroCarousel />
        <div className="home-search-overlay">
          <div className="container">
            <div className="home-search">
              <div className="search-input-group">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="Job Title" 
                />
              </div>
              <div className="search-input-group">
                <input 
                  type="text" 
                  className="search-input" 
                  placeholder="City" 
                />
              </div>
              <button className="btn btn-primary search-btn">
                Search Job
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <WhyChooseUs />
      <ExploreByCategory />
      <FeaturedJob />
    </>
  );
};

export default HomePage;

