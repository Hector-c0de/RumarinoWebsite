import { Separator } from "@/components/ui/separator";
import { Cog, CircuitBoard } from "lucide-react";
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
          <div className="aspect-video relative">
              <Image
                  src="https://placehold.co/1200x800.png"
                  alt="Hydrus AUV"
                  fill
                  className="object-cover"
                  data-ai-hint="underwater robot vehicle"
              />
          </div>
        </section>

        <Separator className="my-8" />
        
        <section id="software" className="py-8">
            <Link href="https://github.com/Rumarino-Team/hydrus-software-stack" target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src="/github_screenshot.png"
                        alt="Rumarino GitHub Repository"
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        data-ai-hint="github repository screenshot"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">Explore on GitHub</span>
                    </div>
                </div>
            </Link>
            
            <div className="max-w-4xl mx-auto mt-8">
                <h2 className="font-headline text-3xl font-bold mb-4">Software Architecture</h2>
                <p className="text-muted-foreground">
                    Hydrus is powered by a sophisticated software stack running on ROS (Robot Operating System). Our custom computer vision, state estimation, and path planning algorithms enable fully autonomous operation in complex underwater environments.
                </p>
            </div>
        </section>

        <Separator className="my-8" />

        <section id="design" className="py-8">
            <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4 flex gap-4">
                    <Cog className="h-10 w-10 text-accent"/>
                    <CircuitBoard className="h-10 w-10 text-accent"/>
                </div>
                <h2 className="font-headline text-3xl font-bold mb-4">Integrated Design</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Featuring a modular, pressure-rated chassis and a distributed power system with custom PCBs, Hydrus is built for reliability and ease of maintenance. Its hydrodynamic profile and powerful thrusters provide a unique combination of stability and agility.
                </p>
            </div>
        </section>
      </div>
    </div>
  );
}
