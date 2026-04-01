"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/memberships", label: "Memberships" },
  { href: "/wellness-app", label: "The App" },
  { href: "/science", label: "Science" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger / X button */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2.5 -mr-1 text-[#C0C0C0] hover:text-[#F0F0F0] rounded-lg hover:bg-[#1E1E1E] transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="18" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`lg:hidden fixed top-20 left-0 right-0 bg-[#111111] border-t border-[#2A2A2A] z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-semibold text-[#C0C0C0] hover:text-[#F0F0F0] py-3 px-3 rounded-xl hover:bg-[#1E1E1E] transition-all"
            >
              {link.label}
            </Link>
          ))}

          <div className="h-px bg-[#2A2A2A] my-2" />

          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="text-lg font-semibold text-[#C0C0C0] hover:text-[#F0F0F0] py-3 px-3 rounded-xl hover:bg-[#1E1E1E] transition-all flex items-center gap-2"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Member Portal
          </Link>

          <a
            href={ZENOTI_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 w-full text-center px-5 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white text-base font-bold rounded-2xl transition-colors"
          >
            Book Now →
          </a>
        </div>
      </div>
    </>
  );
}
