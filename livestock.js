// src/data/livestock.js

export const ANIMALS = {
  cow: {
    label: "Cow / Bull",
    emoji: "🐄",
    breeds: [
      "Gir", "Sahiwal", "Red Sindhi", "Tharparkar", "Rathi", "Kankrej",
      "Ongole", "Hallikar", "Amrit Mahal", "Malnad Gidda", "Holstein Friesian",
      "Jersey", "Brown Swiss", "HF Cross", "Unknown / Mixed"
    ]
  },
  buffalo: {
    label: "Buffalo",
    emoji: "🐃",
    breeds: [
      "Murrah", "Surti", "Jaffarabadi", "Nili-Ravi", "Bhadawari",
      "Nagpuri", "Pandharpuri", "Toda", "Swamp Buffalo", "Unknown / Mixed"
    ]
  },
  goat: {
    label: "Goat",
    emoji: "🐐",
    breeds: [
      "Beetal", "Jamnapari", "Black Bengal", "Barbari", "Sirohi",
      "Osmanabadi", "Malabari", "Kanni Adu", "Sangamneri", "Unknown / Mixed"
    ]
  },
  sheep: {
    label: "Sheep",
    emoji: "🐑",
    breeds: [
      "Deccani", "Nellore", "Bellary", "Mandya", "Hassan",
      "Bannur", "Marwari", "Chokla", "Malpura", "Unknown / Mixed"
    ]
  },
  hen: {
    label: "Hen / Poultry",
    emoji: "🐔",
    breeds: [
      "Kadaknath", "Aseel", "Brahma", "Rhode Island Red", "White Leghorn",
      "Giriraja", "Gramapriya", "Broiler", "Layer (Commercial)", "Unknown / Mixed"
    ]
  },
  pig: {
    label: "Pig",
    emoji: "🐷",
    breeds: [
      "Desi / Indigenous", "Large White Yorkshire", "Landrace", "Ghungroo", "Unknown / Mixed"
    ]
  },
  horse: {
    label: "Horse / Donkey",
    emoji: "🐴",
    breeds: [
      "Marwari", "Kathiawari", "Zanskari", "Manipuri Pony", "Donkey (Desi)", "Unknown / Mixed"
    ]
  },
  dog: {
    label: "Dog",
    emoji: "🐕",
    breeds: [
      "Indie / Desi", "Rajapalayam", "Mudhol Hound", "Labrador", "German Shepherd", "Unknown / Mixed"
    ]
  }
};

export const SYMPTOMS = [
  "Not eating / Loss of appetite",
  "Excessive salivation / drooling",
  "Fever / High body temperature",
  "Diarrhoea / Loose motions",
  "Vomiting",
  "Nasal discharge",
  "Eye discharge / watery eyes",
  "Coughing / Sneezing",
  "Difficulty breathing / Laboured breathing",
  "Lameness / Limping",
  "Swollen legs / joints",
  "Blisters / sores on mouth or hooves",
  "Skin rashes / Hair loss",
  "Bloating / Distended abdomen",
  "Milk drop / Reduced milk production",
  "Aggressive / Unusual behaviour",
  "Depression / Lethargy / Weakness",
  "Seizures / Convulsions",
  "Paralysis / Unable to stand",
  "Wounds / Injuries",
  "Abnormal urine (colour/frequency)",
  "Weight loss",
  "Excessive thirst / water intake",
  "Swollen udder / Mastitis signs",
  "Abnormal sounds (crying, moaning)"
];

