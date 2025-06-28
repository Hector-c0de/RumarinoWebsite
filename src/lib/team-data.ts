import { Briefcase, Cpu, Cog, Zap } from 'lucide-react';

export type TeamMember = {
  name: string;
  photoUrl: string;
  year: string;
  major: string;
  hint?: string;
};

export type Team = {
  name: string;
  slug: string;
  description: string;
  teamImage: string;
  teamImageHint: string;
  icon: React.ComponentType<{ className?: string }>;
  members: TeamMember[];
};

export const teams: Team[] = [
  {
    name: 'Management',
    slug: 'management',
    description: 'The Management team leads the project, ensuring we meet our goals on time and within budget. They handle logistics, outreach, and strategic planning to steer the Rumarino team to success.',
    teamImage: 'https://placehold.co/1200x600.png',
    teamImageHint: 'team meeting presentation',
    icon: Briefcase,
    members: [
      { name: 'Alex Johnson', photoUrl: 'https://placehold.co/400x400.png', hint: 'professional headshot', year: '4th Year', major: 'Business Administration' },
      { name: 'Brenda Smith', photoUrl: 'https://placehold.co/400x400.png', hint: 'professional headshot', year: '3rd Year', major: 'Marketing' },
      { name: 'Charles Brown', photoUrl: 'https://placehold.co/400x400.png', hint: 'professional headshot', year: '4th Year', major: 'Finance' },
    ],
  },
  {
    name: 'Computer Systems',
    slug: 'computer-systems',
    description: 'The Computer Systems team is the brain of our AUV. They develop the software for navigation, sensor integration, and autonomous decision-making, bringing Hydrus to life through code.',
    teamImage: 'https://placehold.co/1200x600.png',
    teamImageHint: 'students coding computer lab',
    icon: Cpu,
    members: [
      { name: 'David Lee', photoUrl: 'https://placehold.co/400x400.png', hint: 'student headshot', year: '3rd Year', major: 'Computer Science' },
      { name: 'Emily White', photoUrl: 'https://placehold.co/400x400.png', hint: 'student headshot', year: '2nd Year', major: 'Software Engineering' },
      { name: 'Frank Green', photoUrl: 'https://placehold.co/400x400.png', hint: 'student headshot', year: '4th Year', major: 'Computer Engineering' },
      { name: 'Grace Hall', photoUrl: 'https://placehold.co/400x400.png', hint: 'student headshot', year: '3rd Year', major: 'Computer Science' },
    ],
  },
  {
    name: 'Mechanical',
    slug: 'mechanical',
    description: 'The Mechanical team is responsible for the physical design and fabrication of our AUV. From the chassis to the manipulators, they ensure Hydrus is robust, hydrodynamic, and ready for the depths.',
    teamImage: 'https://placehold.co/1200x600.png',
    teamImageHint: 'engineering students workshop',
    icon: Cog,
    members: [
      { name: 'Henry King', photoUrl: 'https://placehold.co/400x400.png', hint: 'engineer headshot', year: '4th Year', major: 'Mechanical Engineering' },
      { name: 'Ivy Scott', photoUrl: 'https://placehold.co/400x400.png', hint: 'engineer headshot', year: '3rd Year', major: 'Mechanical Engineering' },
      { name: 'Jack Wright', photoUrl: 'https://placehold.co/400x400.png', hint: 'engineer headshot', year: '2nd Year', major: 'Aerospace Engineering' },
    ],
  },
  {
    name: 'Electrical',
    slug: 'electrical',
    description: 'The Electrical team powers our AUV. They design and manage the custom PCBs, power distribution systems, and sensor wiring, ensuring every component communicates and functions flawlessly underwater.',
    teamImage: 'https://placehold.co/1200x600.png',
    teamImageHint: 'electronics lab circuit board',
    icon: Zap,
    members: [
      { name: 'Karen Adams', photoUrl: 'https://placehold.co/400x400.png', hint: 'technician headshot', year: '3rd Year', major: 'Electrical Engineering' },
      { name: 'Leo Clark', photoUrl: 'https://placehold.co/400x400.png', hint: 'technician headshot', year: '4th Year', major: 'Electrical Engineering' },
      { name: 'Mia Lewis', photoUrl: 'https://placehold.co/400x400.png', hint: 'technician headshot', year: '2nd Year', major: 'Computer Engineering' },
    ],
  },
];

export const getTeamBySlug = (slug: string) => {
  return teams.find((team) => team.slug === slug);
}
