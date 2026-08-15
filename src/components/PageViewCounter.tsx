import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Eye } from 'lucide-react';

export const PageViewCounter: React.FC = () => {
  const { content } = useLanguage();
  const [views, setViews] = useState<number>(1);

  useEffect(() => {
    const LOCAL_KEY = 'jaykay_total_page_views_count';
    const current = parseInt(localStorage.getItem(LOCAL_KEY) || '0', 10);
    const updated = current + 1;
    localStorage.setItem(LOCAL_KEY, updated.toString());
    setViews(updated);
  }, []);

  return (
    <div className="page-view-counter-badge" aria-label="Page views counter">
      <Eye size={15} className="view-icon" />
      <span>
        <strong>{views.toLocaleString()}</strong> {content.footer.pageViewsLabel}
      </span>
    </div>
  );
};
