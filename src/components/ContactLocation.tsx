import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Clock, Calendar, Navigation, Info, ExternalLink } from 'lucide-react';

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
          <div className="contact-card location-card-highlight">
            <div className="contact-item-group">
              <div className="contact-icon-wrapper map-icon-wrapper">
                <MapPin size={28} />
              </div>
              <div style={{ width: '100%' }}>
                <h3 className="location-card-title">
                  {content.contactSection.addressHeader}
                </h3>
                <span className="location-card-sub">
                  (Tap address or button below to open Google Maps)
                </span>

                {/* Clickable Address Box */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-box-clickable"
                  aria-label="Open location in Google Maps"
                >
                  <div className="address-lines">
                    {content.contactSection.fullAddress.map((line, idx) => (
                      <div key={idx} className={idx === 0 ? 'doctor-name-line' : ''}>
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="tap-map-hint">
                    <span>Google Maps</span>
                    <ExternalLink size={18} />
                  </div>
                </a>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large map-directions-btn"
              aria-label={content.contactSection.getDirectionsBtn}
            >
              <Navigation size={24} />
              <span>{content.contactSection.getDirectionsBtn}</span>
            </a>
          </div>

          {/* Contact & Hours Card */}
          <div className="contact-card">
            <div className="contact-item-group">
              <div className="contact-icon-wrapper phone-icon-wrapper">
                <Phone size={28} />
              </div>
              <div style={{ width: '100%' }}>
                <h3 className="location-card-title">
                  {content.contactSection.phoneHeader}
                </h3>
                
                <div className="phone-buttons-group">
                  <a href="tel:+919442726598" className="phone-link-btn" aria-label="Call 94427 26598">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Phone size={20} className="phone-btn-icon" />
                      <span>94427 26598</span>
                    </div>
                    <span className="call-now-badge">{content.contactSection.callBtn}</span>
                  </a>

                  <a href="tel:+918300948421" className="phone-link-btn" aria-label="Call 83009 48421">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <Phone size={20} className="phone-btn-icon" />
                      <span>83009 48421</span>
                    </div>
                    <span className="call-now-badge">{content.contactSection.callBtn}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hours-appointment-block">
              <div className="hours-row">
                <Clock size={22} className="hours-icon" />
                <div>
                  <strong>{content.contactSection.hoursHeader}:</strong> {content.infoCards.hoursValue}
                </div>
              </div>

              <div className="appointment-notice-box">
                <Calendar size={22} className="notice-icon" />
                <div>
                  <strong>{content.contactSection.appointmentHeader}:</strong> {content.infoCards.appointmentText}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Disclaimer */}
        <div className="disclaimer-card" role="note">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <Info size={18} />
            <h4>{content.disclaimer.title}</h4>
          </div>
          <p>{content.disclaimer.text}</p>
        </div>
      </div>
    </section>
  );
};
