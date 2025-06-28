import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Logo } from './logo';
import Image from 'next/image';

const sponsors = [
  { name: 'Logo Boeing', logoUrl: '/Logo Boeing.png', hint: 'sponsor logo' },
  { name: 'Logo Colegio (1)', logoUrl: '/Logo Colegio (1).png', hint: 'sponsor logo' },
  { name: 'Logo GM (1)', logoUrl: '/Logo GM (1).png', hint: 'sponsor logo' },
  { name: 'Logo LM', logoUrl: '/Logo LM.png', hint: 'sponsor logo' },
  { name: 'Logo navsea', logoUrl: '/Logo navsea.jpg', hint: 'sponsor logo' },
];

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-10 w-10 text-accent" />
              <span className="font-headline text-xl font-bold">Rumarino</span>
            </Link>
            <p className="text-muted-foreground">
              Advancing autonomous underwater systems for a brighter, bluer future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/team" className="text-muted-foreground hover:text-accent transition-colors">Team</Link></li>
              <li><Link href="/competition" className="text-muted-foreground hover:text-accent transition-colors">Competition</Link></li>
              <li><Link href="/auvs" className="text-muted-foreground hover:text-accent transition-colors">Our AUVs</Link></li>
              <li><Link href="/activities" className="text-muted-foreground hover:text-accent transition-colors">Activities</Link></li>
              <li><Link href="/#tdr" className="text-muted-foreground hover:text-accent transition-colors">Download TDR</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-accent" />
                <a href="mailto:contact@rumarino.com" className="hover:text-accent transition-colors">contact@rumarino.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-accent" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 shrink-0 text-accent mt-1" />
                <span>University Robotics Lab,<br />123 Tech Drive, City, State</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Our Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="bg-muted p-2 rounded-md flex items-center justify-center">
                   <Image
                    src={sponsor.logoUrl}
                    alt={sponsor.name}
                    width={150}
                    height={50}
                    className="object-contain"
                    data-ai-hint={sponsor.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Rumarino Robotics Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
