import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedAdminRoute from './components/auth/ProtectedAdminRoute';
import { ContactModalProvider } from './context/ContactModalContext';
import { AuthProvider } from './context/AuthContext';
import AmbientBackground from './components/braveheart/AmbientBackground';
import MobileContactBar from './components/braveheart/MobileContactBar';

const Home = lazy(() => import('./pages/Home'));
const OurStory = lazy(() => import('./pages/OurStory'));
const WhoWeServe = lazy(() => import('./pages/WhoWeServe'));
const SavingsComparison = lazy(() => import('./pages/SavingsComparison'));
const ServiceLines = lazy(() => import('./pages/ServiceLines'));
const OurGuarantee = lazy(() => import('./pages/OurGuarantee'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Accessibility = lazy(() => import('./pages/Accessibility'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const TopicArchive = lazy(() => import('./pages/TopicArchive'));
const Account = lazy(() => import('./pages/Account'));
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'));

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-hidden="true">
      <div className="h-8 w-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
    </div>
  );
}

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  return (
    <>
      <SEOHead pathname={location.pathname} />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <AmbientBackground />
        <Navbar />
        <MobileContactBar />
        <div className="ambient-bg flex flex-col flex-grow pb-16 2xl:pb-0">
          <main className="flex-grow">
            <Suspense fallback={<RouteFallback />}>
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
                <Route path="/account" element={<Account />} />
                <Route
                  path="/admin/blog"
                  element={
                    <ProtectedAdminRoute>
                      <AdminBlog />
                    </ProtectedAdminRoute>
                  }
                />

                {/* Legacy listing-site and legal slug redirects */}
                <Route path="/residence" element={<Navigate to="/our-story" replace />} />
                <Route path="/neighborhood" element={<Navigate to="/who-we-serve" replace />} />
                <Route path="/schools" element={<Navigate to="/savings-comparison" replace />} />
                <Route path="/gallery" element={<Navigate to="/case-studies" replace />} />
                <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
                <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <Router>
        <AuthProvider>
          <AppShell />
        </AuthProvider>
      </Router>
    </ContactModalProvider>
  );
}
