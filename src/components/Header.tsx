import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, setLanguage, content } = useLanguage();

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a href="#home" className="brand-link" aria-label={content.clinicName}>
          <div className="brand-logo-icon" aria-hidden="true">
            <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>JH</span>
          </div>
          <div className="brand-info">
            <span className="brand-name">{content.clinicName}</span>
            <span className="brand-sub">{content.tagline}</span>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Quick Header Call Button for Desktop/Tablet */}
          <a
            href="tel:+919442726598"
            className="btn btn-outline"
            style={{ display: 'none', minHeight: '40px', padding: '0.4rem 0.9rem', fontSize: '0.88rem' }}
            aria-label={`${content.nav.callAppointment}: 94427 26598`}
          >
            <Phone size={16} />
            <span>94427 26598</span>
          </a>

          {/* Language Switcher */}
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
