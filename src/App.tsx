import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import WhoWeServe from './pages/WhoWeServe';
import SavingsComparison from './pages/SavingsComparison';
import ServiceLines from './pages/ServiceLines';
import OurGuarantee from './pages/OurGuarantee';
import CaseStudies from './pages/CaseStudies';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Accessibility from './pages/Accessibility';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import TopicArchive from './pages/TopicArchive';
import { ContactModalProvider } from './context/ContactModalContext';

function AppShell() {
  const location = useLocation();

  return (
    <>
      <SEOHead pathname={location.pathname} />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/who-we-serve" element={<WhoWeServe />} />
              <Route path="/savings-comparison" element={<SavingsComparison />} />
              <Route path="/service-lines" element={<ServiceLines />} />
              <Route path="/our-guarantee" element={<OurGuarantee />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/topics/:taxonomySlug" element={<TopicArchive />} />

              {/* Legacy listing-site and legal slug redirects */}
              <Route path="/residence" element={<Navigate to="/our-story" replace />} />
              <Route path="/neighborhood" element={<Navigate to="/who-we-serve" replace />} />
              <Route path="/schools" element={<Navigate to="/savings-comparison" replace />} />
              <Route path="/gallery" element={<Navigate to="/case-studies" replace />} />
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
            </Routes>
          </main>
          <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <Router>
        <AppShell />
      </Router>
    </ContactModalProvider>
  );
}
