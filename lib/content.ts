export const img = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  towers: img("1486406146926-c627a92ad1ab"),
  skyline: img("1477959858617-67f85cf4f1df"),
  corridor: img("1497366754035-f200968a6e72"),
  meetingRoom: img("1497366811353-6870744d04b2"),
  officeHall: img("1497366216548-37526070297c"),
  housekeeping: img("1581578731548-c64695cc6952"),
  vacuum: img("1527515637462-cff94eecc1ac"),
  electrician: img("1621905251918-48416bd8575a"),
  siteWorkers: img("1504307651254-35680f356dfd"),
  cctv: img("1557597774-9d273605dfa9"),
  lawn: img("1558904541-efa843a96f01"),
  bins: img("1532996122724-e3c354a0b15b"),
  gloves: img("1584820927498-cfe5211fd8bf"),
  signing: img("1450101499163-c8848c66ca85"),
  hospital: img("1519494026892-80bbd2d6fd0d"),
  campus: img("1562774053-701939374585"),
  apartments: img("1545324418-cc1a3fa10c00"),
  highrise: img("1565008447742-97f6f38c985c"),
  mall: img("1519567241046-7f570eee3ce6"),
  team: img("1522071820081-009f0129c71c"),
  highFive: img("1600880292203-757bb62b4baf"),
  handshake: img("1521791136064-7986c2920216"),
  workspace: img("1527192491265-7e15c55b1ed2"),
  documents: img("1454165804606-c3d57bc86b40"),
  teamTalk: img("1556761175-5973dc0f32e7"),
  villageTap: img("1767752374835-9544618965e1"),
  waterTower: img("1790931059954-47cd750f081e"),
  waterHands: img("1538300342682-cf57afb97285"),
};

/** Real photos of Nimbus teams on site, served from /public/photos. */
export const realPhotos = {
  panelInspection: "/photos/panel-inspection.png",
  facadeCleaning: "/photos/facade-cleaning.png",
  gardener: "/photos/gardener.png",
  pestControl: "/photos/pest-control.png",
  electricalAudit: "/photos/electrical-audit.png",
  valveMaintenance: "/photos/valve-maintenance.png",
  bmsMonitoring: "/photos/bms-monitoring.png",
  officePresentation: "/photos/office-presentation.png",
  officeTeam: "/photos/office-team.png",
  teamMeeting: "/photos/team-meeting.png",
};

export const gallery = [
  { src: realPhotos.facadeCleaning, width: 814, height: 1123, alt: "Nimbus rope-access team cleaning a glass facade" },
  { src: realPhotos.electricalAudit, width: 666, height: 516, alt: "Nimbus technician and supervisor auditing an electrical panel" },
  { src: realPhotos.gardener, width: 328, height: 376, alt: "Nimbus gardener tending a landscaped bed" },
  { src: realPhotos.bmsMonitoring, width: 635, height: 180, alt: "Nimbus engineers reviewing a building management system screen" },
  { src: realPhotos.pestControl, width: 350, height: 842, alt: "Nimbus pest control operator spraying in protective gear" },
  { src: realPhotos.officePresentation, width: 732, height: 449, alt: "Nimbus team in a review presentation" },
  { src: realPhotos.panelInspection, width: 302, height: 394, alt: "Nimbus technician inspecting an LT panel" },
  { src: realPhotos.valveMaintenance, width: 187, height: 370, alt: "Technician operating a pipeline gate valve" },
  { src: realPhotos.officeTeam, width: 576, height: 352, alt: "Nimbus back-office team at work" },
  { src: realPhotos.teamMeeting, width: 576, height: 317, alt: "Nimbus managers in a planning meeting" },
];

export const contact = {
  phones: [
    { label: "+91 91510 53438", href: "tel:+919151053438" },
    { label: "+91 91518 05904", href: "tel:+919151805904" },
  ],
  email: "support@nimbusfacility.in",
  address: "4/ Anand Lok Colony, Chinhat, Faizabad Road, Lucknow, Uttar Pradesh 226028",
};

