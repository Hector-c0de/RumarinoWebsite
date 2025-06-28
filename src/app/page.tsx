import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
          poster="https://placehold.co/1920x1080/002244/ffffff.png"
        >
          {/* Placeholder video, replace with an actual underwater video */}
          <source src="https://videos.pexels.com/video-files/853894/853894-hd_1920_1080_25fps.mp4" type="video/mp4" />
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

      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-2xl transition-shadow hover:shadow-primary/20 md:grid md:grid-cols-2 md:gap-8 items-center">
            <div className="md:order-2">
              <Image
                src="https://placehold.co/1200x800.png"
                alt="Rumarino team with Hydrus AUV"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
                data-ai-hint="robotics team underwater vehicle"
              />
            </div>
            <div className="p-8 md:p-12 md:order-1">
              <CardHeader>
                <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
                  Meet the Team & Our AUV
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  We are a passionate, interdisciplinary team from the university, dedicated to pushing the boundaries of marine technology.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Our flagship autonomous underwater vehicle, Hydrus, is a culmination of countless hours of design, engineering, and testing. It represents our commitment to innovation and our readiness to compete at RoboSub 2025.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section id="tdr" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
            Dive Deeper into Our Technology
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-8 text-lg">
            Explore the intricate details of our AUV's design, systems, and strategy in our comprehensive Technical Design Report for the RoboSub 2025 competition.
          </p>
          <Button asChild size="lg" className="font-bold text-lg py-8 px-10 shadow-lg hover:shadow-primary/40 transition-shadow">
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
