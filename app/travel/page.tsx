'use client';

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3] overflow-hidden">
      <Navigation currentPage="travel"/>
      <div className="min-h-[calc(100vh-3.5rem)] relative px-2 md:px-8 py-4">
        <div className="relative border-[3px] border-black rounded-[2.5rem] p-3">
          <div className="border-[3px] border-black rounded-[2rem] relative">
            <div className="py-8">
              <div className="bg-transparent md:bg-[#fff5eb] rounded-[2rem] w-[32rem] max-w-full py-16 px-6 md:px-12 relative mx-auto">
                  <CenterFlower className=""/>

                <h1 className="font-['sloop'] text-5xl text-center mb-8">Travel</h1>

                <div className="w-full flex justify-center mb-8">
                  <a href="https://www.google.com/maps/place/Spillian/@42.1526715,-74.5496472,17z/data=!3m1!4b1!4m6!3m5!1s0x89dc5fa815218ec5:0x4dab4e744f01a8e2!8m2!3d42.1526676!4d-74.5470723!16s%2Fg%2F1ptyqzvq5?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D" 
                     target="_blank" 
                     className="border-2 border-black rounded-lg p-2 w-full max-w-[300px] h-[300px] overflow-hidden">
                    <Image 
                      src="/images/map.png" 
                      alt="Map" 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>

                <div className="space-y-4">
                  <p><span className="font-bold">Address:</span> 50 Fleishchmanns Road, Fleischmanns NY</p>
                  <p className="font-black text-red-600 animate-[pulse_1s_ease-in-out_infinite]">
                    THERE IS NO PARKING AT THE VENUE
                  </p>
                  <p>
                    Shuttles will run from Margaretville, Pine Hill, Shandanken, and Fleischmanns to the venue and back. 
                    Please confirm your accomodations on the RSVP page so that we can ensure a shuttle can transport you to and from the venue.
                  </p>
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden md:hidden">
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