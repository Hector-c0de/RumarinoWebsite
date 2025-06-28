import { Button } from "@/components/ui/button";
import { Github, Cog, CircuitBoard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AUVsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
            <h1 className="font-headline text-5xl md:text-6xl font-bold">Hydrus</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
              Our latest generation Autonomous Underwater Vehicle, engineered for excellence in the RoboSub competition.
            </p>
        </header>
        
        <section className="mb-16">
          <div className="rounded-lg overflow-hidden shadow-xl aspect-video relative max-w-5xl mx-auto">
              <Image
                  src="https://placehold.co/1200x800.png"
                  alt="Hydrus AUV"
                  fill
                  className="object-cover"
                  data-ai-hint="underwater robot vehicle"
              />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Github className="h-10 w-10 text-primary"/>
            </div>
            <h2 className="font-headline text-3xl font-bold mb-4">Software Architecture</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Hydrus is powered by a sophisticated software stack running on ROS (Robot Operating System). Our custom computer vision, state estimation, and path planning algorithms enable fully autonomous operation in complex underwater environments.
            </p>
            <Button asChild size="lg">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Explore on GitHub
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center text-center">
             <div className="p-4 bg-accent/10 rounded-full mb-4 flex gap-4">
              <Cog className="h-10 w-10 text-accent"/>
              <CircuitBoard className="h-10 w-10 text-accent"/>
            </div>
            <h2 className="font-headline text-3xl font-bold mb-4">Integrated Design</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Featuring a modular, pressure-rated chassis and a distributed power system with custom PCBs, Hydrus is built for reliability and ease of maintenance. Its hydrodynamic profile and powerful thrusters provide exceptional maneuverability.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
