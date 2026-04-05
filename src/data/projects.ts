import type { Project } from '@/types';

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
  },
  {
    id: 3,
    title: "HAUPokemon Monster's App",
    period: 'Mar 2026 – Apr 2026',
    type: 'AWS + Flutter',
    category: 'Mobile',
    summary:
      'Location-based Pokémon GO-inspired mobile app built on real AWS cloud infrastructure. Players register, explore via GPS, detect nearby monsters, and compete on a live leaderboard — all powered by a secure multi-region AWS backend.',
    highlights: [
      'Deployed PHP REST API on Amazon EC2 (eu-west-3 Paris) behind Tailscale VPN — zero public database exposure',
      'Built cross-region VPC Peering between Paris web server and N. Virginia MariaDB over AWS private network',
      'Implemented IAM Role-based EC2 automation — admins start/stop instances directly from the mobile app',
      'GPS monster detection with Pokémon-style alerts: red screen flash, haptic vibration, torch activation, and alarm sound',
      'Interactive OpenStreetMap showing all monster spawn radius zones with real-time player GPS location',
      'JWT-authenticated REST API with 18 endpoints: players, monsters, catches, leaderboard, and EC2 control',
      'Live top 10 leaderboard with podium display; EC2 instance status auto-refreshes every 15 seconds',
    ],
    stack: ['Flutter', 'PHP 8', 'MariaDB', 'AWS EC2', 'AWS VPC', 'AWS IAM', 'Tailscale VPN', 'JWT', 'OpenStreetMap'],
    status: 'Completed',
    images: [
      '/screenshots/haupokemon-login.png',
      '/screenshots/haupokemon-dashboard.png',
      '/screenshots/haupokemon-monsters.png',
      '/screenshots/haupokemon-catch.png',
      '/screenshots/haupokemon-caught.png',
      '/screenshots/haupokemon-leaderboard.png',
      '/screenshots/haupokemon-map.png',
      '/screenshots/haupokemon-ec2-main.png',
      '/screenshots/haupokemon-ec2-2.png',
    ],
  },
];
