import { Button } from '@/components/ui/button';
import { Download, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
          poster="hydrus.jpeg"
        >
          {/* Placeholder video, replace with an actual underwater video */}
          <source src="hero_movie.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center p-4">
          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 text-shadow animate-fade-in-down">
            RUMARINO
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
            Diving into the future of autonomous underwater robotics.
          </p>
        </div>
      </section>

      <section id="about" className="w-full bg-background">
        <div className="w-full">
          <Image
            src="https://placehold.co/1920x800.png"
            alt="Rumarino team working on the Hydrus AUV"
            width={1920}
            height={800}
            className="object-cover w-full h-auto max-h-[60vh]"
            data-ai-hint="robotics team underwater vehicle"
          />
        </div>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-24">
          <h2 className="font-headline text-3xl font-bold text-accent md:text-5xl">
            Meet the Team &amp; Our AUV
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            We are a passionate, interdisciplinary team from the university, dedicated to pushing the boundaries of marine technology.
          </p>
          <p className="mt-6 max-w-3xl">
            Our flagship autonomous underwater vehicle, Hydrus, is a culmination of countless hours of design, engineering, and testing. It represents our commitment to innovation and our readiness to compete at RoboSub 2025.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="font-bold">
              <Link href="/team">
                <Rocket className="mr-2 h-5 w-5" />
                Our Mission
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="/auvs">
                Explore Hydrus
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="tdr" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4">
            Dive Deeper into Our Technology
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            Explore the intricate details of our AUV's design, systems, and strategy in our comprehensive Technical Design Report for the RoboSub 2025 competition.
          </p>
          <Button asChild size="lg" className="px-10 py-8 text-lg font-bold shadow-lg transition-shadow hover:shadow-primary/40">
            <a href="/TDR.pdf" download="Rumarino-TDR-2025.pdf">
              <Download className="mr-3 h-6 w-6" />
              Download Technical Design Report
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
