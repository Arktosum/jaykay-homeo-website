export type Language = 'ta' | 'en';

export interface SpecialityItem {
  id: string;
  en: string;
  ta: string;
}

export interface SpecialityCategory {
  id: string;
  iconName: 'shield' | 'brain' | 'eye' | 'stethoscope' | 'heart' | 'utensils' | 'droplet' | 'activity' | 'sparkles' | 'users' | 'feather';
  enTitle: string;
  taTitle: string;
  items: SpecialityItem[];
}

export interface ClinicContent {
  clinicName: string;
  subtitle: string;
  tagline: string;
  doctorName: string;
  experienceYears: number;
  experienceBadge: string;
  
  nav: {
    home: string;
    specialities: string;
    about: string;
    contact: string;
    headerTitle: string;
    callAppointment: string;
    getDirections: string;
    stickyCall: string;
    stickyDirections: string;
  };

  hero: {
    badge: string;
    title: string;
    subtext: string;
    callAction: string;
    directionsAction: string;
    consultingTimeNotice: string;
  };

  stats: {
    yearsValue: string;
    yearsLabel: string;
    patientsValue: string;
    patientsLabel: string;
    specialitiesValue: string;
    specialitiesLabel: string;
  };

  infoCards: {
    hoursTitle: string;
    hoursValue: string;
    appointmentTitle: string;
    appointmentText: string;
    phoneTitle: string;
    addressTitle: string;
  };

  specialitiesSection: {
    badge: string;
    title: string;
    description: string;
    allTab: string;
    searchPlaceholder: string;
    noResults: string;
    totalCountLabel: string;
  };

  contactSection: {
    badge: string;
    title: string;
    addressHeader: string;
    fullAddress: string[];
    addressDetails: {
      doctor: string;
      building: string;
      street: string;
      cityPincode: string;
      districtState: string;
    };
    phoneHeader: string;
    hoursHeader: string;
    appointmentHeader: string;
    getDirectionsBtn: string;
    callBtn: string;
  };

  disclaimer: {
    title: string;
    text: string;
  };

  footer: {
    copyright: string;
    tagline: string;
  };

  categories: SpecialityCategory[];
}