export const DISEASE_DB = [
  {
    id: "rabies",
    name: "Rabies",
    animals: ["cow", "buffalo", "goat", "sheep", "dog", "horse", "pig"],
    matchSymptoms: ["Aggressive / Unusual behaviour", "Excessive salivation / drooling", "Depression / Lethargy / Weakness", "Seizures / Convulsions", "Paralysis / Unable to stand"],
    severity: "critical",
    description: "Rabies is a fatal viral disease affecting the brain and nervous system. Transmitted through bites from infected animals.",
    firstAid: [
      "ISOLATE the animal immediately — keep away from all humans and other animals",
      "Do NOT touch the animal's saliva — wear gloves if handling",
      "Keep the animal in a dark, quiet enclosure to reduce stimulation",
      "Provide water nearby but do not force-feed",
      "Call a veterinarian IMMEDIATELY — this is a zoonotic disease (can spread to humans)",
      "If any human was bitten or exposed to saliva, seek emergency medical care at once"
    ],
    medicine: "No cure once symptoms appear. Euthanasia is typically recommended. Preventive vaccination (pre-exposure) is the only protection.",
    warning: "DANGER: Rabies is fatal and transmissible to humans. Do not delay — call emergency vet now.",
    prevention: "Annual anti-rabies vaccination for all susceptible animals. Report to local animal husbandry department."
  },
  {
    id: "fmd",
    name: "Foot and Mouth Disease (FMD)",
    animals: ["cow", "buffalo", "goat", "sheep", "pig"],
    matchSymptoms: ["Blisters / sores on mouth or hooves", "Fever / High body temperature", "Not eating / Loss of appetite", "Excessive salivation / drooling", "Lameness / Limping", "Milk drop / Reduced milk production"],
    severity: "high",
    description: "Highly contagious viral disease causing blisters in mouth and on feet. Major economic impact on dairy and meat animals.",
    firstAid: [
      "Isolate affected animals from the healthy herd immediately",
      "Clean and disinfect the blisters with diluted potassium permanganate (KMnO4) solution",
      "Apply antiseptic ointment (Betadine / Boviclox) on foot lesions",
      "Provide soft, easily digestible feed (boiled rice gruel, soft grass)",
      "Ensure clean drinking water is always available",
      "Disinfect the shed with 2% caustic soda (NaOH) solution",
      "Restrict movement of animals and farm workers"
    ],
    medicine: "Symptomatic treatment: Antipyretics (Meloxicam), Antibiotics (Oxytetracycline) to prevent secondary infection, Vitamin supplements.",
    warning: "Reportable disease — must be reported to local Animal Husbandry Department.",
    prevention: "FMD vaccination every 6 months (Aftovax / Raksha FMD). Keep vaccination records."
  },
  {
    id: "mastitis",
    name: "Mastitis",
    animals: ["cow", "buffalo", "goat"],
    matchSymptoms: ["Swollen udder / Mastitis signs", "Milk drop / Reduced milk production", "Fever / High body temperature", "Not eating / Loss of appetite"],
    severity: "medium",
    description: "Bacterial infection of the udder causing inflammation. Very common in dairy animals and major cause of milk loss.",
    firstAid: [
      "Strip all affected quarters completely — discard the milk safely",
      "Apply cold compress on swollen udder for 15 minutes, 3 times a day",
      "Massage udder gently with camphor oil after milking",
      "Ensure clean, dry bedding to prevent further bacterial exposure",
      "Wash hands and udder thoroughly before and after milking",
      "Do NOT use milk from affected quarters for human consumption"
    ],
    medicine: "Intramammary infusion of antibiotics (Cloxacillin / Amoxicillin tubes). Systemic antibiotics if fever present. Oxytocin injection may help milk let-down.",
    warning: "Chronic mastitis can permanently damage udder tissue. Treat early.",
    prevention: "Teat dipping after milking, dry cow therapy, clean housing, regular milk testing (CMT test)."
  },
  {
    id: "hs",
    name: "Haemorrhagic Septicaemia (HS)",
    animals: ["cow", "buffalo"],
    matchSymptoms: ["Fever / High body temperature", "Difficulty breathing / Laboured breathing", "Depression / Lethargy / Weakness", "Swollen legs / joints", "Not eating / Loss of appetite"],
    severity: "critical",
    description: "Acute bacterial disease caused by Pasteurella multocida. One of the most common and deadly cattle diseases in India, especially in monsoon season.",
    firstAid: [
      "Separate the sick animal from the herd at once",
      "Keep animal in a dry, well-ventilated, cool shed",
      "Do NOT stress the animal — avoid forcing movement",
      "Provide fresh water with oral rehydration salts (ORS)",
      "Apply cold wet cloth on the head if fever is very high",
      "Call veterinarian immediately for antibiotic injection"
    ],
    medicine: "Oxytetracycline injection (IV/IM) — must be given by a vet. Sulphadimidine injection. Supportive care with fluids and vitamin C.",
    warning: "Death can occur within 12–24 hours of symptom onset. Immediate vet attention is critical.",
    prevention: "HS vaccine annually before monsoon. Good housing and sanitation."
  },
  {
    id: "bnp",
    name: "Bloat (Tympany)",
    animals: ["cow", "buffalo", "goat", "sheep"],
    matchSymptoms: ["Bloating / Distended abdomen", "Difficulty breathing / Laboured breathing", "Not eating / Loss of appetite", "Depression / Lethargy / Weakness"],
    severity: "high",
    description: "Accumulation of gas in the rumen causing dangerous distension. Common after sudden change in diet or grazing on lush green fodder.",
    firstAid: [
      "Walk the animal slowly — do NOT let it lie down",
      "Massage the left flank (the bloated side) vigorously in circular motion",
      "Mix 100ml turpentine oil in 500ml mustard oil — drench orally",
      "Insert a stomach tube (if trained) to release gas",
      "Keep the animal's head elevated — do not let it lower its head",
      "Call a vet if bloat does not reduce in 30 minutes — trocar may be needed"
    ],
    medicine: "Anti-bloat agents: Dimethicone (Bloatguard), Poloxalene. Rumen stimulants (Nux vomica). IV fluids if animal is weak.",
    warning: "Severe bloat can cause death by suffocation within hours. Act fast.",
    prevention: "Avoid sudden grazing on wet leguminous plants. Gradual diet changes. Provide dry hay before grazing."
  },
  {
    id: "ppr",
    name: "PPR – Peste des Petits Ruminants",
    animals: ["goat", "sheep"],
    matchSymptoms: ["Fever / High body temperature", "Nasal discharge", "Eye discharge / watery eyes", "Coughing / Sneezing", "Diarrhoea / Loose motions", "Not eating / Loss of appetite"],
    severity: "critical",
    description: "Highly contagious viral disease of goats and sheep, causing high mortality. Similar to rinderpest in cattle.",
    firstAid: [
      "Isolate all sick animals immediately from the healthy flock",
      "Keep animals warm and dry — avoid rain and cold wind",
      "Provide electrolyte solution (ORS) in water to prevent dehydration",
      "Clean nasal and eye discharge gently with warm water and soft cloth",
      "Disinfect the shed with Phenyl or Virkon-S solution",
      "Report to local Animal Husbandry Department — it is a notifiable disease"
    ],
    medicine: "No specific antiviral. Antibiotics (Oxytetracycline) to prevent secondary pneumonia. Vitamin A and C supplements. Antipyretics for fever.",
    warning: "Mortality can reach 80–100% in unvaccinated flocks. Urgent vet attention required.",
    prevention: "PPR vaccine (Raksha PPR) — single dose gives 3 years protection. Annual vaccination recommended."
  },
  {
    id: "newcastle",
    name: "Newcastle Disease (Ranikhet)",
    animals: ["hen"],
    matchSymptoms: ["Coughing / Sneezing", "Difficulty breathing / Laboured breathing", "Paralysis / Unable to stand", "Diarrhoea / Loose motions", "Abnormal sounds (crying, moaning)"],
    severity: "critical",
    description: "Highly contagious viral disease of poultry causing high mortality. Also called Ranikhet disease in India.",
    firstAid: [
      "Separate sick birds from the flock at once",
      "Cull severely affected birds humanely to prevent spread",
      "Disinfect entire poultry house with formaldehyde fumigation or Virkon-S",
      "Add Electrolyte + Vitamin C to drinking water",
      "Restrict all movement of birds, people and equipment in/out of farm",
      "Burn or bury dead birds — do NOT sell or eat them"
    ],
    medicine: "No specific treatment. Supportive care with vitamins and electrolytes. Antibiotics to prevent secondary infections.",
    warning: "Can wipe out entire flock in 2–3 days. Report to nearest Animal Husbandry office.",
    prevention: "Regular vaccination: F-strain at day 7, R2B at day 28, then every 6 months. Biosecurity is critical."
  },
  {
    id: "brucellosis",
    name: "Brucellosis",
    animals: ["cow", "buffalo", "goat", "sheep"],
    matchSymptoms: ["Milk drop / Reduced milk production", "Fever / High body temperature", "Depression / Lethargy / Weakness"],
    severity: "high",
    description: "Bacterial disease causing abortions, infertility, and milk drop. Zoonotic — can infect humans causing undulant fever.",
    firstAid: [
      "Isolate the animal — especially recently aborted animals",
      "Wear gloves when handling aborted material or birth fluids",
      "Safely dispose of aborted foetuses and placenta — do NOT allow dogs to eat them",
      "Disinfect the area with 2% caustic soda solution",
      "Test all contact animals for brucellosis (Rose Bengal Plate Test)"
    ],
    medicine: "Long-term antibiotic treatment (Doxycycline + Rifampicin) — must be prescribed by vet. Often slaughter policy in government programs.",
    warning: "Zoonotic disease — infected milk or birth fluids can infect humans. Always boil milk.",
    prevention: "Brucella abortus S19 vaccine for calves (4–8 months). Test and cull policy."
  },
  {
    id: "diarrhoea",
    name: "Diarrhoea / Scours",
    animals: ["cow", "buffalo", "goat", "sheep", "pig", "hen"],
    matchSymptoms: ["Diarrhoea / Loose motions", "Depression / Lethargy / Weakness", "Not eating / Loss of appetite", "Abnormal urine (colour/frequency)"],
    severity: "medium",
    description: "Common condition in young and adult animals due to bacterial, viral or parasitic infection, or dietary changes.",
    firstAid: [
      "Stop solid feed temporarily — give only fluids",
      "Prepare ORS: mix 1 litre clean water + 1 teaspoon salt + 4 teaspoons sugar — give orally",
      "Keep the animal warm and dry",
      "Ensure fresh clean water is always available",
      "Clean the rear area with warm water to prevent scalding",
      "Monitor for blood in stools — if present, call vet urgently"
    ],
    medicine: "Oral rehydration therapy (ORS). Probiotics. If bacterial cause: Metronidazole or Ampicillin (vet prescription). Zinc supplements for young animals.",
    warning: "Dehydration can be fatal in young animals within 24–48 hours.",
    prevention: "Clean water, proper sanitation, colostrum for newborns, regular deworming."
  },
  {
    id: "skin_disease",
    name: "Mange / Skin Disease",
    animals: ["cow", "buffalo", "goat", "sheep", "dog", "pig"],
    matchSymptoms: ["Skin rashes / Hair loss", "Abnormal sounds (crying, moaning)", "Weight loss"],
    severity: "low",
    description: "Caused by mites, lice, ringworm or fungi. Causes intense itching, hair loss and skin thickening.",
    firstAid: [
      "Isolate affected animal to prevent spread",
      "Apply mustard oil mixed with sulphur powder on affected patches",
      "Wash affected areas with Neem-based soap or diluted Dettol",
      "Ensure dry, clean housing — remove damp bedding",
      "Disinfect housing and grooming tools"
    ],
    medicine: "Ivermectin injection (for mange mites). Antifungal spray (Clotrimazole) for ringworm. Regular dipping in Malathion or Cypermethrin solution for lice.",
    warning: "Ringworm can spread to humans. Wear gloves when treating.",
    prevention: "Regular dipping/spraying, clean housing, avoid overcrowding."
  }
];

