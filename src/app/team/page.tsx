import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
            <Users className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-4xl">Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-muted-foreground">
            This page is under construction. Check back soon to meet the brilliant minds behind Rumarino!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
