import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, CalendarCheck, MapPin } from 'lucide-react';

export const ClinicInfoCard: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="container" aria-label="Key Clinic Details">
      <div className="info-cards-grid">
        <div className="info-card">
          <div className="info-card-icon">
            <Clock size={24} />
          </div>
          <div className="info-card-content">
            <h3>{content.infoCards.hoursTitle}</h3>
            <p className="info-card-highlight">{content.infoCards.hoursValue}</p>
          </div>
        </div>

        <div className="info-card" style={{ borderColor: 'var(--gold-500)', backgroundColor: 'var(--gold-50)' }}>
          <div className="info-card-icon" style={{ backgroundColor: 'var(--gold-100)', color: 'var(--gold-600)' }}>
            <CalendarCheck size={24} />
          </div>
          <div className="info-card-content">
            <h3 style={{ color: 'var(--gold-600)' }}>{content.infoCards.appointmentTitle}</h3>
            <p style={{ fontWeight: 600, color: 'var(--neutral-800)' }}>{content.infoCards.appointmentText}</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">
            <MapPin size={24} />
          </div>
          <div className="info-card-content">
            <h3>{content.infoCards.addressTitle}</h3>
            <p>Perundurai, Erode District, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
};
