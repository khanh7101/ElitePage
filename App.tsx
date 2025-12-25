import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Packages } from './components/Packages';
import { Closing } from './components/Closing';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { ScrollToTop } from './components/ScrollToTop';
import { I18nProvider } from './contexts/i18nContext';

// Home page component
const Home: React.FC = () => (
  <>
    <Hero />
    <Intro />
    <Team />
    <Services />
    <Testimonials />
    <Packages />
    <Closing />
  </>
);

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-full min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </I18nProvider>
  );
}

export default App;