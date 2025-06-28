export type TeamMember = {
  name: string;
  photoUrl: string;
  year: string;
  major: string;
  hint?: string;
  linkedinUrl?: string;
  email?: string;
  rotation?: number;
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
      { name: 'Analia', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '4th', major: 'Business Administration', linkedinUrl: '#', email: 'mailto:alex.j@example.com', rotation: -90 },
      { name: 'Mariela', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '3rd', major: 'Marketing', linkedinUrl: '#', email: 'mailto:brenda.s@example.com', rotation: -90 },
      { name: 'Luis', photoUrl: 'https://placehold.co/400x400/3B82F6/FFFFFF', hint: 'professional headshot', year: '4th', major: 'Finance', linkedinUrl: '#', email: 'mailto:charles.b@example.com', rotation: -90 },
    ],
  },
  {
    name: 'Computer Systems',
    slug: 'computer-systems',
    description: 'The Computer Systems team is the brain of our AUV. They develop the software for navigation, sensor integration, and autonomous decision-making, bringing Hydrus to life through code.',
    teamImage: '/computer_system_team.jpeg',
    teamImageHint: 'students coding computer lab',
    members: [
      { name: 'Cesar', photoUrl: '/cesar.jpg', hint: 'student headshot', year: '3rd', major: 'Computer Science', linkedinUrl: '#', email: 'mailto:cesar@example.com', rotation: -90 },
      { name: 'Edyan', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '2nd', major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:edyan@example.com', rotation: -90 },
      { name: 'Hector', photoUrl: '/Hector.jpg', hint: 'student headshot', year: '4th', major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:hector@example.com', rotation: -90 },
      { name: 'Gabriela', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '3rd', major: 'Computer Science', linkedinUrl: '#', email: 'mailto:gabriela@example.com', rotation: -90 },
      { name: 'Javier', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '3rd', major: 'Computer Science', linkedinUrl: '#', email: 'mailto:javier@example.com', rotation: -90 },
      { name: 'Elian', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '3rd', major: 'Computer Science', linkedinUrl: '#', email: 'mailto:elian@example.com', rotation: -90 },
      { name: 'kristian', photoUrl: '/kristian.jpg', hint: 'student headshot', year: '3rd', major: 'Computer Science', linkedinUrl: '#', email: 'mailto:elian@example.com', rotation: -90 },

    ],
  },
  {
    name: 'Mechanical',
    slug: 'mechanical',
    description: 'The Mechanical team is responsible for the physical design and fabrication of our AUV. From the chassis to the manipulators, they ensure Hydrus is robust, hydrodynamic, and ready for the depths.',
    teamImage: '/mechanical_team.jpeg',
    teamImageHint: 'engineering students workshop',
    members: [
      { name: 'David', photoUrl: '/david.jpg', hint: 'engineer headshot', year: '4th', major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:david@example.com', rotation: -90 },
      { name: 'Veronica', photoUrl: '/veronica.jpg', hint: 'engineer headshot', year: '3rd', major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:veronica@example.com', rotation: -90 },
      { name: 'Anibal', photoUrl: 'https://placehold.co/400x400/F97316/FFFFFF', hint: 'engineer headshot', year: '2nd', major: 'Aerospace Engineering', linkedinUrl: '#', email: 'mailto:anibal@example.com', rotation: -90 },
      { name: 'Ricardo', photoUrl: '/ricardo.jpg', hint: 'engineer headshot', year: '3rd', major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:carlos@example.com', rotation: -90 }
      
    ],
  },
  {
    name: 'Electrical',
    slug: 'electrical',
    description: 'The Electrical team powers our AUV. They design and manage the custom PCBs, power distribution systems, and sensor wiring, ensuring every component communicates and functions flawlessly underwater.',
    teamImage: '/electrical_team.jpeg',
    teamImageHint: 'electronics lab circuit board',
    members: [
      { name: 'Victor', photoUrl: '/victor.jpg', hint: 'technician headshot', year: 'Dinasour', major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:victor@example.com', rotation: -90 },
      { name: 'Mia', photoUrl: '/mia.jpg', hint: 'technician headshot', year: '4th', major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:mia@example.com', rotation: -90 },
      { name: 'Angel', photoUrl: '/angel.jpg', hint: 'technician headshot', year: '2nd', major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:angel@example.com', rotation: -90 },
      { name: 'Natalia', photoUrl: '/natalia.jpg', hint: 'technician headshot', year: '2nd', major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:natalia@example.com', rotation: -90 },
      { name: 'Jaimel ', photoUrl: '/natalia.jpg', hint: 'technician headshot', year: '2nd', major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:natalia@example.com', rotation: -90 },
    ],
  },
];

export const getTeamBySlug = (slug: string) => {
  return teams.find((team) => team.slug === slug);
}
