import type { Project } from '@/types';

// ================================================================
// ✏️  YOUR PROJECTS — edit like blog posts!
//
// To add a new project:
//   1. Copy one of the blocks below
//   2. Paste it at the end (before the closing bracket)
//   3. Fill in your details
//   4. Save — the site updates automatically
//
// Fields:
//   id         → unique number, increment for each new project
//   title      → project name shown on the card
//   period     → "MMM YYYY – MMM YYYY" or "MMM YYYY – Present"
//   type       → short tech label shown as accent badge (e.g. "MERN", "Flutter")
//   category   → "Web" | "Mobile" | "API"  — used by the filter tabs
//   summary    → one paragraph shown on the card AND in the modal overview
//   highlights → bullet points inside the modal (what you built / achieved)
//   stack      → tech tags shown in the modal
//   status     → "Completed" | "In Progress"
//   githubUrl  → optional — shows a GitHub button in modal
//   liveUrl    → optional — shows a Live Demo button in modal
// ================================================================

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Evalanne Marketing BMS',
    period: 'Nov 2025 – Dec 2025',
    type: 'MERN',
    category: 'Web',
    summary:
      'Full-featured business management system for a food distribution company with separate employee and admin panels.',
    highlights: [
      'Developed separate employee and admin systems with distinct access levels',
      'Implemented CRUD operations for inventory, orders, and user management',
      'Designed secure authentication with role-based access control (RBAC)',
      'Enhanced workflow efficiency through real-time data handling and improved system performance',
    ],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth'],
    status: 'Completed',
    // githubUrl: 'https://github.com/Kian-James/evalanne-bms',
  },
  {
    id: 2,
    title: 'StayFinder',
    period: 'Jul 2025 – Oct 2025',
    type: 'Flutter',
    category: 'Mobile',
    summary:
      'Mobile application for a water station business with inventory management, order tracking, and customer data management.',
    highlights: [
      'Developed employee and admin systems for water station operations',
      'Implemented CRUD for inventory, order tracking, and customer data',
      'Integrated Firebase authentication and Firestore real-time database',
      'Streamlined business operations and improved workflow efficiency',
    ],
    stack: ['Flutter', 'Firebase', 'Firestore', 'Firebase Auth'],
    status: 'Completed',
    // githubUrl: 'https://github.com/Kian-James/stayfinder',
  },

  // ✏️  PASTE NEW PROJECTS BELOW THIS LINE:
  // {
  //   id: 3,
  //   title: 'My New Project',
  //   period: 'Jan 2026 – Present',
  //   type: 'MERN',
  //   category: 'Web',
  //   summary: 'Short description shown on the project card.',
  //   highlights: [
  //     'Key thing you built',
  //     'Another achievement',
  //     'A third point',
  //   ],
  //   stack: ['React', 'Node.js', 'MongoDB'],
  //   status: 'In Progress',
  //   githubUrl: 'https://github.com/Kian-James/my-new-project',
  //   liveUrl: 'https://my-project.vercel.app',
  // },
];
