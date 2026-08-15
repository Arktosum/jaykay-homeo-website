import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Navigation, ExternalLink, Info } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="container">
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 id="contact-heading" className="specialities-title">
            {content.contactSection.title}
          </h2>
        </div>

        <div className="contact-stack">
          {/* Direct Phone Calling Card */}
          <div className="card phone-action-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Phone size={24} style={{ color: 'var(--color-action)' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>
                {content.contactSection.phoneHeader}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+919442726598" className="phone-link-button" aria-label="Call +91 94427 26598">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={22} style={{ color: 'var(--color-action)' }} />
                  <span>+91 94427 26598</span>
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-action)', fontWeight: 700 }}>
                  {content.contactSection.callBtn}
                </span>
              </a>

              <a href="tel:+918300948421" className="phone-link-button" aria-label="Call +91 83009 48421">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={22} style={{ color: 'var(--color-action)' }} />
                  <span>+91 83009 48421</span>
                </div>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-action)', fontWeight: 700 }}>
                  {content.contactSection.callBtn}
                </span>
              </a>
            </div>
          </div>

          {/* Address & Google Maps Directions Card */}
          <div className="card address-map-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <MapPin size={24} style={{ color: 'var(--color-action)' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)' }}>
                {content.contactSection.addressHeader}
              </h3>
            </div>

            <address className="address-text-block">
              {content.contactSection.fullAddress.map((line, idx) => (
                <div key={idx} className={idx === 0 ? 'address-doctor-name' : ''}>
                  {line}
                </div>
              ))}
            </address>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              aria-label={content.contactSection.getDirectionsBtn}
            >
              <Navigation size={22} />
              <span>{content.contactSection.getDirectionsBtn}</span>
              <ExternalLink size={18} style={{ opacity: 0.8 }} />
            </a>
          </div>

          {/* Medical Notice */}
          <div className="card" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Info size={18} style={{ color: 'var(--color-text-muted)' }} />
              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{content.disclaimer.title}</h4>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{content.disclaimer.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
