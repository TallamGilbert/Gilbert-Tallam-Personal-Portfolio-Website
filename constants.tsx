
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Belion Foods',
    description: 'Organic restaurant platform with clean aesthetics and modern green design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://belion-foods-organic-restaurant.vercel.app',
    githubUrl: 'https://github.com/TallamGilbert/Belion-Foods---Organic-Restaurant-Website',
    category: 'Frontend',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Artisan Home Furniture',
    description: 'Modern e-commerce for premium furniture featuring custom design requests.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://artisan-home-furnitures-git-main-tallamgilberts-projects.vercel.app',
    githubUrl: 'https://github.com/TallamGilbert/Artisan-Home-Furnitures',
    category: 'E-commerce',
    status: 'Completed'
  },
  {
    id: '3',
    title: 'The Big Fish Westlands',
    description: 'Seafood restaurant website with menu showcase and delivery integration.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://the-big-fish-westlands-restaurant-website.vercel.app',
    githubUrl: 'https://github.com/TallamGilbert/The-Big-Fish-Westlands---Restaurant-Website',
    category: 'Hospitality',
    status: 'Completed'
  },
  {
    id: '4',
    title: 'Expense Tracker + M-Pesa',
    description: 'Financial management tool integrating M-Pesa for seamless expense tracking.',
    tech: ['PHP', 'Laravel', 'MySQL'],
    category: 'Fintech',
    status: 'In Development'
  },
  {
    id: '5',
    title: 'AI Learning Assistant',
    description: 'Intelligent coding companion powered by AI for beginner developers.',
    tech: ['Laravel', 'OpenAI API', 'MySQL'],
    category: 'AI/EdTech',
    status: 'In Development'
  },
  {
    id: '6',
    title: 'Acacia Nectar',
    description: 'Minimalist website for a Baringo pure honey business.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://acacia-nectar-website.vercel.app',
    githubUrl: 'https://github.com/TallamGilbert/Acacia-nectar-website',
    category: 'Commercial',
    status: 'Completed'
  }
];

export const SKILLS: Skill[] = [
  { 
    name: 'PHP', 
    icon: 'php', 
    description: 'Core scripting for robust, server-side business logic and rapid API development.' 
  },
  { 
    name: 'Laravel', 
    icon: 'laravel', 
    description: 'The PHP framework for web artisans—providing elegant syntax and powerful system tools.' 
  },
  { 
    name: 'MySQL', 
    icon: 'mysql', 
    description: 'Primary relational database for structured data storage with high-query performance.' 
  },
  { 
    name: 'Redis', 
    icon: 'redis', 
    description: 'In-memory data structure store used as a database, cache, and message broker.' 
  },
  { 
    name: 'Docker', 
    icon: 'docker', 
    description: 'Containerization for consistent environment deployment across development and production.' 
  },
  { 
    name: 'JavaScript', 
    icon: 'javascript', 
    description: 'Essential for dynamic client-side interactions and modern interactive UI experiences.' 
  },
  { 
    name: 'Git', 
    icon: 'git', 
    description: 'Distributed version control system for tracking changes and collaborative engineering.' 
  },
  { 
    name: 'Tailwind', 
    icon: 'tailwind', 
    description: 'Utility-first CSS framework for creating highly custom and performant user interfaces.' 
  }
];