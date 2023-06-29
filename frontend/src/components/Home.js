import React from 'react';
import logo from '../images/logo.png';
import bg from '../images/bg.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../style/home.css'
const Home = () => {
    return (
    // <h1>Jai Shree Ram</h1>
    <>
        <div className="container-home">
             <div className='left-home'>
                <img src={bg} className="App-logo" alt='logo' /> 
            </div> 
           {/* <div className="right-home">
                {/* <img src={bg} className="App-logo" alt='logo' />   
            </div> */}

        </div>
      
    </>
    );
};

export default Home;