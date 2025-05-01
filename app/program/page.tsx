import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf } from "@/components/DecorativeElements";
import { DecorativeFlower } from "@/components/DecorativeElements";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="program"/>

      {/* Main container with border */}
      <div className="relative h-[calc(100vh-3.5rem)]">
        {/* Screen edge borders */}
        <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
          <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Content card */}
              <div className="bg-[#fff5eb] rounded-[2rem] w-[32rem] py-16 px-12 relative">
                {/* Decorative top element */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2">
                  <Image
                    src="/images/center-flowe.png"
                    alt="Decorative element"
                    width={40}
                    height={40}
                    className="opacity-80"
                  />
                </div>

                {/* Date */}
                <div className="text-center mb-4 p-4">
                  <h1 className="font-['sloop'] text-5xl">August 24, 2025</h1>
                  <div className="w-96 h-[1px] bg-black mx-auto mt-[-10px]"></div>
                </div>

                {/* Timeline */}
                <div className="w-full items-center mx-auto">
                  <div className="">
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

                {/* Decorative bottom element */}
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