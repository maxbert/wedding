import Image from "next/image";
import { Navigation } from "@/components/Navigation";

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="travel"/>

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
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <Image
                    src="/images/flower-right.png"
                    alt="Decorative element"
                    width={60}
                    height={60}
                    className="opacity-80"
                  />
                </div>

                <h1 className="font-['sloop'] text-5xl text-center mb-16">Travel</h1>

                {/* Content here */}
                <span className="font-bold">Address:</span> 50 Fleishchmanns Road, Fleischmanns NY
                <br />
                <span className="font-bold">Parking:</span> Very limited parking on site, shuttles will run from Margaretville, Pine Hill, Shandanken, and Fleischmanns to the venue and back.

                {/* Decorative bottom element */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rotate-45 border border-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 bottom-32 z-10">
          <Image
            src="/images/leaf-left.png"
            alt="Decorative leaf"
            className="w-[18rem] h-auto opacity-80"
            width={200}
            height={300}
          />
        </div>
        <div className="absolute right-0 top-32 z-10">
          <Image
            src="/images/flower-right.png"
            alt="Decorative flower"
            className="w-[18rem] h-auto opacity-80"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
} 