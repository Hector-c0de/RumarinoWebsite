import { notFound } from 'next/navigation';
import { getTeamBySlug } from '@/lib/team-data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TeamDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function TeamDetailPage({ params }: TeamDetailPageProps) {
  const team = getTeamBySlug(params.slug);

  if (!team) {
    notFound();
  }

  const { name, description, teamImage, teamImageHint, members, icon: Icon } = team;

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/team" className="inline-flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span>All Teams</span>
            </Link>
          </Button>
        </div>

        <header className="mb-12 text-center">
            <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
                <Icon className="h-12 w-12" />
            </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{name} Team</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">{description}</p>
        </header>

        <section className="mb-16">
            <Card className="overflow-hidden">
                <Image
                    src={teamImage}
                    alt={`${name} team photo`}
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                    data-ai-hint={teamImageHint}
                />
            </Card>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold text-center mb-10">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden transition-shadow hover:shadow-lg">
                <div className="aspect-square bg-muted">
                    <Image
                        src={member.photoUrl}
                        alt={`Photo of ${member.name}`}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={member.hint}
                    />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.major}</p>
                  <Badge variant="secondary" className="mt-2">{member.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { teams } = await import('@/lib/team-data');
  return teams.map((team) => ({
    slug: team.slug,
  }));
}
