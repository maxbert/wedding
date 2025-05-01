'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AccommodationProps {
  name: string;
  url: string;
  imageUrl?: string;
  details: string[];
}

export function AccommodationCard({ name, url, imageUrl, details }: AccommodationProps) {
  return (
    <div className="flex items-center gap-6">
      {imageUrl && (
        <div className="w-32 h-24 relative flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover rounded-md"
          />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-2xl">{name}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-sm mt-1">
            {detail}
          </p>
        ))}
      </div>
      <Button 
        variant="outline"
        className="bg-[#6A8D73] text-white hover:bg-[#557a5d] border-none rounded-full px-8"
        onClick={() => window.open(url, '_blank')}
      >
        view
      </Button>
    </div>
  );
} 