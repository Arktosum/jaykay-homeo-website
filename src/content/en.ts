import type { ClinicContent } from '../types';

export const enContent: ClinicContent = {
  clinicName: "Jayakanthan Homeopathy Clinic",
  subtitle: "Pure Homeopathic Medical Care",
  tagline: "High class original pure homeopathy of 42 years of experience",
  doctorName: "Dr.N.Jayakanthan",
  experienceYears: 42,
  experienceBadge: "42 Years Experience",

  nav: {
    home: "Home",
    specialities: "Specialities",
    about: "About Clinic",
    contact: "Contact & Location",
    headerTitle: "Jayakanthan Homeopathy Clinic",
    callAppointment: "Call for Appointment",
    getDirections: "Tap for Map Route",
    stickyCall: "Call Now",
    stickyDirections: "Directions"
  },

  hero: {
    badge: "42 Years of Experience",
    title: "Jayakanthan Homeopathy Clinic",
    subtext: "High class original pure homeopathy of 42 years of experience by Dr.N.Jayakanthan in Perundurai.",
    callAction: "Call for Appointment",
    directionsAction: "Get Directions",
    consultingTimeNotice: "Consulting Hours: 10:00 AM to 05:00 PM"
  },

  infoCards: {
    hoursTitle: "Consulting Hours",
    hoursValue: "10:00 AM – 05:00 PM",
    appointmentTitle: "Advance Appointment Rule",
    appointmentText: "Please get appointment one day in advance by phone.",
    phoneTitle: "Direct Phone Contact",
    addressTitle: "Clinic Location"
  },

  specialitiesSection: {
    badge: "Specialized Treatments",
    title: "Specialist in the Following",
    description: "Experienced pure homeopathic treatment for chronic diseases and specialist care.",
    allTab: "All Specialities",
    searchPlaceholder: "Search condition (e.g. Headache, Asthma, Skin...)",
    noResults: "No matching condition found.",
    totalCountLabel: "Total Specialized Services Covered"
  },

  contactSection: {
    badge: "Location & Phone",
    title: "Contact & Location Details",
    addressHeader: "Clinic Address",
    fullAddress: [
      "Dr.N.Jayakanthan",
      "39/24 Ganapathi Nagar",
      "Iyar Amma Park near",
      "R.S. Road",
      "Perundurai",
      "638 052",
      "Erode District",
      "Tamil Nadu"
    ],
    phoneHeader: "Appointment Phone Numbers",
    hoursHeader: "Consulting Hours",
    appointmentHeader: "Appointment Requirement",
    getDirectionsBtn: "Get Directions on Google Maps",
    callBtn: "Call Now"
  },

  disclaimer: {
    title: "Informational Notice",
    text: "Homeopathy treatments are provided based on individual case history and consultation. Please consult Dr.N.Jayakanthan directly at the clinic for personalized guidance."
  },

  footer: {
    copyright: "Jayakanthan Homeopathy Clinic. All rights reserved.",
    tagline: "High class original pure homeopathy of 42 years of experience."
  },

  categories: [
    {
      id: "general-chronic",
      iconName: "shield",
      enTitle: "General & Chronic Care",
      taTitle: "பொது & நாள்பட்ட நோய்கள்",
      items: [
        { id: "sp-1", en: "All chronic diseases", ta: "அனைத்து நாள்பட்ட நோய்கள்" }
      ]
    },
    {
      id: "head-neurological",
      iconName: "brain",
      enTitle: "Head & Neurological",
      taTitle: "தலை & நரம்பு சம்பந்தப்பட்டவை",
      items: [
        { id: "sp-2", en: "Headache, Vertigo", ta: "தலைவலி தலைச்சுற்றல்" },
        { id: "sp-5", en: "Vertigo", ta: "தலைச்சுற்றல்" }
      ]
    },
    {
      id: "eye-ent",
      iconName: "eye",
      enTitle: "Eye & ENT Care",
      taTitle: "கண், காது, மூக்கு & தொண்டை",
      items: [
        { id: "sp-3", en: "Eye diseases", ta: "கண் நோய்கள்" },
        { id: "sp-4", en: "ENT diseases", ta: "காது, மூக்கு, தொண்டை நோய்கள்" }
      ]
    },
    {
      id: "metabolic-vascular",
      iconName: "heart",
      enTitle: "Metabolic & Blood Pressure",
      taTitle: "இரத்த அழுத்தம் & வளர்சிதை மாற்றம்",
      items: [
        { id: "sp-6", en: "Diabetes", ta: "நீரிழிவு நோய்" },
        { id: "sp-7", en: "Cholesterol", ta: "கொலஸ்ட்ரால்" },
        { id: "sp-8", en: "Hypertension", ta: "உயர் இரத்த அழுத்தம்" },
        { id: "sp-9", en: "Thyroid complaints", ta: "தைராய்டு கோளாறுகள்" }
      ]
    },
    {
      id: "respiratory-allergy",
      iconName: "stethoscope",
      enTitle: "Respiratory & Allergy",
      taTitle: "சுவாசம் & ஒவ்வாமை",
      items: [
        { id: "sp-10", en: "Allergy, Sneezing, Asthma, Sinus, Cough", ta: "ஒவ்வாமை தும்மல் ஆஸ்துமா சைனஸ் இருமல்" }
      ]
    },
    {
      id: "mental-sleep",
      iconName: "feather",
      enTitle: "Mental Wellness & Sleep",
      taTitle: "மன நலம் & தூக்கம்",
      items: [
        { id: "sp-11", en: "Mental diseases, Sleeplessness, Anxiety", ta: "மன நோய்கள் தூக்கமின்மை பதட்டம்" }
      ]
    },
    {
      id: "digestive-gastro",
      iconName: "utensils",
      enTitle: "Digestive & Gastrointestinal",
      taTitle: "செரிமானம் & இரைப்பை",
      items: [
        { id: "sp-12", en: "Mouth ulcer, Stomach ulcer", ta: "வாய்ப் புண் வயிற்றுப் புண்" },
        { id: "sp-13", en: "Gas, Indigestion, Heartburn, Gallstone", ta: "வாயு அஜீரணம் நெஞ்செரிச்சல் பித்தப்பை கல்" },
        { id: "sp-14", en: "Constipation, Piles", ta: "மலச்சிக்கல் மூல நோய்" }
      ]
    },
    {
      id: "urinary-kidney",
      iconName: "droplet",
      enTitle: "Kidney & Urinary",
      taTitle: "சிறுநீரகம் & சிறுநீர் நலம்",
      items: [
        { id: "sp-15", en: "Kidney stone, Urine problems", ta: "சிறுநீரகக் கல் சிறுநீர் பிரச்சனைகள்" }
      ]
    },
    {
      id: "joints-spine",
      iconName: "activity",
      enTitle: "Spine, Joints & Rheumatic",
      taTitle: "முதுகெலும்பு & மூட்டுகள்",
      items: [
        { id: "sp-16", en: "Spinal cord, Back pain, Cervical pain", ta: "முதுகெலும்பு முதுகு வலி கழுத்து வலி" },
        { id: "sp-17", en: "Joints, Rheumatic, Gout, Knee pain, Paralysis", ta: "மூட்டுகள் வாத நோய் கீல்வாதம் முழங்கால் வலி பக்கவாதம்" }
      ]
    },
    {
      id: "skin-hair",
      iconName: "sparkles",
      enTitle: "Hair & Skin Care",
      taTitle: "தோல் & முடி பராமரிப்பு",
      items: [
        { id: "sp-18", en: "Dandruff, Hair falling, Grey hair", ta: "பொடுகு முடி உதிர்தல் நரை முடி" },
        { id: "sp-19", en: "Skin diseases, Psoriasis, Vitiligo, Itching", ta: "தோல் நோய்கள் சொரியாசிஸ் வெண்புள்ளி அரிப்பு" }
      ]
    },
    {
      id: "reproductive-health",
      iconName: "users",
      enTitle: "Male & Female Reproductive Health",
      taTitle: "ஆண் & பெண் இனப்பெருக்க நலம்",
      items: [
        { id: "sp-20", en: "Male/Female sterility, Erection, Ejaculation problems", ta: "ஆண் பெண் மலட்டுத்தன்மை விறைப்புத்தன்மை விந்து வெளியேற்ற பிரச்சனைகள்" }
      ]
    }
  ]
};
