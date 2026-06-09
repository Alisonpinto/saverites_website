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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
