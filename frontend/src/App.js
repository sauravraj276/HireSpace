import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./components/home/HomePage";
import FindJobsPage from "./components/jobs/FindJobsPage";
import BrowseCompanyPage from "./components/companies/BrowseCompanyPage";
import CandidateLogin from "./auth/candidate/Login";
import CompanyLogin from "./auth/company/LoginE";
import CandidateSignUp from "./auth/candidate/Signup";
import CompanySignUp from "./auth/company/SignupE";
import ProfileCompany from "./components/Company/Pofile_company";
import CompanyProfileCreation from "./components/Company/Companyprofile_creation";
import CandidateProfileCreation from "./components/User/Candidateprofile_creation";
import ProfileCandidate from "./components/User/Profile_candidate";
import { AppContextProvider } from "./contexts/AppContext";
import ScrollToTop from "./components/common/ScrollToTop";

// Static Pages
import About from "./components/common/About";
import OurServices from "./components/common/OurServices";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import AffiliateProgram from "./components/common/AffiliateProgram";
import HelpDocs from "./components/common/HelpDocs";
import Guide from "./components/common/Guide";
import Updates from "./components/common/Updates";
import ContactUs from "./components/common/Contact";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Findjobs" element={<FindJobsPage />} />
              <Route path="/BrowseCompany" element={<BrowseCompanyPage />} />
              <Route path="/Candidate" element={<CandidateLogin />} />
              <Route path="/Company" element={<CompanyLogin />} />
              <Route path="/CandidateSignUp" element={<CandidateSignUp />} />
              <Route path="/CompanySignUp" element={<CompanySignUp />} />
              <Route path="/Profile_company" element={<ProfileCompany />} />
              <Route
                path="/Companyprofile_creation"
                element={<CompanyProfileCreation />}
              />
              <Route
                path="/Candidateprofile_creation"
                element={<CandidateProfileCreation />}
              />
              <Route path="/Profile_candidate" element={<ProfileCandidate />} />

              {/* Static Footer Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/affiliate" element={<AffiliateProgram />} />
              <Route path="/help" element={<HelpDocs />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/updates" element={<Updates />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </AppContextProvider>
  );
}

export default App;
