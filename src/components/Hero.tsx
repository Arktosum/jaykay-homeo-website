import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Award, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-content">
          <div>
            <span className="badge badge-gold">
              <Award size={16} />
              {content.experienceBadge}
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            {content.hero.title}
          </h1>

          <p className="hero-subtext">
            {content.hero.subtext}
          </p>

          <div className="hero-notice-card" role="note">
            <Clock size={20} style={{ flexShrink: 0 }} />
            <span>{content.hero.consultingTimeNotice}</span>
          </div>

          <div className="hero-cta-group">
            <a
              href="tel:+919442726598"
              className="btn btn-accent btn-large full-width-mobile"
              aria-label={`${content.hero.callAction}: 94427 26598`}
            >
              <Phone size={22} />
              <span>{content.hero.callAction}</span>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-large full-width-mobile"
              aria-label={content.hero.directionsAction}
            >
              <MapPin size={22} />
              <span>{content.hero.directionsAction}</span>
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="doctor-header-info">
            <h2 className="doctor-info-title">{content.doctorName}</h2>
            <p className="doctor-exp-tag">{content.tagline}</p>
          </div>

          <div className="phone-quick-section">
            <h3 className="phone-section-title">
              {content.infoCards.phoneTitle}
            </h3>
            <div className="phone-stack">
              <a href="tel:+919442726598" className="hero-phone-chip">
                <Phone size={20} />
                <span>94427 26598</span>
              </a>
              <a href="tel:+918300948421" className="hero-phone-chip">
                <Phone size={20} />
                <span>83009 48421</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
