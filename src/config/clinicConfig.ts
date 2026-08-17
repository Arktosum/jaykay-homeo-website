export type ClinicId = 'jayakanthan' | 'vivekananthan';

export interface ClinicProfile {
  id: ClinicId;
  doctorName: string;
  clinicNameEn: string;
  clinicNameTa: string;
  themeColor: 'emerald' | 'sapphire';
  doctorImage: string | null;
  showDoctorForefront: boolean;
  mapsUrl: string;
}

export const CLINIC_PROFILES: Record<ClinicId, ClinicProfile> = {
  jayakanthan: {
    id: 'jayakanthan',
    doctorName: 'Dr.N.Jayakanthan',
    clinicNameEn: 'Jayakanthan Homeopathy Clinic',
    clinicNameTa: 'ஜெயகாந்தன் ஹோமியோபதி கிளினிக்',
    themeColor: 'emerald',
    doctorImage: null,
    showDoctorForefront: false,
    mapsUrl: 'https://maps.google.com/?q=Jayakanthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Amma+Iyer+Kulam+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu'
  },
  vivekananthan: {
    id: 'vivekananthan',
    doctorName: 'Dr.J.Vivekananthan',
    clinicNameEn: 'Vivekananthan Homeopathy Clinic',
    clinicNameTa: 'விவேகானந்தன் ஹோமியோபதி கிளினிக்',
    themeColor: 'sapphire',
    doctorImage: '/doctor-vivekananthan.jpg',
    showDoctorForefront: true,
    mapsUrl: 'https://maps.google.com/?q=Vivekananthan+Homeopathy+Clinic+39/24+Ganapathi+Nagar+Amma+Iyer+Kulam+Park+near+R.S.+Road+Perundurai+638052+Erode+District+Tamil+Nadu'
  }
};

export const getActiveClinicId = (): ClinicId => {
  // Check URL query param first for easy live preview (e.g. ?clinic=vivekananthan)
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const paramClinic = params.get('clinic')?.toLowerCase();
    if (paramClinic === 'vivekananthan' || paramClinic === 'vivek') {
      return 'vivekananthan';
    }
    if (paramClinic === 'jayakanthan' || paramClinic === 'dad') {
      return 'jayakanthan';
    }

    // Check hostname
    const host = window.location.hostname.toLowerCase();
    if (host.includes('vivek')) {
      return 'vivekananthan';
    }
  }

  // Check build environment variable VITE_CLINIC_ID
  const envClinic = import.meta.env.VITE_CLINIC_ID?.toLowerCase();
  if (envClinic === 'vivekananthan' || envClinic === 'vivek') {
    return 'vivekananthan';
  }

  // Default to Dr. N. Jayakanthan's clinic profile
  return 'jayakanthan';
};

export const getActiveClinicProfile = (): ClinicProfile => {
  const activeId = getActiveClinicId();
  return CLINIC_PROFILES[activeId];
};
