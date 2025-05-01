import Image from "next/image";

interface DecorativeElementsProps {
  className?: string;
}

export function DecorativeLeaf({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute left-0 bottom-32 z-10 hidden md:flex ${className}`}>
      <Image
        src="/images/leaf-left.png"
        alt="Decorative leaf"
        className="w-[18rem] h-auto opacity-80"
        width={200}
        height={300}
      />
    </div>
  );
}

export function DecorativeFlower({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute right-0 top-32 z-10 hidden md:flex ${className}`}>
      <Image
        src="/images/flower-right.png"
        alt="Decorative flower"
        className="w-[18rem] h-auto opacity-80"
        width={800}
        height={1000}
      />
    </div>
  );
}

export function CenterFlower({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute top-5 left-1/2 -translate-x-1/2 ${className} w-[0rem] md:w-[2rem]`}>
      <Image
        src="/images/center-flowe.png"
        alt="Decorative element"
        width={30}
        height={30}
        className="opacity-80"
      />
    </div>
  );
} 