export const VETS = [
  { name: "Dr. Ramesh Kumar", specialty: "Cattle & Buffalo", phone: "9845012345", location: "Bengaluru South", distance: "2.3 km", available: true },
  { name: "Dr. Savitha Nair", specialty: "All Livestock", phone: "9886754321", location: "Electronic City", distance: "4.1 km", available: true },
  { name: "Dr. Mahesh Gowda", specialty: "Poultry & Small Animals", phone: "9900123456", location: "Anekal", distance: "6.7 km", available: false },
  { name: "Dr. Priya Menon", specialty: "Goat & Sheep", phone: "9741098765", location: "Bannerghatta", distance: "8.2 km", available: true },
  { name: "Govt. Veterinary Hospital", specialty: "Emergency 24x7", phone: "1800-425-1133", location: "BTM Layout", distance: "5.5 km", available: true },
  { name: "KVAFSU Helpline", specialty: "Expert Consultation", phone: "0821-2414605", location: "Nandinagar, Bidar", distance: "Remote", available: true }
];

export const LANGUAGES = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    t: {
      appName: "PashuAI",
      tagline: "Your AI Veterinary Expert",
      diagnose: "Diagnose Now",
      selectAnimal: "Select Animal",
      selectBreed: "Select Breed",
      symptoms: "Select Symptoms",
      uploadPhoto: "Upload Photo",
      analyzing: "Analyzing...",
      diagnosis: "Diagnosis",
      firstAid: "First Aid Steps",
      medicine: "Suggested Medicine",
      callVet: "Call Veterinarian",
      nearbyVets: "Nearby Vets",
      weather: "Local Weather",
      history: "Past Cases",
      noHistory: "No past cases yet",
      severity_critical: "CRITICAL",
      severity_high: "HIGH RISK",
      severity_medium: "MODERATE",
      severity_low: "LOW RISK",
      available: "Available",
      unavailable: "Busy",
      call: "Call",
      humidity: "Humidity",
      temp: "Temperature",
      listen: "Listen",
      warning: "Warning",
      prevention: "Prevention",
      newCase: "New Case",
      animalAge: "Animal Age",
      animalName: "Animal Name / ID",
      ownerName: "Owner Name",
      village: "Village / Location",
      submit: "Get Diagnosis",
      uploadHint: "Take photo or upload (optional but recommended)",
      symptomHint: "Select all symptoms you observe",
      emergency: "EMERGENCY",
      saveLife: "Life-saving first aid until vet arrives"
    }
  },
  kn: {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
    t: {
      appName: "ಪಶುAI",
      tagline: "ನಿಮ್ಮ AI ಪಶುವೈದ್ಯ ತಜ್ಞ",
      diagnose: "ರೋಗನಿರ್ಣಯ ಮಾಡಿ",
      selectAnimal: "ಪ್ರಾಣಿ ಆಯ್ಕೆ",
      selectBreed: "ತಳಿ ಆಯ್ಕೆ",
      symptoms: "ಲಕ್ಷಣಗಳನ್ನು ಆರಿಸಿ",
      uploadPhoto: "ಫೋಟೋ ಅಪ್‌ಲೋಡ್",
      analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
      diagnosis: "ರೋಗನಿರ್ಣಯ",
      firstAid: "ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ಹಂತಗಳು",
      medicine: "ಸೂಚಿಸಲಾದ ಔಷಧ",
      callVet: "ಪಶುವೈದ್ಯರನ್ನು ಕರೆ",
      nearbyVets: "ಹತ್ತಿರದ ಪಶುವೈದ್ಯರು",
      weather: "ಸ್ಥಳೀಯ ಹವಾಮಾನ",
      history: "ಹಿಂದಿನ ಪ್ರಕರಣಗಳು",
      noHistory: "ಇನ್ನೂ ಯಾವುದೇ ಪ್ರಕರಣಗಳಿಲ್ಲ",
      severity_critical: "ತೀವ್ರ ಅಪಾಯ",
      severity_high: "ಹೆಚ್ಚಿನ ಅಪಾಯ",
      severity_medium: "ಮಧ್ಯಮ",
      severity_low: "ಕಡಿಮೆ ಅಪಾಯ",
      available: "ಲಭ್ಯ",
      unavailable: "ಬ್ಯುಸಿ",
      call: "ಕರೆ",
      humidity: "ತೇವಾಂಶ",
      temp: "ತಾಪಮಾನ",
      listen: "ಕೇಳಿ",
      warning: "ಎಚ್ಚರಿಕೆ",
      prevention: "ತಡೆಗಟ್ಟುವಿಕೆ",
      newCase: "ಹೊಸ ಪ್ರಕರಣ",
      animalAge: "ಪ್ರಾಣಿ ವಯಸ್ಸು",
      animalName: "ಪ್ರಾಣಿ ಹೆಸರು / ಐಡಿ",
      ownerName: "ಮಾಲೀಕರ ಹೆಸರು",
      village: "ಹಳ್ಳಿ / ಸ್ಥಳ",
      submit: "ರೋಗನಿರ್ಣಯ ಪಡೆಯಿರಿ",
      uploadHint: "ಫೋಟೋ ತೆಗೆಯಿರಿ ಅಥವಾ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      symptomHint: "ನೀವು ಗಮನಿಸಿದ ಎಲ್ಲಾ ಲಕ್ಷಣಗಳನ್ನು ಆರಿಸಿ",
      emergency: "ತುರ್ತು ಪರಿಸ್ಥಿತಿ",
      saveLife: "ಪಶುವೈದ್ಯರು ಬರುವವರೆಗೆ ಜೀವ ಉಳಿಸುವ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ"
    }
  },
  hi: {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिंदी",
    t: {
      appName: "पशुAI",
      tagline: "आपका AI पशु चिकित्सा विशेषज्ञ",
      diagnose: "निदान करें",
      selectAnimal: "पशु चुनें",
      selectBreed: "नस्ल चुनें",
      symptoms: "लक्षण चुनें",
      uploadPhoto: "फोटो अपलोड करें",
      analyzing: "विश्लेषण हो रहा है...",
      diagnosis: "रोग निदान",
      firstAid: "प्राथमिक उपचार",
      medicine: "सुझाई दवाइयां",
      callVet: "पशु चिकित्सक को कॉल करें",
      nearbyVets: "नज़दीकी पशु डॉक्टर",
      weather: "स्थानीय मौसम",
      history: "पिछले मामले",
      noHistory: "अभी तक कोई मामला नहीं",
      severity_critical: "अति गंभीर",
      severity_high: "उच्च खतरा",
      severity_medium: "मध्यम",
      severity_low: "कम खतरा",
      available: "उपलब्ध",
      unavailable: "व्यस्त",
      call: "कॉल",
      humidity: "नमी",
      temp: "तापमान",
      listen: "सुनें",
      warning: "चेतावनी",
      prevention: "बचाव",
      newCase: "नया मामला",
      animalAge: "पशु की उम्र",
      animalName: "पशु का नाम / ID",
      ownerName: "मालिक का नाम",
      village: "गाँव / स्थान",
      submit: "निदान पाएं",
      uploadHint: "फोटो लें या अपलोड करें (अनुशंसित)",
      symptomHint: "जो भी लक्षण दिखें वो सभी चुनें",
      emergency: "आपातकाल",
      saveLife: "पशु चिकित्सक आने तक जीवन बचाने का उपचार"
    }
  },
  te: {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
    t: {
      appName: "పశుAI",
      tagline: "మీ AI పశువైద్య నిపుణుడు",
      diagnose: "నిర్ధారణ చేయండి",
      selectAnimal: "జంతువు ఎంచుకోండి",
      selectBreed: "జాతి ఎంచుకోండి",
      symptoms: "లక్షణాలు ఎంచుకోండి",
      uploadPhoto: "ఫోటో అప్‌లోడ్ చేయండి",
      analyzing: "విశ్లేషిస్తోంది...",
      diagnosis: "వ్యాధి నిర్ధారణ",
      firstAid: "ప్రథమ చికిత్స దశలు",
      medicine: "సూచించిన మందులు",
      callVet: "పశువైద్యుడిని పిలవండి",
      nearbyVets: "సమీప పశువైద్యులు",
      weather: "స్థానిక వాతావరణం",
      history: "గత కేసులు",
      noHistory: "ఇంకా కేసులు లేవు",
      severity_critical: "అత్యంత తీవ్రం",
      severity_high: "అధిక ప్రమాదం",
      severity_medium: "మధ్యస్థం",
      severity_low: "తక్కువ ప్రమాదం",
      available: "అందుబాటులో",
      unavailable: "బిజీగా",
      call: "కాల్",
      humidity: "తేమ",
      temp: "ఉష్ణోగ్రత",
      listen: "వినండి",
      warning: "హెచ్చరిక",
      prevention: "నివారణ",
      newCase: "కొత్త కేసు",
      animalAge: "జంతువు వయసు",
      animalName: "జంతువు పేరు / ID",
      ownerName: "యజమాని పేరు",
      village: "గ్రామం / స్థానం",
      submit: "నిర్ధారణ పొందండి",
      uploadHint: "ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి",
      symptomHint: "మీరు గమనించిన అన్ని లక్షణాలు ఎంచుకోండి",
      emergency: "అత్యవసరం",
      saveLife: "పశువైద్యుడు వచ్చేవరకు ప్రాణాపాయ చికిత్స"
    }
  },
  ta: {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
    t: {
      appName: "பசுAI",
      tagline: "உங்கள் AI கால்நடை நிபுணர்",
      diagnose: "நோய் கண்டறிக",
      selectAnimal: "விலங்கை தேர்ந்தெடுக்க",
      selectBreed: "இனம் தேர்ந்தெடுக்க",
      symptoms: "அறிகுறிகள் தேர்க",
      uploadPhoto: "புகைப்படம் பதிவேற்றவும்",
      analyzing: "பகுப்பாய்வு செய்கிறது...",
      diagnosis: "நோய் கண்டறிதல்",
      firstAid: "முதலுதவி படிகள்",
      medicine: "பரிந்துரைக்கப்பட்ட மருந்து",
      callVet: "கால்நடை மருத்துவரை அழைக்கவும்",
      nearbyVets: "அருகில் உள்ள கால்நடை மருத்துவர்கள்",
      weather: "உள்ளூர் வானிலை",
      history: "கடந்த வழக்குகள்",
      noHistory: "இன்னும் வழக்குகள் இல்லை",
      severity_critical: "மிகவும் ஆபத்தானது",
      severity_high: "அதிக ஆபத்து",
      severity_medium: "மிதமான",
      severity_low: "குறைந்த ஆபத்து",
      available: "கிடைக்கிறார்",
      unavailable: "பிஸியாக",
      call: "அழைப்பு",
      humidity: "ஈரப்பதம்",
      temp: "வெப்பநிலை",
      listen: "கேளுங்கள்",
      warning: "எச்சரிக்கை",
      prevention: "தடுப்பு",
      newCase: "புதிய வழக்கு",
      animalAge: "விலங்கின் வயது",
      animalName: "விலங்கின் பெயர் / ID",
      ownerName: "உரிமையாளர் பெயர்",
      village: "கிராமம் / இடம்",
      submit: "நோய்கண்டறிதல் பெறுக",
      uploadHint: "புகைப்படம் எடுக்கவும் அல்லது பதிவேற்றவும்",
      symptomHint: "நீங்கள் காணும் அனைத்து அறிகுறிகளையும் தேர்க",
      emergency: "அவசர நிலை",
      saveLife: "கால்நடை மருத்துவர் வரும் வரை உயிர்காக்கும் சிகிச்சை"
    }
  },
  ml: {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
    t: {
      appName: "പശുAI",
      tagline: "നിങ്ങളുടെ AI മൃഗഡോക്ടർ",
      diagnose: "രോഗനിർണ്ണയം",
      selectAnimal: "മൃഗം തിരഞ്ഞെടുക്കുക",
      selectBreed: "ഇനം തിരഞ്ഞെടുക്കുക",
      symptoms: "ലക്ഷണങ്ങൾ തിരഞ്ഞെടുക്കുക",
      uploadPhoto: "ഫോട്ടോ അപ്‌ലോഡ്",
      analyzing: "വിശകലനം ചെയ്യുന്നു...",
      diagnosis: "രോഗനിർണ്ണയം",
      firstAid: "പ്രഥമശുശ്രൂഷ ഘട്ടങ്ങൾ",
      medicine: "നിർദ്ദേശിക്കുന്ന മരുന്ന്",
      callVet: "മൃഗഡോക്ടറെ വിളിക്കുക",
      nearbyVets: "അടുത്തുള്ള ഡോക്ടർമാർ",
      weather: "പ്രാദേശിക കാലാവസ്ഥ",
      history: "കഴിഞ്ഞ കേസുകൾ",
      noHistory: "ഇനിയും കേസുകളില്ല",
      severity_critical: "അത്യന്തം ഗുരുതരം",
      severity_high: "ഉയർന്ന അപകടം",
      severity_medium: "മിതമായ",
      severity_low: "കുറഞ്ഞ അപകടം",
      available: "ലഭ്യം",
      unavailable: "തിരക്കിൽ",
      call: "വിളി",
      humidity: "ആർദ്രത",
      temp: "താപനില",
      listen: "കേൾക്കുക",
      warning: "മുന്നറിയിപ്പ്",
      prevention: "പ്രതിരോധം",
      newCase: "പുതിയ കേസ്",
      animalAge: "മൃഗത്തിന്റെ പ്രായം",
      animalName: "മൃഗത്തിന്റെ പേര് / ID",
      ownerName: "ഉടമസ്ഥന്റെ പേര്",
      village: "ഗ്രാമം / സ്ഥലം",
      submit: "രോഗനിർണ്ണയം നേടുക",
      uploadHint: "ഫോട്ടോ എടുക്കുക അല്ലെങ്കിൽ അപ്‌ലോഡ് ചെയ്യുക",
      symptomHint: "നിങ്ങൾ ശ്രദ്ധിക്കുന്ന എല്ലാ ലക്ഷണങ്ങളും തിരഞ്ഞെടുക്കുക",
      emergency: "അടിയന്തരാവസ്ഥ",
      saveLife: "ഡോക്ടർ വരുന്നതുവരെ ജീവൻ രക്ഷിക്കൽ"
    }
  }
};
