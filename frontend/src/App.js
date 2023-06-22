import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedJob from './components/FeaturedJob';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" />  
      </header>
      <FeaturedJob/>
      <Footer/>

    </div>
  );
}

export default App;
