'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface AccommodationProps {
  town: string;
  name: string;
  url: string;
  description?: string;
}

export function AccommodationCard({ town, name, url, description }: AccommodationProps) {
  return (
    <Card className="border-2 border-black">
      <CardHeader>
        <CardTitle className="font-['sloop'] text-3xl">{town}</CardTitle>
        <CardDescription className="text-lg font-medium">
          {name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="border-2 border-black hover:bg-black hover:text-white transition-colors"
          onClick={() => window.open(url, '_blank')}
        >
          View <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
} 