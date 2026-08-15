import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye } from 'lucide-react';

export const PageViewCounter: React.FC = () => {
  const { content } = useLanguage();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const LOCAL_KEY = 'jaykay_total_page_views_raw';

    // Fetch persistent global count from counterapi.dev
    fetch('https://api.counterapi.dev/v1/jaykay-homeo-clinic-perundurai/pageviews/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setViews(data.count);
          localStorage.setItem(LOCAL_KEY, data.count.toString());
        }
      })
      .catch(() => {
        const localCount = parseInt(localStorage.getItem(LOCAL_KEY) || '1', 10);
        setViews(localCount);
      });
  }, []);

  return (
    <div className="page-view-counter-badge" aria-label="Page views counter">
      <Eye size={16} className="view-icon" />
      <span>
        <strong>{views !== null ? views.toLocaleString() : '...'}</strong> {content.footer.pageViewsLabel}
      </span>
    </div>
  );
};
