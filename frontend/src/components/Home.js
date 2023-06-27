import React from 'react';
import logo from '../logo.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Home = () => {
    return (
    // <h1>Jai Shree Ram</h1>
    <>
    <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' />  
       <Link to="/"> <button className="dropbtn ">Get Job</button></Link>
      </header>
      
    </>
    );
};

export default Home;