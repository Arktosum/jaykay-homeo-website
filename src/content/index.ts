import type { Language, ClinicContent } from '../types';
import { enContent } from './en';
import { taContent } from './ta';

export const getContent = (lang: Language): ClinicContent => {
  return lang === 'ta' ? taContent : enContent;
};

export { enContent, taContent };
