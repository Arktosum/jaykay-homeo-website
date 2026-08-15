import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, ShieldCheck } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const { content } = useLanguage();
  const { stats } = content;

  return (
    <section className="stats-section" aria-label="Clinic Milestones and Statistics">
      <div className="container">
        <div className="stats-grid">
          <div className="card stat-card">
            <div className="stat-icon-wrapper">
              <Award size={28} className="stat-icon" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.yearsValue}</span>
              <span className="stat-label">{stats.yearsLabel}</span>
            </div>
          </div>

          <div className="card stat-card">
            <div className="stat-icon-wrapper">
              <Users size={28} className="stat-icon" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.patientsValue}</span>
              <span className="stat-label">{stats.patientsLabel}</span>
            </div>
          </div>

          <div className="card stat-card">
            <div className="stat-icon-wrapper">
              <ShieldCheck size={28} className="stat-icon" />
            </div>
            <div className="stat-content">
              <span className="stat-number">{stats.specialitiesValue}</span>
              <span className="stat-label">{stats.specialitiesLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
