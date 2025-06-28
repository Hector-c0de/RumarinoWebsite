import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    title: "Community Outreach",
    description: "We believe in sharing our passion for robotics. We regularly visit local schools and community centers to demonstrate our AUV and inspire the next generation of engineers.",
    image: "https://placehold.co/600x400.png",
    imageHint: "students robotics workshop"
  },
  {
    title: "Pickleball Fundraisers",
    description: "Our team hosts fun pickleball tournaments to raise funds for new parts and travel expenses. It's a great way to bond as a team and engage with the community.",
    image: "https://placehold.co/600x400.png",
    imageHint: "pickleball tournament sport"
  },
  {
    title: "Weekly Pizza Sales",
    description: "Fueling our late-night build sessions and our budget! Every Friday, we sell delicious pizza on campus to support our project.",
    image: "https://placehold.co/600x400.png",
    imageHint: "pizza food sales"
  }
];

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
          <Zap className="h-10 w-10" />
        </div>
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Team Activities</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
          Beyond the workshop, our team is active in fundraising and community engagement. Here's a look at what we do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <Card key={activity.title} className="overflow-hidden flex flex-col">
            <div className="relative aspect-video">
                <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                    data-ai-hint={activity.imageHint}
                />
            </div>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
