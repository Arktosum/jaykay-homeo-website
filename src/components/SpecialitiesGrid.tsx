import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Shield, Brain, Eye, Heart, Stethoscope, Feather, 
  Utensils, Droplet, Activity, Sparkles, Users, 
  CheckCircle2, ChevronDown, ChevronUp 
} from 'lucide-react';
import type { SpecialityCategory } from '../types';

export const SpecialitiesGrid: React.FC = () => {
  const { language, content } = useLanguage();
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategoryId(prev => (prev === categoryId ? null : categoryId));
  };

  const getCategoryIcon = (iconName: SpecialityCategory['iconName']) => {
    const props = { size: 24, className: 'category-icon' };
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

  const tapHintText = language === 'ta' ? 'நோய்களைக் காண தொடவும்' : 'Tap to view conditions';

  return (
    <section id="specialities" className="section-padding" aria-labelledby="specialities-heading">
      <div className="container">
        <div className="specialities-header">
          <h2 id="specialities-heading" className="specialities-title">
            {content.specialitiesSection.title}
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem' }}>
            {content.specialitiesSection.description}
          </p>
        </div>

        <div className="categories-accordion-grid">
          {content.categories.map(category => {
            const isExpanded = expandedCategoryId === category.id;
            const title = language === 'ta' ? category.taTitle : category.enTitle;

            return (
              <div 
                key={category.id} 
                className={`card card-interactive category-accordion-card ${isExpanded ? 'active-expanded' : ''}`}
              >
                <button
                  type="button"
                  className="category-accordion-header"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isExpanded}
                  aria-label={`${title} - ${tapHintText}`}
                  style={{ width: '100%' }}
                >
                  <div className="category-title-group">
                    {getCategoryIcon(category.iconName)}
                    <span className="category-name">{title}</span>
                  </div>

                  <div style={{ flexShrink: 0, color: 'var(--color-action)' }}>
                    {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </button>

                <div className="category-tap-hint" onClick={() => toggleCategory(category.id)}>
                  <span>{tapHintText}</span>
                </div>

                {isExpanded && (
                  <div className="category-expanded-content">
                    {category.items.map(item => (
                      <div key={item.id} className="condition-pill">
                        <CheckCircle2 size={18} className="condition-check" />
                        <span>{language === 'ta' ? item.ta : item.en}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
