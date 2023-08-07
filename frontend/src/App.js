import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
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
import ProfileCompany from './components/Company/Pofile_company';
import CompanyProfileCreation from './components/Company/Companyprofile_creation';
import CandidateProfileCreation from './components/User/Candidateprofile_creation';
import ProfileCandidate from './components/User/Profile_candidate';
import {AppContextProvider} from './context';
// import About from './components/About';
function App() {

  return (
    <AppContextProvider>
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
            <Route path="/Profile_company" element={<ProfileCompany />} />
            <Route path="/Companyprofile_creation" element={<CompanyProfileCreation />} />
            <Route path="/Candidateprofile_creation" element={<CandidateProfileCreation />} />
            <Route path="/Profile_candidate" element={<ProfileCandidate />} />
          </Routes>
        </Router>
        <Router>
          <Footer />
        </Router>
      </div>
    </AppContextProvider>

  );
}

export default App;
