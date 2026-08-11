import SkyByte from '../assets/SkyByte-new.png';
import Whimsy from '../assets/whimsy.png';
import TastyTray from '../assets/TastyTray.png';
import Impactpath from '../assets/Impactpath.png';

export const stats = [
  { num: '7+', label: 'Languages used regularly', color: 'var(--color-accent-500)' },
  { num: '2', label: 'Leadership roles held', color: 'var(--color-accent-700)' },
  { num: '1', label: 'Secret to find', color: 'var(--color-accent)' },
];

export const experience = [
  {
    role: 'Teaching Assistant',
    org: 'University of Alberta — COMP 174 / 175',
    meta: 'Jan 2026 – Present · Edmonton, CA',
    bullets: [
      'Co-designed assignments and course materials for clarity and engagement',
      'Guided students through core concepts with structured problem-solving',
    ],
  },
  {
    role: 'Volunteer Tech Coordinator',
    org: 'Social Impact Consultancy',
    meta: 'Jan 2026 – Present · Edmonton, CA',
    bullets: [
      'Translated client feedback into actionable product requirements',
      'Triaged issues and ran user testing to improve usability',
    ],
  },
  {
    role: 'President',
    org: 'UofA Bhangra Dance Club',
    meta: '2024 – 2025 · Edmonton, AB',
    bullets: [
      'Led the executive team and organized cultural events',
      'Grew membership across two seasons',
    ],
  },
  {
    role: 'Project Lead',
    org: 'CMPUT 301 Android Development Team',
    meta: '2025 · Edmonton, AB',
    bullets: [
      'Owned the project lifecycle end to end',
      'Coordinated feature delivery across the team',
    ],
  },
];

export const projects = [
  {
    name: 'ImpactPath',
    kicker: 'Client project · React / Node / OpenAI',
    tint: 'var(--color-accent-700)',
    image: Impactpath,
    desc: 'Full-stack planning tool for a Canadian nonprofit consultancy, helping grassroots groups map out revenue-fundraising strategy.',
    bullets: [
      'AI-guided assistant cut manual planning effort by 40%',
      'Designed the API contracts, schemas and real-time collaboration flows',
      'Built secure onboarding and role-based team access',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API', 'WebSockets'],
    link: null,
  },
  {
    name: 'SkyByte',
    kicker: 'Cloud storage · TypeScript',
    tint: 'var(--color-accent-500)',
    image: SkyByte,
    desc: 'A cloud file-storage web app with secure uploads, downloads and folder organization.',
    bullets: [
      'Modular frontend components built for scalable features',
      'Error handling and performance tuning across storage operations',
    ],
    tags: ['TypeScript', 'Appwrite', 'TailwindCSS'],
    link: 'https://github.com/Sky-Bytee/Skybyte',
  },
  {
    name: 'StudyZee',
    kicker: 'Student productivity · Flask',
    tint: 'var(--color-accent-600)',
    image: null,
    desc: 'A student productivity platform with courses, assignments, real-time chat and AI reminders.',
    bullets: [
      'REST + WebSocket services sync tasks and messages live',
      'Auth and role-based permissions on Supabase',
    ],
    tags: ['Python', 'Flask', 'Supabase', 'WebSockets'],
    link: 'https://github.com/JashanveerS',
  },
  {
    name: 'Whimsy',
    kicker: 'Social app · Android / Kotlin',
    tint: 'var(--color-accent-400)',
    image: Whimsy,
    desc: 'An Android social app for posting, connecting and personalized feeds.',
    bullets: [
      'Real-time sync and auth for hundreds of test users',
      'AI image generation to boost creative expression',
    ],
    tags: ['Android', 'Kotlin', 'Firebase', 'OpenAI API'],
    link: 'https://github.com/cmput301-w25/project-bugoff',
  },
  {
    name: 'TastyTray',
    kicker: 'Recipe finder · Flask',
    tint: 'var(--color-accent-800)',
    image: TastyTray,
    desc: "A recipe recommendation app that finds meals from what's already in the fridge.",
    bullets: [
      'Custom recipe input and nutritional lookups',
      'Responsive UI built around fast meal discovery',
    ],
    tags: ['Python', 'Flask', 'JavaScript'],
    link: 'https://github.com/JashanveerS/TastyTray',
  },
];

export const skills = [
  {
    cat: 'Languages',
    blurb: 'Daily drivers across coursework, TAing, and every side project below.',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'Bash'],
  },
  {
    cat: 'Backend / Web',
    blurb: "REST and WebSocket services behind ImpactPath's real-time collaboration and StudyZee's live chat.",
    items: ['Node.js', 'Express', 'Flask', 'FastAPI', 'React', 'REST APIs', 'WebSockets'],
  },
  {
    cat: 'Databases',
    blurb: 'Relational and document stores, from Postgres schemas to Supabase-backed apps.',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    cat: 'Cloud / DevOps',
    blurb: 'Containerizing and shipping small services, with CI/CD keeping them honest.',
    items: ['Docker', 'CI/CD', 'Firebase', 'Azure', 'Linux'],
  },
  {
    cat: 'APIs & Auth',
    blurb: 'Wiring OpenAI into product features and getting auth right the first time.',
    items: ['OpenAI APIs', 'OAuth', 'Third-Party Integration'],
  },
  {
    cat: 'Tools',
    blurb: 'The everyday workflow — version control, notebooks, and tests that catch regressions.',
    items: ['Git', 'GitHub', 'Jupyter', 'Automated Testing'],
  },
];

export const facts = [
  'B.Sc. Computing Science (Software Practices) @ University of Alberta.',
  'Also leads the UofA Bhangra Dance Club — turns out choreography and system design share a lot of DNA.',
  'Ships side projects for fun: a cloud drive, a chat app, even a recipe finder.',
  'There’s a cheat code hiding on this page. Try a controller: ↑ ↑ ↓ ↓ ← → ← → B A.',
  'Secrets so far: a controller code, a word you can type, three clicks on my name, and the footer text. There’s still one more.',
];

export const pixelRow = [
  'var(--color-accent-800)', 'var(--color-accent-600)', 'var(--color-accent)',
  'var(--color-accent-400)', 'var(--color-accent-300)', 'var(--color-accent-400)',
  'var(--color-accent)', 'var(--color-accent-600)', 'var(--color-accent-800)', 'var(--color-accent-900)',
];
