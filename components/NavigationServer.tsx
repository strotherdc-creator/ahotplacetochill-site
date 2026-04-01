import Link from "next/link";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/memberships", label: "Memberships" },
  { href: "/wellness-app", label: "The App" },
  { href: "/science", label: "Science" },
];

export function NavigationServer() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/92 backdrop-blur-xl border-b border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* ── Brand mark ──────────────────────────────────────────── */}
          <Link href="/" className="flex items-center shrink-0 group" aria-label="A Hot Place To Chill — Home">
            <span className="flex flex-col leading-none select-none">
              <span style={{
                fontWeight: 900,
                fontSize: "1.2rem",
                letterSpacing: "0.04em",
                color: "#FFFFFF",
                lineHeight: 1,
                textTransform: "uppercase",
              }}>
                🔥 A HOT
              </span>
              <span style={{
                fontWeight: 800,
                fontSize: "1.05rem",
                letterSpacing: "0.02em",
                lineHeight: 1.25,
                color: "#FFFFFF",
              }}>
                place to{" "}
                <span style={{ color: "#2BBFFF", fontWeight: 900, letterSpacing: "0.06em" }}>
                  CHILL
                </span>
              </span>
              <span style={{
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                color: "#888888",
                textTransform: "uppercase",
                lineHeight: 1.4,
                marginTop: "3px",
              }}>
                WELLNESS LOUNGE
              </span>
            </span>
          </Link>

          {/* ── Desktop nav ─────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors duration-200 relative group"
              >
                {link.label}
                {/* Underline indicator on hover */}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#E8450A] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ─────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-semibold text-[#C0C0C0] hover:text-[#F0F0F0] transition-colors px-3 py-2 rounded-lg hover:bg-[#1E1E1E]"
            >
              Member Portal
            </Link>
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse px-5 py-2.5 bg-[#E8450A] hover:bg-[#d13d09] text-white text-sm font-bold rounded-full transition-all duration-200"
            >
              Book Now
            </a>
          </div>

          {/* ── Mobile menu ─────────────────────────────────────────── */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