export type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About us",
    children: [
      { href: "/about", label: "About Nimbus" },
      { href: "/why-nimbus", label: "Why Nimbus" },
      { href: "/chairman-message", label: "Chairman’s message" },
      { href: "/our-people", label: "Our people" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services", label: "All services" },
      { href: "/services/hard-services", label: "Hard services" },
      { href: "/services/soft-services", label: "Soft services" },
      { href: "/services/security-services", label: "Security services" },
      { href: "/services/premium-services", label: "Premium services" },
      { href: "/services/jal-jeevan-mission", label: "Jal Jeevan Mission (JJM)" },
    ],
  },
  { href: "/clients", label: "Clients" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    image: photos.towers,
    alt: "Modern commercial towers",
    eyebrow: "Integrated facility management",
    title: ["Your assets.", "Our responsibility."],
    copy: "Smart, strategic, and reliable facility solutions that keep your people, places, and operations at their best.",
  },
  {
    image: photos.housekeeping,
    alt: "Housekeeping professional cleaning a window",
    eyebrow: "Soft services",
    title: ["Clean. Safe.", "Well managed."],
    copy: "Housekeeping, sanitization, and front desk teams that make every space feel cared for, every single day.",
  },
  {
    image: photos.electrician,
    alt: "Technician servicing an electrical panel",
    eyebrow: "Hard services",
    title: ["Systems that", "never let you down."],
    copy: "Skilled MEP technicians and 24x7 support that protect your building systems and extend asset life.",
  },
  {
    image: photos.villageTap,
    alt: "Village water tap filling a bucket",
    eyebrow: "Jal Jeevan Mission",
    title: ["Clean water,", "every village home."],
    copy: "Operation and maintenance of rural piped water schemes, so every household tap keeps delivering safe drinking water.",
  },
];

export const stats = [
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 24, suffix: "x7", label: "Support coverage" },
  { value: 5, suffix: "", label: "Service divisions" },
  { value: 6, suffix: "+", label: "Sectors served" },
];

