export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  duration: string;
  emoji: string;
  color: string;
  accentBg: string;
  researchBacked: boolean;
  worksWellFor: string[];
  protocols?: { name: string; description: string; emoji: string }[];
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "cryotherapy",
    name: "Whole Body Cryotherapy",
    tagline: "Freeze away inflammation and accelerate recovery",
    description:
      "Step into our cryotherapy chamber for a 3-minute session that exposes your body to extremely cold temperatures, triggering your natural healing response. Blood vessels constrict, inflammation drops, and endorphins flood your system. Research supports cryotherapy for supporting recovery after physical activity, reducing post-workout soreness, and supporting your body's natural anti-inflammatory systems.",
    benefits: [
      "Supports natural recovery systems",
      "May reduce post-workout soreness",
      "Boosts endorphin release",
      "Supports healthy circulation",
      "Brown fat activation for metabolic support",
      "Backed by research",
    ],
    duration: "3 min",
    emoji: "❄️",
    color: "#2BBFFF",
    accentBg: "rgba(43,191,255,0.08)",
    researchBacked: true,
    worksWellFor: ["Recovery", "Soreness", "Energy", "Circulation"],
    featured: false,
  },
  {
    id: "tanning",
    name: "Tanning",
    tagline: "High-pressure UV-A tanning in just 10 minutes",
    description:
      "Our high-pressure tanning beds deliver a deep, even tan in just 10 minutes — far more efficient than traditional beds. UV-A rays penetrate the skin at a deeper level, bringing melanin to the surface for a natural glow. Many clients use tanning to support mood and energy levels, particularly during winter months.",
    benefits: [
      "Deep, even tan in 10 minutes",
      "May support mood and energy",
      "Supports vitamin D synthesis",
      "Helps regulate circadian rhythm",
    ],
    duration: "10 min",
    emoji: "☀️",
    color: "#F59E0B",
    accentBg: "rgba(245,158,11,0.08)",
    researchBacked: false,
    worksWellFor: ["Mood", "Energy", "Skin"],
  },
  {
    id: "desert-heat-sauna",
    name: "Desert Heat Sauna",
    tagline: "Deep heat therapy for detox, pain relief, and relaxation",
    description:
      "Our Desert Heat full spectrum infrared sauna uses near, mid, and far infrared wavelengths to penetrate deep into your body's tissues. Unlike traditional saunas that heat the air, infrared directly heats your body — delivering a deeper, more therapeutic sweat at a lower, more comfortable temperature. Choose from 6 targeted wellness protocols to customize your 25–30 minute session.",
    benefits: [
      "Deep cellular detoxification",
      "Supports pain relief and comfort",
      "Supports cardiovascular health",
      "Promotes deep relaxation",
      "Supports weight management",
      "Enhances skin health",
    ],
    duration: "25–30 min",
    emoji: "🔥",
    color: "#E8450A",
    accentBg: "rgba(232,69,10,0.08)",
    researchBacked: true,
    worksWellFor: ["Detox", "Sleep", "Stress", "Pain", "Skin", "Cardiovascular"],
    protocols: [
      { name: "Weight Loss", emoji: "⚖️", description: "Targets metabolic rate elevation and caloric burn through deep infrared heat." },
      { name: "Detox", emoji: "💧", description: "Promotes deep cellular detoxification through profuse sweating and infrared penetration." },
      { name: "Cardiovascular Health", emoji: "❤️", description: "Supports heart rate variability and vascular function with regular sessions." },
      { name: "Anti-Aging", emoji: "✨", description: "Stimulates collagen production and cellular repair through near-infrared wavelengths." },
      { name: "Pain Relief", emoji: "🌊", description: "Targets chronic discomfort, muscle tension, and joint stiffness with far-infrared heat." },
      { name: "Relaxation", emoji: "🌙", description: "Activates the parasympathetic nervous system for deep rest and recovery." },
    ],
  },
  {
    id: "red-light-therapy",
    name: "Red Light Therapy",
    tagline: "Rejuvenate cells with targeted light wavelengths",
    description:
      "Red light therapy uses specific wavelengths of red and near-infrared light to penetrate the skin and stimulate cellular energy production. This non-invasive therapy has been extensively studied for its ability to support tissue recovery, improve skin texture, and support muscle recovery. The light energy is absorbed by mitochondria in your cells, supporting their natural repair processes.",
    benefits: [
      "Supports cellular energy production",
      "May support tissue healing",
      "Improves skin texture and tone",
      "Supports muscle recovery",
      "Backed by extensive research",
    ],
    duration: "12–15 min",
    emoji: "🔴",
    color: "#EF4444",
    accentBg: "rgba(239,68,68,0.08)",
    researchBacked: true,
    worksWellFor: ["Skin", "Recovery", "Sleep", "Energy"],
  },
  {
    id: "power-plate",
    name: "Power Plate",
    tagline: "Whole-body vibration for strength, flexibility, and recovery",
    description:
      "The Power Plate uses whole-body vibration technology to activate more muscle fibers than conventional exercise. As the platform vibrates at 25–50 times per second, your body instinctively responds with rapid muscle contractions — making even simple exercises significantly more effective. Used by professional athletes, physical therapists, and wellness seekers alike. Power Plate is the movement engine in our wellness system.",
    benefits: [
      "Activates up to 95% of muscle fibers",
      "Supports muscle strength and flexibility",
      "Enhances circulation and lymphatic drainage",
      "Supports post-workout recovery",
      "Improves balance and coordination",
      "Pairs powerfully with recovery services",
    ],
    duration: "15 min",
    emoji: "⚡",
    color: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
    researchBacked: true,
    worksWellFor: ["Flexibility", "Strength", "Balance", "Recovery", "Circulation"],
    featured: true,
  },
  {
    id: "compression",
    name: "Compression Therapy",
    tagline: "Pneumatic compression for rapid recovery and circulation",
    description:
      "Our compression therapy uses sequential pneumatic compression to mimic the natural muscle pump, enhancing blood flow and lymphatic drainage. Available for legs, arms, and hips. Used by elite athletes and physical therapists alike, compression therapy rapidly supports metabolic waste clearance from muscles, may reduce swelling, and accelerates recovery between training sessions.",
    benefits: [
      "Supports metabolic waste clearance",
      "May reduce post-exercise soreness",
      "Improves circulation and lymphatic flow",
      "Supports swelling reduction",
      "Promotes deep relaxation",
      "Speeds recovery between sessions",
    ],
    duration: "15 min",
    emoji: "💨",
    color: "#22C55E",
    accentBg: "rgba(34,197,94,0.08)",
    researchBacked: true,
    worksWellFor: ["Recovery", "Soreness", "Swelling", "Circulation"],
  },
  {
    id: "contrast-therapy",
    name: "Contrast Therapy",
    tagline: "Hot-cold cycling for targeted joint recovery",
    description:
      "Contrast therapy alternates between heat and cold applied directly to the shoulder or knee, creating a powerful pumping effect on the local circulatory system. The heat dilates blood vessels while the cold constricts them, dramatically improving circulation and supporting recovery in the targeted joint. Ideal for those with chronic joint discomfort or recovering from physical activity.",
    benefits: [
      "Targets shoulder and knee recovery",
      "Supports joint comfort and mobility",
      "Improves local circulation",
      "Supports tissue resilience",
    ],
    duration: "15 min",
    emoji: "🌡️",
    color: "#06B6D4",
    accentBg: "rgba(6,182,212,0.08)",
    researchBacked: true,
    worksWellFor: ["Joint Health", "Recovery", "Mobility", "Circulation"],
  },
];

export const FEATURED_SERVICE = SERVICES.find((s) => s.featured) ?? SERVICES[4];
