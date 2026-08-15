import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye } from 'lucide-react';

export const PageViewCounter: React.FC = () => {
  const { content } = useLanguage();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://hits.dwyl.com/Arktosum/jaykay-homeo-website.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.message) {
          const count = parseInt(data.message, 10);
          if (!isNaN(count)) {
            setViews(count);
          }
        }
      })
      .catch(() => {
        setViews(1);
      });
  }, []);

  return (
    <div className="page-view-counter-badge" aria-label="Page views counter">
      <Eye size={15} className="view-icon" />
      <span>
        <strong>{views !== null ? views.toLocaleString() : '...'}</strong> {content.footer.pageViewsLabel}
      </span>
    </div>
  );
};
