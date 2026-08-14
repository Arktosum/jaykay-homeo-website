import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Shield, Brain, Eye, Heart, Stethoscope, Feather, 
  Utensils, Droplet, Activity, Sparkles, Users, Search, CheckCircle2 
} from 'lucide-react';
import type { SpecialityCategory } from '../types';

export const SpecialitiesGrid: React.FC = () => {
  const { language, content } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: SpecialityCategory['iconName']) => {
    const props = { size: 22 };
    switch (iconName) {
      case 'shield': return <Shield {...props} />;
      case 'brain': return <Brain {...props} />;
      case 'eye': return <Eye {...props} />;
      case 'heart': return <Heart {...props} />;
      case 'stethoscope': return <Stethoscope {...props} />;
      case 'feather': return <Feather {...props} />;
      case 'utensils': return <Utensils {...props} />;
      case 'droplet': return <Droplet {...props} />;
      case 'activity': return <Activity {...props} />;
      case 'sparkles': return <Sparkles {...props} />;
      case 'users': return <Users {...props} />;
      default: return <Shield {...props} />;
    }
  };

  const filteredCategories = content.categories.map(category => {
    const matchingItems = category.items.filter(item => {
      const query = searchTerm.toLowerCase().trim();
      if (!query) return true;
      return (
        item.en.toLowerCase().includes(query) ||
        item.ta.toLowerCase().includes(query) ||
        category.enTitle.toLowerCase().includes(query) ||
        category.taTitle.toLowerCase().includes(query)
      );
    });

    return {
      ...category,
      items: matchingItems
    };
  }).filter(category => category.items.length > 0);

  return (
    <section id="specialities" className="section-padding specialities-section" aria-labelledby="specialities-heading">
      <div className="container">
        <div className="section-header">
          <span className="badge">{content.specialitiesSection.badge}</span>
          <h2 id="specialities-heading" className="section-title">
            {content.specialitiesSection.title}
          </h2>
          <p className="section-description">
            {content.specialitiesSection.description}
          </p>
        </div>

        <div className="specialities-controls">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              className="search-input"
              placeholder={content.specialitiesSection.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label={content.specialitiesSection.searchPlaceholder}
            />
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'var(--white)', borderRadius: 'var(--radius-md)' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--neutral-600)' }}>
              {content.specialitiesSection.noResults}
            </p>
          </div>
        ) : (
          <div className="categories-grid">
            {filteredCategories.map(category => (
              <div key={category.id} className="category-card">
                <div className="category-card-header">
                  <div className="category-icon-box">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="category-card-title">
                    {language === 'ta' ? category.taTitle : category.enTitle}
                  </h3>
                </div>

                <ul className="condition-list">
                  {category.items.map(item => (
                    <li key={item.id} className="condition-item">
                      <CheckCircle2 className="condition-bullet" size={18} />
                      <span>{language === 'ta' ? item.ta : item.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
