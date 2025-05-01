'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/program", label: "Program" },
    { href: "/venue", label: "Venue" },
    { href: "/travel", label: "Travel" },
    { href: "/accommodations", label: "Accommodations" },
    { href: "/rsvp", label: "RSVP" },
    { href: "/enter-code", label: "Enter Code" },
  ];

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link 
      href={href} 
      className={`hover:opacity-80 font-cormorant-garamond ${currentPage === label.toLowerCase() ? 'underline underline-offset-8' : ''}`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-[#5e925e] text-[#f5e6d3] py-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-12 text-xl">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#f5e6d3] hover:bg-[#4a734a]">
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#5e925e] text-[#f5e6d3] border-none">
              <div className="flex flex-col items-center gap-6 py-4 text-xl">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
} 