import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teams } from "@/lib/team-data";
import { ArrowRight, Users } from "lucide-react";
import Link from 'next/link';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teams.map((team) => (
            <Link key={team.slug} href={`/team/${team.slug}`} className="group block">
              <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-accent/10 text-accent p-3 rounded-full">
                    <team.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl">{team.name}</CardTitle>
                    <CardDescription className="mt-1">
                      Explore the {team.name} team
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{team.description.substring(0, 120)}...</p>
                   <div className="mt-4 font-semibold text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                     <span>View Members</span>
                     <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
