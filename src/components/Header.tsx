"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Quando ultrapassa aproximadamente a altura do hero (~450px)
      if (window.scrollY > 400) {
        setIsPastHero(true);
      } else {
        setIsPastHero(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="siteHeader"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 sm:px-10 md:px-14 ${
        isPastHero
          ? "bg-[#fcfbf7]/90 backdrop-blur-md border-b border-[#e8e6df] py-4 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="text-2xl sm:text-[26px] font-bold tracking-tight flex items-center transition-opacity hover:opacity-85"
        >
          <span
            className={`tracking-tight font-extrabold transition-colors duration-300 ${
              isPastHero ? "text-[#101010]" : "text-white"
            }`}
          >
            KAFKA
            <sup className="text-xs font-semibold ml-0.5 tracking-normal">TM</sup>
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-tight">
          {["Home", "About", "Services", "Insights", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`transition-colors duration-300 ${
                isPastHero
                  ? "text-[#101010]/75 hover:text-[#101010]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className={`btn-pill px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 shadow-xs ${
              isPastHero
                ? "bg-[#101010] text-white hover:bg-[#101010]/90"
                : "bg-white text-[#101010] hover:bg-white/90"
            }`}
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 focus:outline-none transition-colors duration-300 ${
            isPastHero ? "text-[#101010]" : "text-white"
          }`}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 mx-2 rounded-2xl bg-[#fcfbf7] border border-[#e8e6df] p-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4 text-base font-medium text-[#101010]">
            {["Home", "About", "Services", "Insights", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#e8e6df]/50"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-pill w-full mt-2 py-3.5 rounded-full bg-[#101010] text-white text-sm font-semibold tracking-wide"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
