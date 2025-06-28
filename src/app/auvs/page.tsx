import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function AUVsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto bg-accent/10 text-accent p-3 rounded-full w-fit mb-4">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22a7 7 0 0 0 7-7h-4a3 3 0 0 1-3-3V8h-4v4a3 3 0 0 1-3 3H2a7 7 0 0 0 7 7z" />
                <path d="M5 8a7 7 0 0 1 14 0" />
                <path d="M9 4L11 2" />
                <path d="M15 4L13 2" />
              </svg>
          </div>
          <CardTitle className="font-headline text-4xl">Our AUVs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-muted-foreground">
            Detailed specifications and images of Hydrus and our other vehicles are coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
