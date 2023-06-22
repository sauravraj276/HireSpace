import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import FeaturedJob from './components/FeaturedJob';
import Findjobs from './components/Findjobs';
import BrowseCompany from './components/BrowseCompany';
function App() {

  return (
    <div className="App">
                                   {/* navbar design*/}
                                   
      <div className="container">
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Findjobs" element={<Findjobs />} />
              <Route path="/BrowseCompany" element={<BrowseCompany />} />
            </Routes>
        </Router>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" />  
      </header>

      <FeaturedJob/>
      <Footer/>

    </div>
  );
}

export default App;