export type ServiceGroup = {
  slug: string;
  number: string;
  title: string;
  short: string;
  tagline: string;
  image: string;
  /** Wide, high-resolution photo for the page hero; falls back to `image`. */
  cover?: string;
  intro: string[];
  items: { title: string; text: string }[];
  highlights: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "hard-services",
    number: "01",
    title: "Hard Services",
    short: "MEP, HVAC, fire safety, and planned maintenance that keep building systems running safely.",
    tagline: "Building systems that perform, day and night.",
    image: realPhotos.electricalAudit,
    cover: photos.electrician,
    intro: [
      "Your building’s systems are its heartbeat. Our skilled technicians look after mechanical, electrical, and plumbing infrastructure with planned preventive maintenance and fast breakdown response, so small issues never become big disruptions.",
      "Through our value engineering approach, we also look for ways to reduce energy and water consumption, lowering operating costs while extending the life of your assets.",
    ],
    items: [
      { title: "Electrical maintenance", text: "Inspection, servicing, and repair of panels, wiring, lighting, and backup power." },
      { title: "HVAC & air-conditioning", text: "Routine servicing and performance checks that keep spaces comfortable and efficient." },
      { title: "Plumbing & water systems", text: "Pumps, pipelines, tanks, and fixtures kept leak-free and running smoothly." },
      { title: "Fire safety systems", text: "Regular checks of detection and suppression equipment so you stay protected and compliant." },
      { title: "Preventive maintenance", text: "Planned schedules that catch wear early and reduce costly breakdowns." },
      { title: "Energy & water optimization", text: "Smart resource management that brings down consumption and operating costs." },
    ],
    highlights: ["24x7 breakdown support", "Planned preventive schedules", "Trained, certified technicians", "Lower energy & water costs"],
  },
  {
    slug: "soft-services",
    number: "02",
    title: "Soft Services",
    short: "Housekeeping, pest control, waste management, and landscaping for healthier, welcoming spaces.",
    tagline: "Clean, healthy spaces people love to be in.",
    image: realPhotos.facadeCleaning,
    cover: photos.housekeeping,
    intro: [
      "First impressions are built on cleanliness. Our trained housekeeping teams, equipped with modern tools and eco-friendly products, keep offices, hospitals, residential societies, schools, and retail spaces spotless and hygienic.",
      "From daily janitorial care to pest control, waste management, and landscaping, we take care of every detail that makes a space feel safe, fresh, and well looked after.",
    ],
    items: [
      { title: "Housekeeping & janitorial", text: "Daily, periodic, and deep cleaning tailored to your site and footfall." },
      { title: "Pest control & sanitization", text: "Responsible pest management and sanitization programs for healthier environments." },
      { title: "Waste management", text: "Segregation, collection, and responsible disposal that support sustainability goals." },
      { title: "Green cleaning", text: "Eco-friendly products and practices that protect people and the planet." },
      { title: "Landscaping & horticulture", text: "Lawn care, planting, and garden upkeep that keep outdoor spaces beautiful." },
      { title: "Washroom hygiene", text: "Regular cleaning, restocking, and checks for consistently fresh washrooms." },
    ],
    highlights: ["Trained, uniformed staff", "Eco-friendly products", "Supervised quality checks", "Flexible shift coverage"],
  },
  {
    slug: "security-services",
    number: "03",
    title: "Security Services",
    short: "Professional guards and surveillance solutions that protect people, property, and operations.",
    tagline: "Protection you can count on, around the clock.",
    image: photos.cctv,
    intro: [
      "Safety comes first. Our professional security personnel are trained, vetted, and supervised to protect your people, property, and day-to-day operations.",
      "We combine a visible on-ground presence with surveillance solutions and clear reporting, giving you complete confidence in the security of your premises.",
    ],
    items: [
      { title: "Security guards", text: "Trained, vetted, and well-presented guards for every type of premises." },
      { title: "Surveillance solutions", text: "CCTV monitoring that adds an extra layer of protection to your site." },
      { title: "Access & visitor management", text: "Controlled entry, visitor logs, and checks that keep premises secure." },
      { title: "Patrolling", text: "Scheduled patrols across buildings, parking areas, and perimeters." },
      { title: "Emergency response", text: "Teams trained to act quickly and calmly during incidents and evacuations." },
      { title: "Supervision & reporting", text: "Regular audits and reports so you always know the status of your site." },
    ],
    highlights: ["Vetted & trained personnel", "24x7 deployment", "Field supervisors", "Incident reporting"],
  },
  {
    slug: "premium-services",
    number: "04",
    title: "Premium Services",
    short: "Property management, facility audits, and front desk teams for a complete, integrated solution.",
    tagline: "One partner for every part of your facility.",
    image: realPhotos.officePresentation,
    cover: photos.handshake,
    intro: [
      "Our premium services bring everything together. We work closely with your HR, IT, and operations teams to align facility services with your business strategy.",
      "With strategically relevant KPIs, detailed audits, and professional front-of-house teams, we help you deliver measurable value and a better experience for everyone who uses your space.",
    ],
    items: [
      { title: "Property management", text: "End-to-end oversight of your property, vendors, and day-to-day operations." },
      { title: "Facility audits", text: "Thorough assessments that identify risks, gaps, and savings opportunities." },
      { title: "Front desk & reception", text: "Courteous reception teams who create a confident first impression." },
      { title: "KPI reporting", text: "Clear performance tracking against the outcomes that matter to you." },
      { title: "Integrated facility management", text: "Hard, soft, and security services managed through a single point of contact." },
      { title: "Consulting & value engineering", text: "Expert advice that optimizes resources and operating costs." },
    ],
    highlights: ["Single point of contact", "Measurable KPIs", "Detailed audit reports", "Business-aligned strategy"],
  },
  {
    slug: "jal-jeevan-mission",
    number: "05",
    title: "Jal Jeevan Mission (JJM)",
    short: "Operation & maintenance of rural piped water schemes for safe tap water in every village home.",
    tagline: "Har Ghar Jal: safe tap water for every village home.",
    image: photos.villageTap,
    intro: [
      "The Jal Jeevan Mission aims to bring safe and adequate drinking water to every rural household through a functional household tap connection. Building the pipelines is only the start. Each scheme needs skilled people to run it, maintain it, and keep water flowing every day.",
      "Nimbus brings its facility management discipline to village water supply. Our trained pump operators, plumbers, and supervisors run and maintain water supply schemes, test water quality, fix leaks fast, and work hand in hand with Gram Panchayats and Village Water & Sanitation Committees (VWSCs).",
    ],
    items: [
      { title: "Scheme operation & maintenance", text: "Day-to-day running of tube wells, pumps, overhead tanks, and distribution networks." },
      { title: "Household tap connections", text: "Installing, repairing, and keeping functional household tap connections (FHTCs) in working order." },
      { title: "Pump operators & plumbers", text: "Trained local operators and plumbers deployed for every village scheme." },
      { title: "Water quality testing", text: "Regular field test kit checks, chlorination, and sample collection for lab testing." },
      { title: "Leak & breakdown repair", text: "Fast response to pipeline bursts, pump failures, and supply interruptions." },
      { title: "Community engagement (IEC)", text: "Awareness drives, VWSC support, and training so villages own their water supply." },
      { title: "Solar pumps & electricals", text: "Servicing of solar and electric pumping systems, panels, and starters." },
      { title: "Greywater & source sustainability", text: "Support for recharge, greywater management, and rainwater harvesting works." },
    ],
    highlights: ["Trained local pump operators", "Regular water quality checks", "Fast leak & breakdown repair", "Gram Panchayat & VWSC coordination"],
  },
];

