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
  members: TeamMember[];
};

export const teams: Team[] = [
  {
    name: 'Management',
    slug: 'management',
    description: 'The Management Team oversees the strategic direction and operations of Rumarino.',
    teamImage: '/managment_team.jpeg',
    teamImageHint: 'Photo of the management team',
    members: [
      { name: 'Alex Johnson', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '4th Year', major: 'Business Administration' },
      { name: 'Brenda Smith', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '3rd Year', major: 'Marketing' },
      { name: 'Charles Brown', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '4th Year', major: 'Finance' },
    ],
  },
  {
    name: 'Computer Systems',
    slug: 'computer-systems',
    description: 'The Computer Systems team is the brain of our AUV. They develop the software for navigation, sensor integration, and autonomous decision-making, bringing Hydrus to life through code.',
    teamImage: '/computer_system_team.jpeg',
    teamImageHint: 'students coding computer lab',
    members: [
      { name: 'David Lee', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '3rd Year', major: 'Computer Science' },
      { name: 'Emily White', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '2nd Year', major: 'Software Engineering' },
      { name: 'Frank Green', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '4th Year', major: 'Computer Engineering' },
      { name: 'Grace Hall', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '3rd Year', major: 'Computer Science' },
    ],
  },
  {
    name: 'Mechanical',
    slug: 'mechanical',
    description: 'The Mechanical team is responsible for the physical design and fabrication of our AUV. From the chassis to the manipulators, they ensure Hydrus is robust, hydrodynamic, and ready for the depths.',
    teamImage: '/mechanical_team.jpeg',
    teamImageHint: 'engineering students workshop',
    members: [
      { name: 'Henry King', photoUrl: 'https://placehold.co/400x400/F97316/FFFFFF', hint: 'engineer headshot', year: '4th Year', major: 'Mechanical Engineering' },
      { name: 'Ivy Scott', photoUrl: 'https://placehold.co/400x400/F97316/FFFFFF', hint: 'engineer headshot', year: '3rd Year', major: 'Mechanical Engineering' },
      { name: 'Jack Wright', photoUrl: 'https://placehold.co/400x400/F97316/FFFFFF', hint: 'engineer headshot', year: '2nd Year', major: 'Aerospace Engineering' },
    ],
  },
  {
    name: 'Electrical',
    slug: 'electrical',
    description: 'The Electrical team powers our AUV. They design and manage the custom PCBs, power distribution systems, and sensor wiring, ensuring every component communicates and functions flawlessly underwater.',
    teamImage: '/electrical_team.jpeg',
    teamImageHint: 'electronics lab circuit board',
    members: [
      { name: 'Karen Adams', photoUrl: 'https://placehold.co/400x400/EAB308/FFFFFF', hint: 'technician headshot', year: '3rd Year', major: 'Electrical Engineering' },
      { name: 'Leo Clark', photoUrl: 'https://placehold.co/400x400/EAB308/FFFFFF', hint: 'technician headshot', year: '4th Year', major: 'Electrical Engineering' },
      { name: 'Mia Lewis', photoUrl: 'https://placehold.co/400x400/EAB308/FFFFFF', hint: 'technician headshot', year: '2nd Year', major: 'Computer Engineering' },
    ],
  },
];

export const getTeamBySlug = (slug: string) => {
  return teams.find((team) => team.slug === slug);
}
