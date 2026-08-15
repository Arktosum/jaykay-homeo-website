import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <div className="mobile-sticky-bar" role="region" aria-label="Quick Mobile Actions">
      <a
        href="tel:+919442726598"
        className="btn btn-primary sticky-action-btn"
        aria-label={`${content.nav.callAppointment}: 94427 26598`}
      >
        <Phone size={20} style={{ flexShrink: 0 }} />
        <span>{content.nav.stickyCall}</span>
      </a>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline sticky-action-btn"
        aria-label={content.nav.getDirections}
      >
        <MapPin size={20} style={{ flexShrink: 0 }} />
        <span>{content.nav.stickyDirections}</span>
      </a>
    </div>
  );
};
