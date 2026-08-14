import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Clock, Calendar, Navigation, Info } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";

  return (
    <section id="contact" className="section-padding contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="badge">{content.contactSection.badge}</span>
          <h2 id="contact-heading" className="section-title">
            {content.contactSection.title}
          </h2>
        </div>

        <div className="contact-grid">
          {/* Address & Directions Card */}
          <div className="contact-card">
            <div className="contact-item-group">
              <div className="contact-icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--neutral-900)' }}>
                  {content.contactSection.addressHeader}
                </h3>

                <address className="address-box" style={{ fontStyle: 'normal' }}>
                  {content.contactSection.fullAddress.map((line, idx) => (
                    <div key={idx} style={{ fontWeight: idx === 0 ? 700 : 400 }}>
                      {line}
                    </div>
                  ))}
                </address>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              style={{ width: '100%', marginTop: 'auto' }}
              aria-label={content.contactSection.getDirectionsBtn}
            >
              <Navigation size={22} />
              <span>{content.contactSection.getDirectionsBtn}</span>
            </a>
          </div>

          {/* Contact & Hours Card */}
          <div className="contact-card">
            <div className="contact-item-group">
              <div className="contact-icon-wrapper" style={{ backgroundColor: 'var(--accent-600)' }}>
                <Phone size={24} />
              </div>
              <div style={{ width: '100%' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--neutral-900)' }}>
                  {content.contactSection.phoneHeader}
                </h3>
                
                <div className="phone-buttons-group">
                  <a href="tel:+919442726598" className="phone-link-btn" aria-label="Call 94427 26598">
                    <span>94427 26598</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-600)' }}>{content.contactSection.callBtn}</span>
                  </a>
                  <a href="tel:+918300948421" className="phone-link-btn" aria-label="Call 83009 48421">
                    <span>83009 48421</span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--accent-600)' }}>{content.contactSection.callBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--neutral-200)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Clock size={20} style={{ color: 'var(--primary-800)', flexShrink: 0 }} />
                <div>
                  <strong>{content.contactSection.hoursHeader}:</strong> {content.infoCards.hoursValue}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', backgroundColor: 'var(--gold-100)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--gold-600)' }}>
                <Calendar size={20} style={{ color: 'var(--gold-600)', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ color: 'var(--neutral-900)', fontWeight: 600 }}>
                  <strong>{content.contactSection.appointmentHeader}:</strong> {content.infoCards.appointmentText}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer */}
        <div className="disclaimer-card" role="note">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Info size={16} />
            <h4>{content.disclaimer.title}</h4>
          </div>
          <p>{content.disclaimer.text}</p>
        </div>
      </div>
    </section>
  );
};
