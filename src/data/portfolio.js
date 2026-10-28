import projectsData from './projects.json'

export const profile = {
  name: 'Hasan Nameer',
  firstName: 'Hasan',
  lastName: 'Nameer',
  role: 'Full-Stack Developer',
  roles: ['Full-Stack Developer', 'React Specialist', 'UI/UX Designer', 'Problem Solver'],
  tagline:
    'I design and build fast, accessible web products — from the first wireframe to the final deploy.',
  location: 'Remote · Worldwide',
  availability: 'Available for freelance & full-time work',
  email: 'hello@hasannameer.dev',
  resumeUrl: '#',
  github: 'https://github.com/91fazlulkarim91-dotcom',
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/91fazlulkarim91-dotcom' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/' },
    { label: 'X / Twitter', icon: 'twitter', url: 'https://x.com/' },
    { label: 'Dribbble', icon: 'dribbble', url: 'https://dribbble.com/' },
  ],
  stats: [
    { value: '5+', label: 'Years building' },
    { value: '40+', label: 'Projects shipped' },
    { value: '25+', label: 'Happy clients' },
  ],
  about: [
    "I'm a full-stack developer who cares as much about how a product feels as how it works. For the past five years I've helped startups and studios turn rough ideas into polished, production-ready web apps.",
    'My sweet spot is the intersection of engineering and design: React and TypeScript on the front, Node and Postgres on the back, and an obsessive eye for the details in between — motion, accessibility, performance budgets and all.',
    "When I'm not shipping, you'll find me exploring new design systems, mentoring junior devs, or losing track of time in a good side project.",
  ],
  highlights: [
    'Product-minded engineering',
    'Pixel-perfect interfaces',
    'Performance first',
    'Clear communication',
  ],
}

export const techMarquee = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'GraphQL',
  'Figma',
  'Docker',
  'Vite',
  'Framer Motion',
  'Prisma',
]

export const skills = [
  {
    category: 'Frontend',
    icon: 'code',
    description: 'Interfaces that feel instant and look intentional.',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML / CSS / Tailwind', level: 94 },
      { name: 'Motion & Animation', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    description: 'APIs and data layers built to scale calmly.',
    items: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL / Prisma', level: 84 },
      { name: 'REST / GraphQL', level: 86 },
      { name: 'Auth & Security', level: 80 },
    ],
  },
  {
    category: 'Tooling & Design',
    icon: 'sparkles',
    description: 'The workflow around the code, from Figma to CI.',
    items: [
      { name: 'Figma / UI Design', level: 88 },
      { name: 'Git / GitHub Actions', level: 90 },
      { name: 'Testing (Jest, RTL)', level: 78 },
      { name: 'Docker / Vercel', level: 80 },
    ],
  },
]

/**
 * Projects live in their own JSON file — src/data/projects.json
 * Add, remove or reorder entries there to change the Projects section.
 */
export const projects = projectsData

export const gallery = [
  {
    src: '/images/gallery-1.jfif',
    alt: 'A moment from the studio',
    label: 'Moment 01',
    caption: 'Behind the scenes',
  },
  {
    src: '/images/gallery-2.jfif',
    alt: 'A moment captured on location',
    label: 'Moment 02',
    caption: 'Off the clock',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]