export type ServiceCategory = "Soft" | "Hard" | "Security" | "Premium" | "Water";

export const categorySlug: Record<ServiceCategory, string> = {
  Hard: "hard-services",
  Soft: "soft-services",
  Security: "security-services",
  Premium: "premium-services",
  Water: "jal-jeevan-mission",
};

export const serviceCategories: ("All" | ServiceCategory)[] = ["All", "Soft", "Hard", "Security", "Premium", "Water"];

export const services: {
  title: string;
  category: ServiceCategory;
  text: string;
  image: string;
  alt: string;
  /** CSS object-position, for tall photos cropped into the wide card. */
  position?: string;
}[] = [
  {
    title: "Housekeeping & janitorial",
    category: "Soft",
    text: "Thorough cleaning and hygiene for offices, hospitals, schools, and residential communities.",
    image: realPhotos.facadeCleaning,
    alt: "Nimbus rope-access team cleaning a glass facade",
    position: "center 35%",
  },
  {
    title: "Mechanical, electrical & plumbing",
    category: "Hard",
    text: "Skilled support for electrical, HVAC, plumbing, fire safety, and building systems.",
    image: realPhotos.panelInspection,
    alt: "Nimbus technician inspecting an LT panel",
    position: "center 30%",
  },
  {
    title: "Security guards & surveillance",
    category: "Security",
    text: "Professional security personnel and surveillance that protect people and property.",
    image: photos.cctv,
    alt: "Wall of CCTV cameras",
  },
  {
    title: "Landscaping & horticulture",
    category: "Soft",
    text: "Garden care, planting, and landscape maintenance for healthy, welcoming outdoor spaces.",
    image: realPhotos.gardener,
    alt: "Nimbus gardener tending a landscaped bed",
  },
  {
    title: "Pest control & sanitization",
    category: "Soft",
    text: "Responsible pest management and sanitization programs for safe environments.",
    image: realPhotos.pestControl,
    alt: "Nimbus pest control operator spraying in protective gear",
    position: "center 20%",
  },
  {
    title: "Waste management & green cleaning",
    category: "Soft",
    text: "Eco-friendly cleaning and responsible waste handling for a better tomorrow.",
    image: photos.bins,
    alt: "Colour-coded recycling bins",
  },
  {
    title: "Property management & facility audits",
    category: "Premium",
    text: "Audits, reporting, and property oversight measured against KPIs that matter.",
    image: realPhotos.electricalAudit,
    alt: "Nimbus supervisor auditing an electrical installation",
  },
  {
    title: "Front desk & reception",
    category: "Premium",
    text: "Courteous reception teams that create a confident first impression.",
    image: photos.corridor,
    alt: "Bright modern office interior",
  },
  {
    title: "Jal Jeevan Mission water supply",
    category: "Water",
    text: "Operation and maintenance of village water schemes, tap connections, and water quality testing.",
    image: photos.waterTower,
    alt: "Concrete overhead water tank against a blue sky",
  },
];

