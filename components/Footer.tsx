import Link from "next/link";
import { ZENOTI_BOOKING_URL, HOURS } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030573991/IqwoYZkJKxiMuTAA.png"
              alt="A Hot Place To Chill"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-base text-[#C0C0C0] leading-relaxed mb-6">
              Modern recovery and wellness lounge in New Buffalo, MI. Move better. Recover better. Stay active longer.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ahotplacetochill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#C0C0C0] hover:text-[#F0F0F0] hover:border-[#E8450A] transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ahotplacetochill"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#C0C0C0] hover:text-[#F0F0F0] hover:border-[#E8450A] transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#F0F0F0] uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/services#cryotherapy", label: "Whole Body Cryotherapy" },
                { href: "/services#desert-heat-sauna", label: "Desert Heat Sauna" },
                { href: "/services#red-light-therapy", label: "Red Light Therapy" },
                { href: "/services#power-plate", label: "Power Plate" },
                { href: "/services#compression", label: "Compression Therapy" },
                { href: "/services#tanning", label: "Tanning" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#F0F0F0] uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/how-it-works", label: "How It Works" },
                { href: "/memberships", label: "Memberships" },
                { href: "/wellness-app", label: "The App" },
                { href: "/science", label: "Science & Research" },
                { href: "/portal", label: "Member Portal" },
                { href: ZENOTI_BOOKING_URL, label: "Book Now", external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-base text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[#F0F0F0] uppercase tracking-wider mb-4">Hours & Contact</h3>
            <ul className="space-y-2 mb-6">
              {HOURS.map((h) => (
                <li key={h.day} className="flex justify-between text-sm">
                  <span className="text-[#C0C0C0]">{h.day.slice(0, 3)}</span>
                  <span className="text-[#F0F0F0]">{h.hours}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a
                href="tel:+12696128913"
                className="flex items-center gap-2 text-base text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                +1 (269) 612-8913
              </a>
              <a
                href="mailto:help@ahotplacetochill.com"
                className="flex items-center gap-2 text-base text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                help@ahotplacetochill.com
              </a>
              <p className="flex items-center gap-2 text-base text-[#C0C0C0]">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                New Buffalo, MI
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#2A2A2A] my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#C0C0C0]">
            © {new Date().getFullYear()} A Hot Place To Chill. All rights reserved.
          </p>
          <p className="text-xs text-[#C0C0C0]">
            Services are for wellness support only and are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
