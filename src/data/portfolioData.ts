import { Achievement, Certification, Experience, Project, SkillCategory } from '../types/portfolio';

const basePath = (import.meta.env.BASE_URL || '/').endsWith('/')
  ? (import.meta.env.BASE_URL || '/')
  : `${import.meta.env.BASE_URL}/`;

export const personalInfo = {
  name: 'Anushri P.B.',
  title: 'Aspiring Software Developer | AI Enthusiast | CSE Student',
  degree: 'B.E. Computer Science and Engineering',
  college: 'SNS College of Technology, Coimbatore',
  currentYear: 'Second Year',
  expectedGraduation: '2029',
  cgpa: '8.95',
  email: 'anushriponnusamy@gmail.com',
  githubUrl: 'https://github.com/pbanushri-hash',
  githubUsername: 'pbanushri-hash',
  linkedinUrl: 'https://www.linkedin.com/in/anushri-p-b-cse/',
  introduction:
    'I am a Computer Science and Engineering student interested in software development, artificial intelligence, cloud computing, and data analytics. I enjoy exploring new technologies, building practical projects, participating in technical events, and improving my problem-solving skills.',
  careerGoal:
    'Secure software development and AI-related internships and prepare for future placements at leading technology companies.',
  resumePath: `${basePath}resume.pdf`,
  resumeDownloadFilename: 'Anushri_PB_Resume.pdf',
  profilePhotoUrl: `${basePath}profile.jpg`,
  resumeScanImageUrl: `${basePath}assets/aistudio/image_b05eab35.png`,
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python', description: 'Core algorithms, data structures, automation, and AI workflows' },
      { name: 'JavaScript', description: 'Modern ES6+, interactive web frontends, and dynamic DOM logic' },
      { name: 'TypeScript', description: 'Type-safe scalable application development and interfaces' },
      { name: 'C#', description: 'Object-oriented programming, game scripting, and Unity integration' },
    ],
  },
  {
    name: 'Web Development',
    skills: [
      { name: 'HTML5 & Modern Web', description: 'Semantic structure, accessibility standards, and responsive web foundations' },
      { name: 'Modern Web Development', description: 'Component-driven UI, Tailwind CSS, Vite ecosystem, and state management' },
    ],
  },
  {
    name: '3D Development',
    skills: [
      { name: 'Unity Engine', description: '3D virtual environments, interactive simulations, and C# behavior scripts' },
    ],
  },
  {
    name: 'Core & Specialized Skills',
    skills: [
      { name: 'Cloud Computing Fundamentals', description: 'Cloud architectures, service models, and infrastructure concepts' },
      { name: 'Artificial Intelligence Tools', description: 'Practical AI tools integration, model workflows, and automation' },
      { name: 'Prompt Engineering', description: 'Effective contextual structuring and prompt optimization for generative models' },
      { name: 'Research & Analytical Skills', description: 'Technical literature review, systematic problem analysis, and documentation' },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'resourcex',
    title: 'ResourceX — AI-Powered B2B Circular Marketplace',
    shortTitle: 'ResourceX',
    tagline: 'AI-Powered B2B Circular Marketplace for Surplus Business Resources',
    description:
      'A web-based platform designed to help businesses buy and sell surplus resources. The concept supports resource reuse, reduces waste, and promotes a circular economy. The project includes AI-assisted resource recommendations and smart price suggestions.',
    category: 'ai-web',
    technologies: ['React', 'Firebase', 'AI Tools', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/pbanushri-hash/ResourceX',
    hasVerifiedRepo: true,
    highlights: [
      'Circular economy marketplace workflow connecting enterprises with surplus assets',
      'AI-assisted resource recommendation logic based on operational profiles',
      'Smart price suggestions model helping sellers price materials competitively',
      'Firebase persistence for catalog listing, user state, and resource transactions',
    ],
  },
  {
    id: 'mediflow-ai',
    title: 'MediFlow AI — Hospital Intake & Navigation System',
    shortTitle: 'MediFlow AI',
    tagline: 'AI-Powered Hospital Intake, Patient Flow & Indoor Navigation',
    description:
      'An AI-powered hospital intake, patient flow, and navigation system designed to support patient intake and improve navigation within healthcare facilities.',
    category: 'ai-web',
    technologies: ['TypeScript', 'Modern Web Technologies', 'Component UI', 'Routing'],
    githubUrl: 'https://github.com/pbanushri-hash/mediflow-ai',
    hasVerifiedRepo: true,
    highlights: [
      'Intelligent digital intake reducing administrative intake bottlenecks',
      'Patient flow routing and department queuing optimizations',
      'Interactive navigation system aiding patient movement through hospital departments',
      'Clean TypeScript architecture ensuring reliable state handling and data safety',
    ],
  },
  {
    id: '3d-virtual-classroom',
    title: '3D Virtual Classroom / 3D Webinar (EduSphere)',
    shortTitle: '3D Virtual Classroom',
    tagline: 'Interactive 3D Immersive Learning Environment in Unity & C#',
    description:
      'An interactive 3D learning environment created using Unity. It uses 3D models, C# scripting, user navigation, and object interactions to support immersive learning experiences.',
    category: '3d-games',
    technologies: ['Unity', 'C# Scripting', '3D Modeling', 'Interactive Simulation'],
    githubUrl: 'https://github.com/pbanushri-hash/3d-webinar',
    hasVerifiedRepo: true,
    awardBadge: 'First Prize — DT Project Expo',
    highlights: [
      'Won First Prize at the prestigious DT Project Expo for EduSphere implementation',
      'Interactive 3D classroom with real-time user avatar navigation and spatial controls',
      'Object interaction scripts in C# enabling virtual demonstrations and webinars',
      'Optimized 3D asset pipelines for smooth frame rates and realistic lighting',
    ],
  },
  {
    id: 'cold-forge-game',
    title: 'Cold Forge Game',
    shortTitle: 'Cold Forge Game',
    tagline: 'Interactive Web Game Logic & User Interaction Experience',
    description:
      'An interactive game project involving game logic and user interaction using modern web technologies.',
    category: '3d-games',
    technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Game Logic Engine'],
    githubUrl: 'https://github.com/pbanushri-hash/Cold_Forge_games',
    hasVerifiedRepo: true,
    highlights: [
      'Custom game loop architecture handling state updates, scoring, and render ticks',
      'Responsive keyboard and touch controls with collision detection mechanisms',
      'Progressive challenge escalation designed for engaging user interaction',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: 'dt-project-expo',
    title: 'First Prize',
    event: 'DT Project Expo',
    project: 'EduSphere / 3D Virtual Classroom Project',
    description:
      'Awarded First Prize at the DT Project Expo for the EduSphere / 3D Virtual Classroom project, built using Unity and C# interactive systems.',
  },
  {
    id: 'nova-360-project-expo',
    title: 'Third Prize',
    event: 'NOVA 360 Project Expo',
    project: 'Technical Innovation Project Showcase',
    description:
      'Secured Third Prize at the NOVA 360 Project Expo in recognition of technical project design, execution, and presentation.',
  },
];

export const experience: Experience[] = [
  {
    id: 'brainery-spot',
    position: 'Cloud Computing Intern',
    organization: 'Brainery Spot Technology',
    location: 'Coimbatore, India',
    duration: 'June 15, 2026 – June 30, 2026',
    type: 'Internship',
    description:
      'Completed an internship focused on fundamental cloud computing concepts and gained introductory practical exposure to cloud technologies.',
    focusAreas: [
      'Cloud Architecture Fundamentals',
      'Service Models (IaaS, PaaS, SaaS)',
      'Practical Exposure to Cloud Environments',
      'Cloud Deployment Best Practices',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 'scaler-python',
    title: 'Python Course for Beginners With Certification: Mastering the Essentials',
    organization: 'Scaler Topics',
    issuedDate: 'October 2025',
    skillsAcquired: ['Python Core Syntax', 'Control Structures', 'Functions & Modules', 'Algorithmic Problem Solving'],
  },
  {
    id: 'ibm-design-thinking',
    title: 'Enterprise Design Thinking Practitioner',
    organization: 'IBM SkillsBuild',
    issuedDate: 'October 2025',
    skillsAcquired: ['User-Centered Design', 'Empathy Mapping', 'Ideation & Prototyping', 'Agile Team Collaboration'],
  },
  {
    id: 'ibm-ai-fundamentals',
    title: 'Artificial Intelligence Fundamentals',
    organization: 'IBM SkillsBuild',
    issuedDate: 'November 2025',
    skillsAcquired: ['AI Core Concepts', 'Machine Learning Principles', 'Natural Language Basics', 'AI Ethics'],
  },
  {
    id: 'ibm-agile-explorer',
    title: 'Agile Explorer',
    organization: 'IBM SkillsBuild',
    issuedDate: 'November 2025',
    skillsAcquired: ['Agile Methodology', 'Scrum Workflows', 'Sprint Planning', 'Iterative Delivery'],
  },
  {
    id: 'tata-genai-analytics',
    title: 'GenAI Powered Data Analytics Job Simulation',
    organization: 'Tata Group × Forage',
    issuedDate: 'August 2026',
    skillsAcquired: ['Generative AI in Analytics', 'Data Exploration & Insights', 'Executive Reporting', 'Business Analytics'],
  },
];
