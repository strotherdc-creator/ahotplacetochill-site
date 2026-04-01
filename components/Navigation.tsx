"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/memberships", label: "Memberships" },
  { href: "/app", label: "The App" },
  { href: "/science", label: "Science" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030573991/IqwoYZkJKxiMuTAA.png"
              alt="A Hot Place To Chill"
              width={140}
              height={44}
              className="h-9 lg:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-medium text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors"
            >
              Sign In
            </Link>
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#E8450A] hover:bg-[#d13d09] text-white text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#C0C0C0] hover:text-[#F0F0F0]"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-[#C0C0C0] hover:text-[#F0F0F0] py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-[#2A2A2A]" />
            <Link
              href="/portal"
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#C0C0C0] hover:text-[#F0F0F0] py-2 transition-colors"
            >
              Sign In
            </Link>
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-5 py-3 bg-[#E8450A] text-white font-semibold rounded-full"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
