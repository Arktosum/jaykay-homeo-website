import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-stack">
          <div className="hero-badge">
            <Award size={18} />
            <span>{content.experienceBadge}</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            {content.hero.title}
          </h1>

          <div className="hero-doctor-name">
            {content.doctorName}
          </div>

          <p className="hero-subtext">
            {content.hero.subtext}
          </p>

          <div className="hero-actions">
            <a
              href="tel:+919442726598"
              className="btn btn-primary btn-large"
              aria-label={`${content.hero.callAction}: 94427 26598`}
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
      </div>
    </section>
  );
};
