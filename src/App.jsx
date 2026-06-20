import { Routes, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPage';
import TermsConditions from './pages/TermsConditions';
import CommunityGuidelines from './pages/CommunityGuidelines';
import AccountDeletionPolicy from './pages/AccountDeletionPolicy';
import AboutDeveloper from './pages/AboutDeveloper';
import Contact from './pages/Contact';
import Support from './pages/Support';
import EarlyAccess from './pages/EarlyAccess';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
          <Route path="/account-deletion-policy" element={<AccountDeletionPolicy />} />
          <Route path="/about-developer" element={<AboutDeveloper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/early-access" element={<EarlyAccess />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
