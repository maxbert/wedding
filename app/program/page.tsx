'use client';

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="program"/>
      <div className="h-[calc(100vh-64px)] overflow-y-auto relative py-2 px-0 md:px-8">
        <div className="relative border-[3px] h-full w-full border-black rounded-[2.5rem] p-3">
          <div className="border-[3px] border-black rounded-[2rem] relative h-full w-full">
            <div className="h-full flex items-center justify-center">
              <CenterFlower />
              <div className="md:bg-[#fff5eb] rounded-[2rem] md:w-[48rem] w-[25rem] max-w-full py-16 px-6 md:px-12 relative">

                {/* Date */}
                <div className="text-center mb-4 p-4">
                  <h1 className="font-['sloop'] md:text-[80px] text-[60px]">August 24, 2025</h1>
                  <div className="w-full max-w-[24rem] mx-auto h-[1px] bg-black md:mt-[-40px] mt-[-20px]"></div>
                </div>

                {/* Timeline */}
                <div className="w-fit items-center mx-auto text-[24px]">
                  <div className="space-y-2">
                    <div className="flex gap-6">
                      <p className="w-16 text-left">3:30pm</p>
                      <p>Guests Arrive</p>
                    </div>  
                    <div className="flex gap-6">
                      <p className="w-16 text-left">4pm</p>
                      <p>Ceremony</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="w-16 text-left">4:30pm</p>
                      <p>Cocktail Hour</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="w-16 text-left">6pm</p>
                      <p>Dinner</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="w-16 text-left">8pm</p>
                      <p>Bonfire</p>
                    </div>
                    <div className="flex gap-6">
                      <p className="w-16 text-left">11pm</p>
                      <p>Last Shuttle</p>
                    </div>
                  </div>
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