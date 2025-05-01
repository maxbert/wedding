import Link from "next/link";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="bg-[#5e925e] text-[#f5e6d3] py-4">
      <div className="max-w-6xl mx-auto flex justify-center gap-12 text-xl">
        <Link 
          href="/program" 
          className={`hover:opacity-80 ${currentPage === 'program' ? 'underline underline-offset-8' : ''}`}
        >
          Program
        </Link>
        <Link 
          href="/venue" 
          className={`hover:opacity-80 ${currentPage === 'venue' ? 'underline underline-offset-8' : ''}`}
        >
          Venue
        </Link>
        <Link 
          href="/travel" 
          className={`hover:opacity-80 ${currentPage === 'travel' ? 'underline underline-offset-8' : ''}`}
        >
          Travel
        </Link>
        <Link 
          href="/accommodations" 
          className={`hover:opacity-80 ${currentPage === 'accommodations' ? 'underline underline-offset-8' : ''}`}
        >
          Accommodations
        </Link>
        <Link 
          href="/rsvp" 
          className={`hover:opacity-80 ${currentPage === 'rsvp' ? 'underline underline-offset-8' : ''}`}
        >
          RSVP
        </Link>
      </div>
    </nav>
  );
} 