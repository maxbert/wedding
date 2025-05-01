'use client';

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="program"/>
      <div className="min-h-[calc(100vh-3.5rem)] relative px-2 md:px-8">
        <div className="h-full border-[3px] border-black rounded-[2.5rem] p-3">
          <div className="h-full border-[3px] border-black rounded-[2rem]">
            <div className="h-full flex items-center justify-center">
              <div className="bg-transparent md:bg-[#fff5eb] rounded-[2rem] w-[32rem] max-w-full py-16 px-6 md:px-12 relative">
                <CenterFlower />

                {/* Date */}
                <div className="text-center mb-4 p-4">
                  <h1 className="font-['sloop'] text-5xl">August 24, 2025</h1>
                  <div className="w-full max-w-[24rem] mx-auto h-[1px] bg-black mt-[-10px]"></div>
                </div>

                {/* Timeline */}
                <div className="w-full items-center mx-auto">
                  <div className="space-y-2">
                    <div className="flex gap-8">
                      <p className="w-24 text-right">3:30pm</p>
                      <p>Guests Arrive</p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-24 text-right">4pm</p>
                      <p>Ceremony</p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-24 text-right">4:30pm</p>
                      <p>Cocktail Hour</p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-24 text-right">6pm</p>
                      <p>Dinner</p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-24 text-right">8pm</p>
                      <p>Bonfire</p>
                    </div>
                    <div className="flex gap-8">
                      <p className="w-24 text-right">11pm</p>
                      <p>Last Shuttle</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rotate-45 border border-black"></div>
                </div>
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