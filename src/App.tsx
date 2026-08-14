import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClinicInfoCard } from './components/ClinicInfoCard';
import { SpecialitiesGrid } from './components/SpecialitiesGrid';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Hero />
          <ClinicInfoCard />
          <SpecialitiesGrid />
          <ContactLocation />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </LanguageProvider>
  );
};

export default App;
