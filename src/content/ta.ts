import type { ClinicContent } from '../types';

export const taContent: ClinicContent = {
  clinicName: "ஜெயகாந்தன் ஹோமியோபதி கிளினிக்",
  subtitle: "தூய ஹோமியோபதி மருத்துவம் • 42 வருட பாரம்பரியம்",
  tagline: "42 வருட அனுபவமிக்க உயர்தர அசல் தூய ஹோமியோபதி சிகிச்சை",
  doctorName: "டாக்டர் N. ஜெயகாந்தன்",
  experienceYears: 42,
  experienceBadge: "42 ஆண்டுகள் சேவை",

  nav: {
    home: "முகப்பு",
    specialities: "சிகிச்சைகள்",
    about: "மருத்துவமனை பற்றி",
    contact: "தொடர்பு & முகவரி",
    headerTitle: "ஜெயகாந்தன் ஹோமியோபதி",
    callAppointment: "முன்பதிவு செய்ய அழைக்கவும்",
    getDirections: "கூகுள் மேப் வழி",
    stickyCall: "அழைக்க",
    stickyDirections: "வழி பார்க்க"
  },

  hero: {
    badge: "1982 முதல் பெருந்துறையில் நம்பிக்கையான சேவை",
    title: "ஜெயகாந்தன் ஹோமியோபதி கிளினிக்",
    subtext: "பெருந்துறையில் 42 ஆண்டுகளுக்கும் மேலாக டாக்டர் N. ஜெயகாந்தன் அவர்களின் தலைமையில் இயற்கையான, பக்கவிளைவில்லாத அசல் தூய ஹோமியோபதி சிகிச்சை வழங்கப்படுகிறது.",
    callAction: "முன்பதிவு செய்ய அழைக்கவும்",
    directionsAction: "கூகுள் மேப் வழி பெற",
    consultingTimeNotice: "பார்வை நேரம்: தினமும் காலை 10:00 - மாலை 05:00"
  },

  infoCards: {
    hoursTitle: "மருத்துவர் பார்வை நேரம்",
    hoursValue: "காலை 10:00 - மாலை 05:00",
    appointmentTitle: "முன்பதிவு அறிவிப்பு",
    appointmentText: "தயவுசெய்து ஒரு நாள் முன்னதாகவே தொலைபேசியில் அழைத்து முன்பதிவு செய்யவும்.",
    phoneTitle: "தொலைபேசி எண்கள்",
    addressTitle: "மருத்துவமனை அமைவிடம்"
  },

  specialitiesSection: {
    badge: "எங்களின் சிறப்பு சிகிச்சைகள்",
    title: "சிகிச்சை அளிக்கப்படும் முக்கிய நோய்கள்",
    description: "நாள்பட்ட நோய்கள், சர்க்கரை நோய், ஒவ்வாமை, நரம்பு, எலும்பு மற்றும் சருமப் பிரச்சனைகளுக்கு 42 வருட அனுபவமிக்க ஹோமியோபதி தீர்வு.",
    allTab: "அனைத்து சிகிச்சைகள்",
    searchPlaceholder: "நோயின் பெயரைத் தேடவும் (எ.கா. தலைவலி, ஆஸ்துமா, தோல்...)",
    noResults: "தேடிய நோய் பட்டியலில் இல்லை.",
    totalCountLabel: "மொத்த சிறப்பு சிகிச்சைப் பிரிவுகள்"
  },

  contactSection: {
    badge: "தொடர்பு கொள்ளவும்",
    title: "முகவரி மற்றும் தொடர்பு விவரங்கள்",
    addressHeader: "கிளினிக் முகவரி & வரைபடம்",
    fullAddress: [
      "டாக்டர் N. ஜெயகாந்தன்",
      "39/24 கணபதி நகர்",
      "ஐயர் அம்மா பார்க் அருகில்",
      "R.S. ரோடு, பெருந்துறை",
      "ஈரோடு மாவட்டம், தமிழ்நாடு – 638 052"
    ],
    phoneHeader: "முன்பதிவுக்கான தொலைபேசி எண்கள்",
    hoursHeader: "பார்வை நேரம்",
    appointmentHeader: "முன்பதிவு விதிமுறை",
    getDirectionsBtn: "கூகுள் மேப் வழி பார்க்க",
    callBtn: "உடனே அழைக்க"
  },

  disclaimer: {
    title: "முக்கிய மருத்துவ அறிவிப்பு",
    text: "ஹோமியோபதி சிகிச்சைகள் நபருக்கு நபர் மாறுபடும். முறையான மருத்துவ ஆலோசனைக்கு டாக்டர் N. ஜெயகாந்தன் அவர்களை நேரடியாக கிளினிக்கில் சந்திக்கவும்."
  },

  footer: {
    copyright: "ஜெயகாந்தன் ஹோமியோபதி கிளினிக். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    tagline: "பெருந்துறையில் 42 வருடங்களாக தொடரும் நம்பிக்கையான ஹோமியோபதி மருத்துவ சேவை."
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
