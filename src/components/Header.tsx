import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header: React.FC = () => {
  const { language, setLanguage, content } = useLanguage();

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="#home" className="brand-info" aria-label={content.clinicName}>
          <img src="/logo.png" alt="Medical Green Cross Logo" className="brand-logo" />
          <span className="brand-name">{content.nav.headerTitle}</span>
        </a>

        <div className="header-nav-right">
          <nav aria-label="Main Navigation" className="desktop-nav-links">
            <a href="#specialities" className="nav-link">{content.nav.specialities}</a>
            <a href="#contact" className="nav-link">{content.nav.contact}</a>
          </nav>

          <nav aria-label="Language selection" className="lang-switcher">
            <button
              type="button"
              className={`lang-btn ${language === 'ta' ? 'active' : ''}`}
              onClick={() => setLanguage('ta')}
              aria-pressed={language === 'ta'}
              aria-label="மாற்றவும் தமிழ் மொழி"
            >
              தமிழ்
            </button>
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              aria-label="Switch to English language"
            >
              English
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
