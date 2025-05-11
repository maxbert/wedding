'use client';

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="venue"/>
      <div className="h-[calc(100vh-64px)] overflow-y-auto relative py-2 px-0 md:px-8">
      <div className="relative border-[3px] h-full w-full border-black rounded-[2.5rem] p-3">
          <div className="border-[3px] border-black rounded-[2rem] relative h-full w-full">
            <div className="h-full flex items-center justify-center">
            <CenterFlower />

              <div className="bg-transparent md:bg-[#fff5eb] rounded-[2rem] w-[32rem] max-w-full py-16 px-6 md:px-12 relative">
                <h1 className="font-['sloop'] text-5xl text-center mb-4 mt-10">Venue</h1>
                <ul className="list-disc list-inside">
                  <li>The ceremony and dinner will be outside, please dress accordingly.</li>
                  <li>Weather usually in the 70s - 80s.</li>
                  <li>The meadow where the ceremony and dinner will take place is in the woods, there will be tree cover, so you won't be in direct sunlight.</li>
                  <li>Formal attire requested.</li>
                  <li>Dancing outside, and the dance floor is made of stone tiles. Block heels recommended.</li>
                  <li className="animate-pulse text-red-600">There is no parking at the venue. Please confirm your accommodation on the RSVP page so we can ensure a shuttle is available to transport you to and from the venue.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <DecorativeLeaf />
        <DecorativeFlower />
      </div>
    </div>
  );
} 