import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Trophy, Video, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CompetitionPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
            <Trophy className="h-10 w-10" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Competition Journey</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Following our path through the annual RoboSub competition.
          </p>
        </div>

        {/* RoboSub 2025 Section */}
        <section id="robosub2025" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2025</h2>
            <p className="text-muted-foreground pt-2 mb-6">Our focus for the current season.</p>
            
            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-xl mb-2">Our Strategy</h3>
                    <p className="text-muted-foreground max-w-4xl">
                    This year, our strategy revolves around enhancing our AUV's perception and decision-making capabilities. We are implementing a new multi-sensor fusion algorithm and a more robust mission planner to tackle the complex tasks of RoboSub 2025. Our mechanical design features a modular system for quick adjustments and repairs during the competition.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                    <Link href="#">
                        <Video className="mr-2 h-5 w-5" />
                        Team Video 2025
                    </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                    <a href="/TDR.pdf" download="Rumarino-TDR-2025.pdf">
                        <FileText className="mr-2 h-5 w-5" />
                        Download TDR
                    </a>
                    </Button>
                </div>
            </div>
        </section>

        <Separator className="my-16"/>

        {/* RoboSub 2024 Section */}
        <section id="robosub2024" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2024</h2>
            <p className="text-muted-foreground pt-2 mb-8">A look back at our performance last year.</p>

            <div className="space-y-8">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://placehold.co/1200x675.png"
                        alt="Rumarino team at RoboSub 2024"
                        fill
                        className="object-cover"
                        data-ai-hint="robotics competition team"
                    />
                </div>
                {/* Video Player for RoboSub 2024 */}
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video controls className="w-full h-full object-cover">
                        <source src="/robosub_2024_1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                     <Button asChild>
                        <Link href="#">
                            <Video className="mr-2 h-5 w-5" />
                            Watch 2024 Recap
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="#">
                            <FileText className="mr-2 h-5 w-5" />
                            View 2024 TDR
                        </Link>
                    </Button>
                </div>

                <div>
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2"><Camera className="h-5 w-5 text-accent"/>Competition Gallery</h3>
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="relative aspect-square rounded-lg overflow-hidden">
                             <Image src="https://placehold.co/400x400.png" alt="Competition photo 1" fill className="object-cover" data-ai-hint="underwater robot action"/>
                        </div>
                         <div className="relative aspect-square rounded-lg overflow-hidden">
                             <Image src="https://placehold.co/400x400.png" alt="Competition photo 2" fill className="object-cover" data-ai-hint="team working robot"/>
                        </div>
                         <div className="relative aspect-square rounded-lg overflow-hidden">
                             <Image src="https://placehold.co/400x400.png" alt="Competition photo 3" fill className="object-cover" data-ai-hint="team celebrating success"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Separator className="my-16"/>

        {/* Previous Competitions */}
        <div className="text-center text-muted-foreground">
          <p>Previous competition history coming soon as we continue to document our journey.</p>
        </div>

      </div>
    </div>
  );
}
