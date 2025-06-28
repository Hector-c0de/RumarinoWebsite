import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

export default function CompetitionPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
            <Trophy className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-4xl">RoboSub 2025</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-muted-foreground">
            Competition details coming soon! We are gearing up for RoboSub 2025 and will post updates here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
