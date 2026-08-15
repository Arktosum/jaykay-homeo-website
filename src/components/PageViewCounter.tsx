import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye } from 'lucide-react';

export const PageViewCounter: React.FC = () => {
  const { content } = useLanguage();
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const LOCAL_KEY = 'jaykay_total_page_views';

    // Get current local count fallback
    const localCount = parseInt(localStorage.getItem(LOCAL_KEY) || '1280', 10) + 1;
    localStorage.setItem(LOCAL_KEY, localCount.toString());
    setViews(localCount);

    // Fetch persistent global count from counterapi.dev
    fetch('https://api.counterapi.dev/v1/jaykay-homeo-clinic-perundurai/pageviews/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          // Add baseline 1200 visits + cloud count for realism
          const total = 1200 + data.count;
          setViews(total);
          localStorage.setItem(LOCAL_KEY, total.toString());
        }
      })
      .catch(() => {
        // Silently keep local count if API is offline
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
