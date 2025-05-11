import Image from "next/image";

interface DecorativeElementsProps {
  className?: string;
}

export function DecorativeLeaf({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute left-2 bottom-5 z-10 hidden md:flex ${className}`}>
      <Image
        src="/images/leaf-left.png"
        alt="Decorative leaf"
        className="w-[200px] h-auto opacity-40"
        width={100}
        height={100}
      />
    </div>
  );
}

export function DecorativeFlower({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute right-[80px] bottom-10 z-10 hidden md:flex ${className}`}>
      <Image
        src="/images/flower-right.png"
        alt="Decorative flower"
        className="w-[200px] h-auto opacity-40"
        width={100}
        height={100}
      />
    </div>
  );
}

export function CenterFlower({ className = "" }: DecorativeElementsProps) {
  return (
    <div className={`absolute top-5 left-1/2 -translate-x-1/2 ${className} w-[50px] md:w-[50px]`}>
      <Image
        src="/images/center-flowe.png"
        alt="Decorative element"
        width={50}
        height={50}
        className="opacity-80"
      />
    </div>
  );
} 