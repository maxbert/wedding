import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { AccommodationCard } from "../../components/AccommodationCard";

const accommodations = {
  Fleischmanns: [
    {
      name: "Riverrun Bed and Breakfast",
      url: "https://www.riverrunbedandbreakfast.com/",
      details: [  ]
    }
  ],
  "Pine Hill": [
    {
      name: "Pine Hill Arms Motel",
      url: "https://www.pinehillarms.com/",
      details: [  ]
    }
  ],
  Shandaken: [
    {
      name: "Catskill Seasons Inn",
      url: "https://www.catskillseasonsinn.com/",
      details: [
        "-10% OFF with code SparacioBertfield2025",
      ]
    }
  ]
};

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="accommodations"/>

      {/* Main container with border */}
      <div className="relative h-[calc(100vh-3.5rem)]">
        {/* Screen edge borders */}
        <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
          <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center overflow-auto py-8">
              {/* Content area */}
              <div className="w-[42rem] py-16 px-12 relative">
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

                <h1 className="font-['sloop'] text-5xl text-center mb-8">Accommodations</h1>
                
                <p className="text-center text-lg mb-12">
                  There's lots of lodging nearby, and we recommend staying in one of the following towns. Shuttles will run from the venue to and from the following accommodations.
                </p>

                <div className="space-y-12">
                  {Object.entries(accommodations).map(([city, places]) => (
                    <div key={city} className="bg-[#fff5eb] rounded-[2rem] p-8 border-[3px] border-black relative">
                      <h2 className="font-['sloop'] text-4xl mb-6">{city}</h2>
                      <div className="space-y-4">
                        {places.map((place) => (
                          <AccommodationCard 
                            key={`${place.name}-${place.details[0]}`}
                            {...place}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

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