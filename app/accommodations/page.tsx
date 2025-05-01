'use client';

import { Navigation } from "@/components/Navigation";
import { DecorativeLeaf, DecorativeFlower, CenterFlower } from "@/components/DecorativeElements";
import { AccommodationCard } from "@/components/AccommodationCard";

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
      <div className="min-h-[calc(100vh-3.5rem)] relative px-2 md:px-8">
        <div className="h-full border-[3px] border-black rounded-[2.5rem] p-3">
          <div className="h-full border-[3px] border-black rounded-[2rem]">
            <div className="h-full flex items-center justify-center py-8">
              <div className="bg-transparent md:bg-[#fff5eb] rounded-[2rem] w-[42rem] max-w-full py-16 px-6 md:px-12 relative">
                <CenterFlower />

                <h1 className="font-['sloop'] text-5xl text-center mb-8">Accommodations</h1>
                
                <p className="text-center text-lg mb-12">
                  There's lots of lodging nearby, and we recommend staying in one of the following towns. 
                  Shuttles will run from the venue to and from the following accommodations.
                </p>

                <div className="space-y-12">
                  {Object.entries(accommodations).map(([city, { distance, places }]) => (
                    <div key={city} className="space-y-6">
                      <div>
                        <h2 className="font-['sloop'] text-3xl md:text-4xl">
                          {city} <span className="font-['garamond'] text-xs md:text-sm">({distance} mi)</span>
                        </h2>
                      </div>
                      <div className="space-y-4">
                        {places.map((place) => (
                          <div key={`${place.name}-${place.details[0]}`} className="bg-[#fff5eb] rounded-[2rem] p-3 md:p-6 border-[3px] border-black">
                            <AccommodationCard {...place} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
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