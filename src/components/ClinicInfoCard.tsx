import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, Calendar, MapPin } from 'lucide-react';

export const ClinicInfoCard: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="container" aria-label="Clinic Schedule & Policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Consolidated Advance Appointment Notice Banner */}
        <div className="notice-banner" role="note">
          <Calendar size={24} style={{ color: 'var(--color-notice-border)', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3>{content.infoCards.appointmentTitle}</h3>
            <p>{content.infoCards.appointmentText}</p>
          </div>
        </div>

        {/* Consulting Hours & Location Info Row */}
        <div className="card info-cards-row">
          <div className="info-card-item">
            <Clock size={22} className="info-card-icon" />
            <div>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', display: 'block' }}>
                {content.infoCards.hoursTitle}
              </span>
              <strong style={{ fontSize: '1.08rem', color: 'var(--color-text-main)' }}>
                {content.infoCards.hoursValue}
              </strong>
            </div>
          </div>

          <div className="info-card-item">
            <MapPin size={22} className="info-card-icon" />
            <div>
              <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', display: 'block' }}>
                {content.infoCards.addressTitle}
              </span>
              <strong style={{ fontSize: '1.08rem', color: 'var(--color-text-main)' }}>
                Perundurai, Erode
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
