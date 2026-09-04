/**
 * CORLINK IT — canonical site content.
 *
 * Every string here is ported verbatim from the existing CORLINK IT website.
 * Do not rewrite, shorten, or invent copy. UI/UX may change; content may not.
 */

export const brand = {
  name: "CorlinkIt",
  footerName: "Corlink IT",
  logo: "/logo.png",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/about" },
  { name: "Medical", path: "/medical-coding" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Contact", path: "/contact" },
] as const;

export const navCta = { label: "Get Quote", path: "/contact" };

/** Vertical rail sections on the homepage. */
export const railSections = [
  { num: "01", label: "Home", id: "home" },
  { num: "02", label: "About", id: "about" },
  { num: "03", label: "Services", id: "services" },
  { num: "04", label: "Medical", id: "medical" },
  { num: "05", label: "Opportunities", id: "opportunities" },
  { num: "06", label: "Contact", id: "contact" },
] as const;

/** Visual-only ecosystem labels used in the hero composition. */
export const ecosystemStages = ["IDEAS", "TECHNOLOGY", "PEOPLE", "PROGRESS"] as const;

export const hero = {
  badge: "CORLINK IT",
  headline: "Transform",
  headlineAccent: "Your Digital Future",
  subheading: "Where Innovation Drives Excellence, and Your Success Is Our Mission.",
  primaryCta: { label: "Explore Services", path: "/services" },
  secondaryCta: { label: "Learn More", path: "/about" },
  badgeStat: { value: "10+", label: "GLORIOUS YEARS" },
  image: "/assets/images/corl-globe.webp",
};

export const liveCodes = {
  title: "Live Codes",
  analytics: "Analytics",
  vitals: "Vitals",
  items: [
    { system: "ICD", code: "E11.9" },
    { system: "CPT", code: "99213" },
    { system: "HCPCS", code: "E0114" },
  ],
};

export const homeAbout = {
  eyebrow: "ABOUT",
  title: "Accelerate Your Digital Transformation Journey",
  body: "CORLINK IT is your trusted partner in navigating the complex digital landscape. As a premier mobile app development and IT consulting powerhouse, we don’t just deliver technology solutions—we craft digital experiences that revolutionize how you do business.",
  points: [
    "Supporting Fortune 500 enterprises and startups alike.",
    "Driving growth with technology and innovation.",
    "Delivering measurable results that unlock potential.",
  ],
  cta: { label: "Learn More", path: "/about" },
  image: "/assets/images/corl-home-office.webp",
};

export const stats = [
  { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 200, suffix: "+", label: "ACTIVE CLIENTS" },
  { value: 400, suffix: "+", label: "IT PROJECTS" },
  { value: 50, suffix: "+", label: "TEAM ADVISORS" },
];

export const homeServices = {
  eyebrow: "SERVICES",
  title: "Transforming Business Through Innovative Technology",
  body: "Unlock your business potential with CORLINK IT’s cutting-edge technology solutions. We don’t just deliver services, We craft digital transformations that propel your business ahead of the competition.",
  cta: { label: "View Services", path: "/services" },
  features: [
    {
      title: "Deep Technical Expertise",
      body: "Our multidisciplinary teams master diverse technology stacks, ensuring the perfect solution for your unique challenges.",
      image: "/assets/images/home-consulting.jpg",
    },
    {
      title: "Strategic Partnership Network",
      body: "Exclusive collaborations with global technology leaders amplify our capabilities and unlock premium resources for your projects.",
      image: "/assets/images/home-healthtech.jpg",
    },
    {
      title: "Data-Driven Results",
      body: "Every solution is built with measurable KPIs, ensuring tangible ROI and business impact from day one.",
      image: "/assets/images/svc-data.jpg",
    },
    {
      title: "Global Reach, Local Excellence",
      body: "Spanning multiple continents with offices across India and North America, we combine local market insights with international best practices.",
      image: "/assets/images/svc-cloud.jpg",
    },
  ],
};

/** The six signature service panels shown in the homepage service corridor. */
export const serviceCorridor = [
  { num: "01", title: "Enterprise Business Applications", image: "/assets/images/corl-enterprise.webp" },
  { num: "02", title: "Mobile App Development", image: "/assets/images/corl-mobile.webp" },
  { num: "03", title: "Blockchain Solutions", image: "/assets/images/corl-blockchain.webp" },
  { num: "04", title: "AI & Machine Learning", image: "/assets/images/corl-ai.webp" },
  { num: "05", title: "Data Science & Analytics", image: "/assets/images/corl-data.webp" },
  { num: "06", title: "Automation & RPA", image: "/assets/images/corl-rpa.webp" },
];

export const whyCorlink = {
  title: "Why Industry Leaders Choose CORLINK IT",
  items: [
    "Proven Track Record of Success",
    "End-to-End Digital Solutions",
    "Rapid Time-to-Market",
    "Innovation-First Approach",
  ],
  banner: "MORE THAN 1K CLIENTS CHOOSE CORLINK IT",
  offerTitle: "Service We Offer",
  offer: [
    "Enterprise Business Applications",
    "Mobile Application Development",
    "Blockchain Solutions",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Cloud Technologies",
    "Medical Coding",
    "Healthcare Technology",
  ],
};

export const serviceTicker = [
  "OUR SERVICES",
  "ENTERPRISE BUSINESS APPLICATIONS",
  "MOBILE APP DEVELOPMENT",
  "BLOCKCHAIN SOLUTIONS",
  "AI & MACHINE LEARNING",
  "DATA SCIENCE & ANALYTICS",
  "AUTOMATION & RPA",
];

export const finalCta = {
  title: "Ready to Transform Your Business?",
  body: "Connect with us today and discover how CORLINK IT can turn your technological aspirations into competitive advantages.",
  cta: { label: "Contact Us", path: "/contact" },
  image: "/assets/images/corl-boardroom.webp",
};

export const footer = {
  tagline: "Where Innovation Drives Excellence, and Your Success Is Our Mission.",
  columns: [
    {
      heading: "SERVICES",
      links: [
        { label: "Enterprise Business Applications", path: "/services" },
        { label: "Mobile Application Development", path: "/services" },
        { label: "AI & Machine Learning", path: "/services" },
        { label: "Cloud Technologies", path: "/services" },
        { label: "Medical Coding", path: "/medical-coding" },
      ],
    },
    {
      heading: "COMPANY",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
  ],
  contactHeading: "CONTACT",
  contact: [
    "reach@corlinkit.com",
    "+91 70360 77778",
    "Flat No 502, Sri Vishnu Elite, Pupalaguda, Manikonda, Hyderabad 500089",
    "www.corlinkit.com",
    "GST: 36AAMCC9546N1ZT",
  ],
  copyright: "© 2026 Corlink IT. All rights reserved.",
};

/* ------------------------------- SERVICES ------------------------------- */

export const servicesPage = {
  hero: {
    eyebrow: "OUR EXPERTISE",
    title: "Digital solutions",
    titleAccent: "for modern enterprises",
    body: "From visionary application development to specialized healthcare technology. We deliver high-impact engineering that drives business value and operational efficiency.",
  },
  items: [
    {
      title: "Enterprise Business Applications",
      body: "At CORLINK IT, we empower enterprises with intelligent business applications. Our SAP-powered ERP systems streamline operations with real-time visibility. We build custom enterprise software that scales with your growth. Through legacy system modernization, we revitalize existing infrastructure.",
      image: "/assets/images/corl-enterprise.webp",
    },
    {
      title: "Mobile Application Development",
      body: "At CORLINK IT, we deliver cutting-edge mobile solutions to engage customers and empower teams. Our customer-centric retail apps boost sales with personalized shopping experiences. Through healthcare and telemedicine platforms, we enable remote care and patient monitoring. With field service management tools.",
      image: "/assets/images/corl-mobile.webp",
    },
    {
      title: "Blockchain Solutions",
      body: "At CORLINK IT, we build trust and transparency with distributed ledger technology. Our supply chain verification solutions ensure end-to-end product authenticity and traceability. With smart contracts, we help automate business processes through tamper-proof agreements. Through cryptocurrency integration.",
      image: "/assets/images/corl-blockchain.webp",
    },
    {
      title: "AI & Machine Learning",
      body: "At CORLINK IT, we help businesses harness the power of intelligent automation. With predictive analytics, organizations can forecast trends and make data-driven decisions. Our computer vision solutions automate quality control and visual inspection processes.",
      image: "/assets/images/corl-ai.webp",
    },
    {
      title: "Data Science & Analytics",
      body: "At CORLINK IT, we transform raw data into meaningful insights that drive strategy and growth. Our business intelligence dashboards enable real-time KPI monitoring and reporting. Through risk assessment models and customer behavior analytics, we help protect businesses and anticipate customer needs.",
      image: "/assets/images/corl-data.webp",
    },
    {
      title: "Automation & RPA",
      body: "At CORLINK IT, we help businesses eliminate repetitive tasks and boost overall efficiency. Our robotic process automation solutions automate routine business processes seamlessly. With intelligent workflow management, we streamline operations through smart routing. Through quality assurance automation.",
      image: "/assets/images/corl-rpa.webp",
    },
    {
      title: "Cybersecurity Solutions",
      body: "At CORLINK IT, we protect your digital assets with enterprise-grade security solutions. Our advanced threat detection uses AI-powered monitoring and rapid response. With compliance management and zero-trust architecture, we ensure regulatory confidence and secure access control. Through incident response planning.",
      image: "/assets/images/corl-cyber.webp",
    },
    {
      title: "Cloud Technologies",
      body: "At CORLINK IT, we help businesses scale effortlessly with modern cloud infrastructure. Our multi-cloud strategies optimize costs and performance across providers. With cloud migration services and DevOps implementation, we enable seamless, cloud-first operations. Through disaster recovery solutions.",
      image: "/assets/images/corl-cloud.webp",
    },
    {
      title: "Web Development",
      body: "At CORLINK IT, we create powerful digital experiences that engage users and drive conversions. Our progressive web applications deliver fast, responsive, and engaging interactions. With e-commerce platforms and API development & integration, we boost sales and enable seamless connectivity.",
      image: "/assets/images/corl-web.webp",
    },
    {
      title: "Digital Marketing & Growth",
      body: "At CORLINK IT, we help businesses amplify their reach and accelerate growth. Our data-driven marketing strategies deliver ROI-focused campaigns with measurable results. Through marketing automation, SEO, and content optimization, we nurture leads and drive organic traffic. With social media management, we build strong brand presence and foster community engagement.",
      image: "/assets/images/corl-marketing.webp",
    },
    {
      title: "Medical Coding",
      body: "Enterprise-grade medical coding and healthcare technology services.",
      image: "/assets/images/corl-medicalcoding.webp",
    },
    {
      title: "Healthcare Technology",
      body: "Healthcare platforms, interoperability, and digital health solutions.",
      image: "/assets/images/corl-healthtech.webp",
    },
    {
      title: "IT Consulting & Strategy",
      body: "Advisory, architecture planning, and transformation roadmaps.",
      image: "/assets/images/corl-consulting.webp",
    },
    {
      title: "Staffing & Talent Solutions",
      body: "Build teams faster with vetted talent and delivery support.",
      image: "/assets/images/corl-staffing.webp",
    },
    {
      title: "Product Development",
      body: "From idea to launch with scalable engineering and design.",
      image: "/assets/images/corl-product.webp",
    },
  ],
  values: [
    {
      title: "Innovation in Our DNA",
      body: "We build with a future-first mindset and rapid experimentation.",
    },
    {
      title: "Global Vision, Local Understanding",
      body: "We combine global best practices with local execution excellence.",
    },
    {
      title: "Your Success is Our Mission",
      body: "We align to outcomes, not just deliverables, from day one.",
    },
  ],
  hoverHint: "Hover to Explore",
  readMore: "Read More",
};

/* -------------------------------- ABOUT -------------------------------- */

export const aboutPage = {
  hero: {
    eyebrow: "WHO WE ARE",
    title: "Where innovation",
    titleAccent: "meets execution",
    body: "CORLINK IT isn’t just an IT firm—we are a catalyst for digital evolution. Our team of visionary technologists, strategists, and engineers work relentlessly to turn complex business challenges into elegant, scalable solutions.",
    image: "/assets/images/corl-team.webp",
  },
  mv: [
    {
      label: "The Mission",
      body: "Your Success is Our Mission — We don’t just deliver projects; we forge partnerships. Your vision becomes our blueprint, and we execute with precision to achieve measurable business outcomes.",
      image: "/assets/images/about-mission.jpg",
    },
    {
      label: "The Vision",
      body: "Our vision is to become a globally recognized leader in IT services and technology solutions, empowering businesses worldwide through innovation, excellence, and trusted digital transformation partnerships.",
      image: "/assets/images/about-vision-cloud.jpg",
    },
  ],
  capabilitiesLabel: "Capabilities",
  expertiseTitle: "Expertise",
  expertise: [
    "ERP",
    "Cybersecurity",
    "AI/ML",
    "Blockchain",
    "Cloud",
    "Data Science",
    "Embedded Systems",
  ],
  dna: {
    eyebrow: "OUR DNA",
    title: "Core Directives",
    items: [
      {
        title: "Innovation in Our DNA",
        body: "We build with a future-first mindset, combining creativity with engineering discipline.",
      },
      {
        title: "Global Vision, Local Understanding",
        body: "We align global best practices with local execution excellence to deliver outcomes that last.",
      },
    ],
  },
  leadershipTitle: "Leadership",
  leaders: [
    { name: "KOUSHIK ANGARIKA", role: "Founder & CEO", image: "/assets/images/leader-ceo.jpg" },
    { name: "A Rajendra Prasad", role: "Managing Director", image: "/assets/images/leader-coo.jpg" },
  ],
  exploreTitle: "Explore",
  explore: [
    "Enterprise Business Applications",
    "Mobile Application Development",
    "Blockchain Solutions",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Automation & RPA",
    "Cybersecurity Solutions",
    "Cloud Technologies",
    "Web Development",
    "Digital Marketing & Growth",
    "Medical Coding",
    "Healthcare Technology",
  ],
};

/* ---------------------------- OPPORTUNITIES ---------------------------- */

export const opportunitiesPage = {
  hero: {
    eyebrow: "CAREERS",
    title: "Build your future",
    titleAccent: "with CorlinkIt",
    body: "Join a team of passionate innovators shaping the future of technology and healthcare. Discover your next big opportunity.",
  },
  openTitle: "Open Positions",
  openBody: "We are always looking for talented individuals to join our growing team.",
  jobs: [
    {
      dept: "Engineering",
      title: "Senior Full Stack Developer",
      location: "Hyderabad, India",
      type: "Full-time",
      exp: "5+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-enterprise.webp",
    },
    {
      dept: "Healthcare",
      title: "Medical Coding Specialist",
      location: "Remote / Hyderabad",
      type: "Full-time",
      exp: "3+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-medicalcoding.webp",
    },
    {
      dept: "Design",
      title: "UI/UX Designer",
      location: "Hyderabad, India",
      type: "Full-time",
      exp: "2-4 years",
      cta: "Apply Now",
      image: "/assets/images/corl-product.webp",
    },
    {
      dept: "Engineering",
      title: "Cloud Infrastructure Engineer",
      location: "Remote",
      type: "Full-time",
      exp: "4+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-cloud.webp",
    },
  ],
  noFit: {
    title: "Don't see a fit?",
    body: "We are always eager to meet driven and talented individuals. Send us your resume and tell us how you can make a difference at CorlinkIt.",
    cta: "Submit Resume",
  },
};

/* ------------------------------- CONTACT ------------------------------- */

export const contactPage = {
  hero: {
    eyebrow: "CONTACT",
    title: "Let's build something",
    titleAccent: "extraordinary",
    body: "Whether you have a specific project in mind or just want to explore possibilities, our team of experts is ready to help you navigate your digital transformation.",
  },
  form: {
    title: "Submit Your Request",
    subtitle: "Reach out and share what you need. We’ll respond with next steps.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      { name: "company", label: "Company", type: "text", required: false },
      { name: "message", label: "Message", type: "textarea", required: true },
    ] as const,
    submit: "Submit Your Request",
    success: "Thanks — we’ll respond with next steps.",
  },
  info: {
    title: "Contact Information",
    items: [
      { label: "Electronic", value: "reach@corlinkit.com" },
      { label: "Voice", value: "+91 70360 77778" },
      { label: "Physical", value: "Flat No 502, Sri Vishnu Elite\nPupalaguda, Manikonda\nHyderabad 500089" },
    ],
  },
};
