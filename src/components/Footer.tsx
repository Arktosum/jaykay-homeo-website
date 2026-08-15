import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PageViewCounter } from './PageViewCounter';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <h2 className="footer-title">{content.clinicName}</h2>
        <p className="footer-sub">{content.footer.tagline}</p>

        <PageViewCounter />

        <p className="footer-copyright">
          © {year} {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
};
