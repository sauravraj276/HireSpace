import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
// import FeaturedJob from './components/FeaturedJob';
import Findjobs from './components/Findjobs';
import BrowseCompany from './components/BrowseCompany';
import Candidate from './components/User/User-Auth/Login';
import Company from './components/Company/Company-auth/LoginE';
import CandidateSignUp from './components/User/User-Auth/Signup';
import CompanySignUp from './components/Company/Company-auth/SignupE';
import About from './components/About';
function App() {

  return (
    <div className="App">
      {/* navbar design*/}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Findjobs" element={<Findjobs />} />
          <Route path="/BrowseCompany" element={<BrowseCompany />} />
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/CandidateSignUp" element={<CandidateSignUp />} />
          <Route path="/CompanySignUp" element={<CompanySignUp />} />
        </Routes>
      </Router>
      

      <Router>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