export const whyPoints = [
  { title: "Better workplaces", text: "Support employee productivity, wellbeing, and innovation." },
  { title: "Measurable outcomes", text: "Strategically relevant KPIs track service quality and performance." },
  { title: "Stronger culture", text: "Workplaces that strengthen engagement and customer experience." },
  { title: "Sustainable value", text: "Smart use of energy, water, and resources to optimize operating costs." },
];

export const pillars = [
  { word: "Smart", text: "We apply the latest facility management practices and technologies to every site." },
  { word: "Strategic", text: "We align facility services with your HR, IT, and operations goals." },
  { word: "Efficient", text: "Our value engineering approach brings operating costs to their optimal level." },
  { word: "Reliable", text: "Trained teams and 24x7 support mean your facility is always in good hands." },
  { word: "Innovative", text: "We keep finding better, greener ways to care for your spaces." },
];

export const kpis = [
  "Enhanced employee productivity and innovation through better workplace environments",
  "Improved customer satisfaction and experience",
  "Stronger workplace culture and engagement",
  "Increased agility to adapt to changes in the external environment",
];

export const values = [
  { icon: "◇", title: "Integrity", text: "We work with honesty, transparency, and a deep sense of responsibility." },
  { icon: "✦", title: "Excellence", text: "We continuously strive for perfection in service delivery and satisfaction." },
  { icon: "◎", title: "Teamwork", text: "Collaboration is the foundation of our strength and success." },
  { icon: "♡", title: "Customer-centricity", text: "We listen, understand, and act with our clients’ best interests at heart." },
  { icon: "❋", title: "Sustainability", text: "We prioritize eco-friendly practices that promote a better tomorrow." },
];

export const processSteps = [
  { title: "Understand", text: "We visit your site, listen to your needs, and study how your spaces are used." },
  { title: "Plan", text: "We design a tailored service plan with clear scope, staffing, and KPIs." },
  { title: "Deliver", text: "Trained teams and supervisors put the plan into action, 24x7." },
  { title: "Improve", text: "Regular audits and reports help us keep raising the standard." },
];

export const sectors = [
  { title: "Corporate offices", image: photos.officeHall },
  { title: "Hospitals & healthcare", image: photos.hospital },
  { title: "Residential societies", image: photos.apartments },
  { title: "Retail & malls", image: photos.mall },
  { title: "Educational institutions", image: photos.campus },
  { title: "Industrial & high-rise", image: photos.highrise },
];

export const workforce = [
  {
    title: "Housekeeping staff",
    text: "Trained in modern cleaning methods, hygiene standards, and the safe use of equipment and products.",
  },
  {
    title: "Security personnel",
    text: "Vetted, disciplined, and trained in access control, patrolling, and emergency response.",
  },
  {
    title: "Skilled technicians",
    text: "Electricians, plumbers, and HVAC specialists who keep building systems in top condition.",
  },
  {
    title: "Experienced supervisors",
    text: "On-site leaders who coordinate teams, check quality, and stay in close touch with clients.",
  },
];

export const careerRoles = [
  { title: "Housekeeping associate", type: "Full-time · Shifts" },
  { title: "Security guard", type: "Full-time · Shifts" },
  { title: "Electrician / MEP technician", type: "Full-time" },
  { title: "HVAC technician", type: "Full-time" },
  { title: "Site supervisor", type: "Full-time" },
  { title: "Front desk executive", type: "Full-time" },
];
