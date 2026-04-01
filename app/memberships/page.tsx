import type { Metadata } from "next";
import Link from "next/link";
import { ZENOTI_BOOKING_URL, ZENOTI_MEMBERSHIP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Unlimited wellness access in New Buffalo, MI. Compare Day Pass, Unlimited Tanning, and Unlimited Wellness membership options with full perks breakdown.",
};

const PLANS = [
  {
    id: "day-pass",
    name: "Day Pass",
    price: "$67",
    period: "one time",
    color: "#C0C0C0",
    border: "#2A2A2A",
    bg: "#141414",
    tagline: "Try everything, no commitment",
    description: "Experience all 6 core services in a single day. Perfect for first-time visitors or occasional use.",
    includes: [
      "Access to all 6 core services",
      "One session per service",
      "Valid for one day",
      "No membership required",
    ],
    notIncluded: [
      "Daily recurring access",
      "Member pricing on add-ons",
      "App wellness plan",
      "Guest passes",
    ],
    cta: "Book Day Pass",
    ctaUrl: ZENOTI_BOOKING_URL,
    featured: false,
  },
  {
    id: "tanning",
    name: "Unlimited Tanning",
    price: "$60",
    period: "/ month",
    color: "#F59E0B",
    border: "#F59E0B40",
    bg: "rgba(245,158,11,0.05)",
    tagline: "Daily tanning plus discounted add-ons",
    description: "Tan once a day, every day we're open. Plus discounted access to core wellness services.",
    includes: [
      "Daily tanning sessions",
      "Core services at $17.50 add-on",
      "Discounts on tanning products",
      "Free massage chair access",
      "Free intersegmental traction table",
    ],
    notIncluded: [
      "Unlimited core service access",
      "Guest passes at member rate",
    ],
    cta: "Join Tanning",
    ctaUrl: ZENOTI_MEMBERSHIP_URL,
    featured: false,
  },
  {
    id: "wellness",
    name: "Unlimited Wellness",
    price: "$150",
    period: "/ month",
    color: "#E8450A",
    border: "#E8450A50",
    bg: "rgba(232,69,10,0.06)",
    tagline: "Unlimited daily access to everything",
    description: "The full experience. Unlimited access to all core services every day we're open, plus the personalized app experience and member perks.",
    includes: [
      "Unlimited daily access to all 6 core services",
      "Personalized wellness app plan",
      "Wellness Score tracking & reassessments",
      "Discounts on tanning products & guided services",
      "Discounted core device add-ons",
      "Free massage chair access",
      "Free intersegmental traction table",
      "Add family members for $100/month",
      "Guest first visit at $15",
    ],
    notIncluded: [],
    cta: "Join Unlimited Wellness",
    ctaUrl: ZENOTI_MEMBERSHIP_URL,
    featured: true,
  },
];

const PERKS = [
  {
    emoji: "💆",
    title: "Massage Chair Access",
    desc: "Free access to our state-of-the-art massage chairs for all members.",
  },
  {
    emoji: "🛏️",
    title: "Traction Table",
    desc: "Free intersegmental traction table access included with all memberships.",
  },
  {
    emoji: "👨‍👩‍👧",
    title: "Family Add-On",
    desc: "Wellness members can add family members for just $100/month each.",
  },
  {
    emoji: "🎟️",
    title: "Guest Passes",
    desc: "Bring any new guest to try their first core service for just $15.",
  },
  {
    emoji: "📱",
    title: "Wellness App",
    desc: "Unlimited Wellness members get a personalized plan and score tracking in the app.",
  },
  {
    emoji: "🏷️",
    title: "Member Discounts",
    desc: "Discounts on tanning products, guided services, and core device add-ons.",
  },
];

export default function MembershipsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Memberships</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#F0F0F0] tracking-tight mb-6">
            Invest in your recovery
          </h1>
          <p className="text-lg text-[#C0C0C0] leading-relaxed">
            Choose the plan that fits your lifestyle. All memberships include access to our premium lounge amenities and are billed monthly with no long-term contract.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 border transition-all duration-300 relative ${
                  plan.featured ? "lg:-mt-4 lg:mb-4" : ""
                }`}
                style={{ background: plan.bg, borderColor: plan.border }}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8450A] text-white text-xs font-bold px-5 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <h2 className="text-xl font-black text-[#F0F0F0] mb-1">{plan.name}</h2>
                <p className="text-base text-[#C0C0C0] mb-5">{plan.tagline}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-black" style={{ color: plan.color }}>
                    {plan.price}
                  </span>
                  <span className="text-base text-[#C0C0C0]">{plan.period}</span>
                </div>

                <p className="text-base text-[#C0C0C0] leading-relaxed mb-6">{plan.description}</p>

                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] mb-8 ${
                    plan.featured
                      ? "bg-[#E8450A] hover:bg-[#d13d09] text-white"
                      : "bg-[#1E1E1E] hover:bg-[#2A2A2A] text-[#F0F0F0] border border-[#2A2A2A]"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Includes */}
                <div>
                  <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">Includes</p>
                  <ul className="space-y-2.5">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#F0F0F0]">
                        <span className="shrink-0 mt-0.5" style={{ color: plan.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <ul className="space-y-2.5 mt-3">
                      {plan.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-base text-[#C0C0C0]">
                          <span className="shrink-0 mt-0.5 text-[#3A3A3A]">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#C0C0C0] mt-8">
            Memberships are automatically billed each month until canceled. Lock in 2 months on Unlimited Wellness for the $150/month rate.
          </p>
        </div>
      </section>

      {/* Member Perks */}
      <section className="py-24 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#F0F0F0] mb-3">Why members stay</h2>
            <p className="text-[#C0C0C0]">Beyond the services, membership includes a full suite of perks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERKS.map((perk) => (
              <div key={perk.title} className="rounded-xl p-5 bg-[#141414] border border-[#2A2A2A]">
                <div className="text-3xl mb-3">{perk.emoji}</div>
                <h3 className="text-base font-bold text-[#F0F0F0] mb-1">{perk.title}</h3>
                <p className="text-base text-[#C0C0C0] leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App integration */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl border border-[#2BBFFF]/20 bg-[#2BBFFF]/5 p-10 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h2 className="text-3xl font-black text-[#F0F0F0] mb-4">
              Unlimited Wellness includes the app experience
            </h2>
            <p className="text-[#C0C0C0] leading-relaxed mb-8 max-w-xl mx-auto">
              Your membership isn&apos;t just access to services — it&apos;s a guided system. The app builds your personalized plan, tracks your Wellness Score, and reassesses every 4 weeks to keep your program aligned with your progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/wellness-app"
                className="px-8 py-4 bg-[#2BBFFF] hover:bg-[#1aa8e8] text-[#0A0A0A] font-bold rounded-full transition-all duration-200 hover:scale-105"
              >
                Learn About the App
              </Link>
              <a
                href={ZENOTI_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold rounded-full border border-[#2A2A2A] hover:border-[#2BBFFF] transition-all duration-200"
              >
                Join Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
