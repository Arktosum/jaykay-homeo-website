import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Award, Clock, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-stack">
            <div className="hero-badge">
              <Award size={18} />
              <span>{content.experienceBadge}</span>
            </div>

            <h1 id="hero-heading" className="hero-title">
              {content.hero.title}
            </h1>

            <p className="hero-subtext">
              {content.hero.subtext}
            </p>

            <div className="hero-actions">
              <a
                href="tel:+919442726598"
                className="btn btn-primary btn-large"
                aria-label={`${content.hero.callAction}: +91 94427 26598`}
              >
                <Phone size={22} />
                <span>{content.hero.callAction}</span>
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-large"
                aria-label={content.hero.directionsAction}
              >
                <MapPin size={22} />
                <span>{content.hero.directionsAction}</span>
              </a>
            </div>
          </div>

          <div className="hero-desktop-card card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.85rem', color: 'var(--color-action)' }}>
              {content.clinicName}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.98rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={20} style={{ color: 'var(--color-action)', flexShrink: 0 }} />
                <span>{content.infoCards.hoursTitle}: <strong>{content.infoCards.hoursValue}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Calendar size={20} style={{ color: 'var(--color-action)', flexShrink: 0 }} />
                <span>{content.infoCards.appointmentText}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Phone size={18} style={{ color: 'var(--color-action)', flexShrink: 0 }} />
                  <a href="tel:+919442726598" style={{ fontWeight: 700, color: 'var(--color-action)' }}>+91 94427 26598</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', paddingLeft: '1.75rem' }}>
                  <a href="tel:+918300948421" style={{ fontWeight: 700, color: 'var(--color-action)' }}>+91 83009 48421</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
