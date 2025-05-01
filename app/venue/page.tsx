import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="venue"/>

      {/* Main container with border */}
      <div className="relative h-[calc(100vh-3.5rem)]">
        {/* Screen edge borders */}
        <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
          <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Content card */}
              <div className="bg-[#fff5eb] rounded-[2rem] w-[32rem] py-16 px-12 relative">
                <CenterFlower />

                <h1 className="font-['sloop'] text-5xl text-center mb-4">Venue</h1>
                <ul className="list-disc list-inside">
                  <li>The ceremony and dinner will be outside, please dress accordingly.</li>
                  <li>Weather usually in the 70s - 80s.</li>
                  <li>The meadow where the ceremony and dinner will take place is in the woods, there will be tree cover, so you won't be in direct sunlight.</li>
                  <li>Formal attire requested.</li>
                  <li>Dancing outside, and the dance floor is made of stone tiles. Block heels recommended.</li>
                  <li className="animate-pulse text-red-600">There is no parking at the venue. Please confirm your accommodation on the RSVP page so we can ensure a shuttle is available to transport you to and from the venue.</li>
                </ul>

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