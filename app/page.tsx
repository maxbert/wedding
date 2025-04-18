import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#f5e6d3]">
      {/* Outer border that extends to screen edges */}
      <div className="absolute inset-8 border-[3px] border-black rounded-[2.5rem]">
        <div className="absolute inset-3 border-[3px] border-black rounded-[2rem]">
          {/* Centered container for the small image */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Image container with overflow visible for decorative elements */}
            <div className="relative w-[75%] h-[50rem] rounded-[12rem]">
              {/* Image wrapper with overflow hidden */}
              <div className="absolute inset-0 overflow-hidden rounded-[12rem]">
                {/* Main photo */}
                <Image
                  src="/images/IMG_3437.JPG"
                  alt="Max and Jessica"
                  className="w-full h-full object-cover"
                  width={2000}
                  height={2000}
                  priority
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />
              </div>
              
              {/* Decorative overlay elements */}
              <div className="absolute -left-16 md:-left-32 bottom-6 z-10">
                <Image
                  src="/images/leaf-left.png"
                  alt="Decorative leaf"
                  className="w-[12rem] md:w-[18rem] h-auto"
                  width={200}
                  height={300}
                />
              </div>
              <div className="absolute -right-16 md:-right-32 z-10">
                <Image
                  src="/images/flower-right.png"
                  alt="Decorative flower"
                  className="w-[0rem] md:w-[24rem] h-auto"
                  width={800}
                  height={1000}
                />
              </div>
              
              {/* Names overlay */}
              <div className="absolute bottom-6 w-full text-center z-10">
                <h1 className="font-['sloop'] text-7xl text-[#f5e6d3] drop-shadow-lg tracking-wider">
                  Max & Jessica
                </h1>
              </div>

              {/* Enter button */}
              <div className="absolute inset-x-0 top-[20%] flex justify-center z-20 font-['sloop'] text-md">
                <Link href="/program">
                  <Button 
                    className="opacity-100 animate-[fadeIn_4s_ease-in_forwards] bg-[#5e925e] hover:bg-[#4a734a] text-[#f5e6d3] text-xl px-8 py-6 rounded-full"
                  >
                    enter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
