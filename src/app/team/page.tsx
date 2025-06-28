import { Card } from "@/components/ui/card";
import { teams } from "@/lib/team-data";
import { ArrowRight, Users } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
              <Users className="h-10 w-10" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Meet the Rumarino Team</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              We are a collective of innovators, engineers, and strategists united by a single mission: to conquer the challenges of underwater robotics. Discover the specialized sub-teams that form the backbone of Rumarino.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team) => (
            <Link key={team.slug} href={`/team/${team.slug}`} className="group block">
              <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[400px] md:min-h-0">
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="font-headline text-3xl font-bold mb-4">{team.name}</h2>
                    <p className="text-muted-foreground mb-4 flex-grow">{team.description}</p>
                    <div className="mt-auto font-semibold text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                      <span>View Members</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="relative order-first md:order-last min-h-[200px] md:min-h-full">
                    <Image
                      src={team.teamImage}
                      alt={`${team.name} team photo`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      data-ai-hint={team.teamImageHint}
                    />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
