import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TheResidence from './pages/TheResidence';
import Neighborhood from './pages/Neighborhood';
import Schools from './pages/Schools';
import Gallery from './pages/Gallery';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import { ContactModalProvider } from './context/ContactModalContext';

export default function App() {
  return (
    <ContactModalProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/residence" element={<TheResidence />} />
              <Route path="/neighborhood" element={<Neighborhood />} />
              <Route path="/schools" element={<Schools />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ContactModalProvider>
  );
}
