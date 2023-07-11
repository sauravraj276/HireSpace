import React from 'react';
import '../style/home.css';
import FeaturedJob from '../components/FeaturedJob';
import ExploreByCategory from '../components/ExploreByCategory';

const Home = () => {
    return (
    <>
        <div className="container-home">
            
               <div className="content-home">
                <h2>Welcome to Your Hiring <span style={{ color: "#3A90C0" }}>Portal!</span></h2>
                <p>
                Connecting exceptional candidates with leading companies.
                </p>
                
                <div className="contain-search">                   
                    <div className="search-job-title">
                    <input type="text" className="form-field form-field-search" name="name" id="name" placeholder="Job-Title" />
                    </div>
                    <div className="search-city">
                    <input type="text" className="form-field form-field-search" name="name" id="name" placeholder="City" />
                    </div>
                    <button className='btn-search'>Search Job</button>
                </div>

               </div>
        </div>
        
        <ExploreByCategory />
        <FeaturedJob />
          
    </>
    );
};

export default Home;