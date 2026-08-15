import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Navigation, ExternalLink, Info, Building, Compass } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const { content } = useLanguage();

  const mapsUrl = "https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Iyar+Amma+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu";
  const addr = content.contactSection.addressDetails;

  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="container">
        <div style={{ marginBottom: '1.25rem' }}>
          <h2 id="contact-heading" className="specialities-title">
            {content.contactSection.title}
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Phone Calling Card + Informational Notice */}
          <div className="contact-column">
            <div className="card phone-action-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={22} style={{ color: 'var(--color-action)' }} />
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)' }}>
                  {content.contactSection.phoneHeader}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a href="tel:+919442726598" className="phone-link-button" aria-label="Call +91 94427 26598">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Phone size={18} style={{ color: 'var(--color-action)', flexShrink: 0 }} />
                    <span className="phone-number-text">+91 94427 26598</span>
                  </div>
                  <span className="phone-call-badge">
                    {content.contactSection.callBtn}
                  </span>
                </a>

                <a href="tel:+918300948421" className="phone-link-button" aria-label="Call +91 83009 48421">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Phone size={18} style={{ color: 'var(--color-action)', flexShrink: 0 }} />
                    <span className="phone-number-text">+91 83009 48421</span>
                  </div>
                  <span className="phone-call-badge">
                    {content.contactSection.callBtn}
                  </span>
                </a>
              </div>
            </div>

            {/* Medical Notice */}
            <div className="card notice-info-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <Info size={18} style={{ color: 'var(--color-text-muted)' }} />
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{content.disclaimer.title}</h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.55' }}>
                {content.disclaimer.text}
              </p>
            </div>
          </div>

          {/* Right Column: Beautiful Structured Address Card */}
          <div className="contact-column">
            <div className="card address-map-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MapPin size={22} style={{ color: 'var(--color-action)' }} />
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-main)' }}>
                  {content.contactSection.addressHeader}
                </h3>
              </div>

              <address className="address-card-body">
                <div className="address-doctor-header">
                  <span className="address-doctor-name">{addr.doctor}</span>
                  <span className="address-doctor-tag">{content.doctorName} • Homeopathic Physician</span>
                </div>

                <div className="address-line-item">
                  <Building size={18} className="address-line-icon" />
                  <span>{addr.building}</span>
                </div>

                <div className="address-line-item">
                  <Compass size={18} className="address-line-icon" />
                  <span>{addr.street}</span>
                </div>

                <div className="address-line-item highlight-city">
                  <MapPin size={18} className="address-line-icon" />
                  <strong>{addr.cityPincode}</strong>
                </div>

                <div className="address-line-sub">
                  <span>{addr.districtState}</span>
                </div>
              </address>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
                aria-label={content.contactSection.getDirectionsBtn}
              >
                <Navigation size={20} />
                <span>{content.contactSection.getDirectionsBtn}</span>
                <ExternalLink size={16} style={{ opacity: 0.8 }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
