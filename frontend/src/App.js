import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Link, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import FeaturedJob from './components/FeaturedJob';
import Findjobs from './components/Findjobs';
import BrowseCompany from './components/BrowseCompany';
import Student from './components/User/User-Auth/Login';
import Company from './components/Company/Company-auth/LoginE';
import StudentSignUp from './components/User/User-Auth/Signup';
import CompanySignUp from './components/Company/Company-auth/SignupE';
import ExploreByCategory from './components/ExploreByCategory';
import About from './components/About';
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
              <Route path="/Student" element={<Student />} />
              <Route path="/Company" element={<Company />} />
              <Route path="/StudentSignUp" element={<StudentSignUp />} />
              <Route path="/CompanySignUp" element={<CompanySignUp />} />
            </Routes>
        </Router>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" />  
      </header>
      
      <Router>
      <ExploreByCategory/>
      </Router>

      <Router></Router>
      <Router>
      <FeaturedJob/>
      </Router>
      <Router>
      <Footer/>
      </Router>
      

    </div>
  );
}

export default App;
