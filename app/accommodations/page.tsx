import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { AccommodationCard } from "../../components/AccommodationCard";

// accomodations to ad:
// Shandaken Inn - https://www.shandakeninn.com/ - in shandaken
// Pine HIll Gateway - https://gatewaypinehill.com/ - in pine hill
// Margaretville Motel - https://margaretvillemotel.com/ - in margaretville
// Starlight motel - https://www.thestarlitemotel.com/ - in Kerhonkson

const accommodations = {
  Fleischmanns: {
    distance: "1.5",
    places: [
      {
        name: "Riverrun Bed and Breakfast",
        url: "https://www.riverrunbedandbreakfast.com/",
        details: [  ]
      }
    ]
  },
  "Pine Hill": {
    distance: "3.6",
    places: [
      {
        name: "Pine Hill Arms Motel",
        url: "https://www.pinehillarms.com/",
        details: [  ]
      },
      {
        name: "Pine Hill Gateway",
        url: "https://gatewaypinehill.com/",
        details: [  ]
      }
    ]
  },
  Margaretville: {
    distance: "6.3",
    places: [
      {
        name: "Margaretville Motel",
        url: "https://margaretvillemotel.com/",
        details: [  ]
      },
      {
        name: "Margaretville Inn",
        url: "https://www.margaretvilleinn.com/",
        details: [  ]
      }
    ]
  },
  Shandaken: {
    distance: "9.6",
    places: [
      {
        name: "Catskill Seasons Inn",
        url: "https://www.catskillseasonsinn.com/",
        details: [
          "-10% OFF with code SparacioBertfield2025",
        ]
      },
      {
        name: "Shandaken Inn",
        url: "https://www.shandakeninn.com/",
        details: [  ]
      }
    ]
  },
};

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-[#f5e6d3]">
      <Navigation currentPage="accommodations"/>

      {/* Main container with border */}
      <div className="relative min-h-[calc(100vh-3.5rem)]">
        {/* Screen edge borders */}
        <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
          <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
            {/* Center content */}
            <div className="absolute inset-0 overflow-y-auto">
              <div className="flex flex-col items-center py-8">
                {/* Content area */}
                <div className="w-[42rem] py-16 px-12 relative">
                  {/* Decorative top element */}
                  <div className="absolute top-5 left-1/2 -translate-x-1/2">
                    <Image
                      src="/images/center-flowe.png"
                      alt="Decorative element"
                      width={30}
                      height={30}
                      className="opacity-80"
                    />
                  </div>

                  <h1 className="font-['sloop'] text-5xl text-center mb-8">Accommodations</h1>
                  
                  <p className="text-center text-lg mb-12">
                    There's lots of lodging nearby, and we recommend staying in one of the following towns. Shuttles will run from the venue to and from the following accommodations.
                  </p>

                  <div className="space-y-12">
                    {Object.entries(accommodations).map(([city, { distance, places }]) => (
                      <div key={city} className="space-y-6">
                        <div>
                          <h2 className="font-['sloop'] text-4xl">
                            {city} <span className="font-['garamond'] text-sm">({distance} mi)</span>
                          </h2>
                        </div>
                        <div className="space-y-4">
                          {places.map((place) => (
                            <div key={`${place.name}-${place.details[0]}`} className="bg-[#fff5eb] rounded-[2rem] p-6 border-[3px] border-black">
                              <AccommodationCard {...place} />
                            </div>
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
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 bottom-32 z-10">
          <Image
            src="/images/leaf-left.png"
            alt="Decorative leaf"
            className="w-[6rem] md:w-[18rem] h-auto opacity-80"
            width={200}
            height={300}
          />
        </div>
        <div className="absolute right-0 top-32 z-10">
          <Image
            src="/images/flower-right.png"
            alt="Decorative flower"
            className="w-[6rem] md:w-[18rem] h-auto opacity-80"
            width={800}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
} 