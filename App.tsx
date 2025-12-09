import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import SuccessPage from './pages/SuccessPage';
import NGOPage from './pages/NGOPage';
import PrivacyPage from './pages/PrivacyPage';
import LegalPage from './pages/LegalPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 min-h-screen flex flex-col max-w-7xl">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ong" element={<NGOPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;