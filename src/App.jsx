import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Careers = lazy(() => import('./pages/Careers'));
const StaffAugmentation = lazy(() => import('./pages/StaffAugmentation'));
const DataCenter = lazy(() => import('./pages/DataCenter'));
const EnterpriseApplications = lazy(() => import('./pages/EnterpriseApplications'));
const AIDataAnalytics = lazy(() => import('./pages/AIDataAnalytics'));
const TechnologyServices = lazy(() => import('./pages/TechnologyServices'));
const ApplicationDevelopment = lazy(() => import('./pages/ApplicationDevelopment'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000',
    color: '#fff',
    fontSize: '1.2rem',
    fontFamily: 'Poppins, sans-serif'
  }}>
    <div className="loader-content">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/data-center" element={<DataCenter />} />
          <Route path="/enterprise-applications" element={<EnterpriseApplications />} />
          <Route path="/ai-data-analytics" element={<AIDataAnalytics />} />
          <Route path="/technology-services" element={<TechnologyServices />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
