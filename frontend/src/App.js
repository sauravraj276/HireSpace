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
import Profile_company from './components/Company/Pofile_company';
import Companyprofile_creation from './components/Company/Companyprofile_creation';
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
          <Route path="Profile_company" element={<Profile_company />}/>
          <Route path="Companyprofile_creation" element={<Companyprofile_creation/>}/>
        </Routes>
      </Router>
      

      <Router>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;
