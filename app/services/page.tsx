import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/services-data";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of wellness modalities: cryotherapy, infrared sauna, red light therapy, Power Plate, compression therapy, and more. Organized by outcome.",
};

const OUTCOME_GROUPS = [
  {
    id: "movement",
    label: "Movement & Strength",
    emoji: "⚡",
    color: "#8B5CF6",
    desc: "Build flexibility, balance, and strength",
    serviceIds: ["power-plate"],
  },
  {
    id: "recovery",
    label: "Recovery & Restoration",
    emoji: "❄️",
    color: "#2BBFFF",
    desc: "Reduce soreness, support healing, restore energy",
    serviceIds: ["cryotherapy", "compression", "contrast-therapy"],
  },
  {
    id: "heat",
    label: "Heat & Light Therapy",
    emoji: "🔥",
    color: "#E8450A",
    desc: "Detox, cardiovascular support, cellular repair",
    serviceIds: ["desert-heat-sauna", "red-light-therapy"],
  },
  {
    id: "wellness",
    label: "Wellness & Lifestyle",
    emoji: "☀️",
    color: "#F59E0B",
    desc: "Mood, skin, and everyday vitality",
    serviceIds: ["tanning"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Our Modalities</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#F0F0F0] tracking-tight mb-6">
            Services built around outcomes
          </h1>
          <p className="text-lg text-[#C0C0C0] leading-relaxed">
            Every service at A Hot Place To Chill is selected for its evidence base and its role in a complete wellness system. Browse by outcome, or explore individual services below.
          </p>
        </div>
      </section>

      {/* Outcome Groups */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-20">
          {OUTCOME_GROUPS.map((group) => {
            const groupServices = SERVICES.filter((s) => group.serviceIds.includes(s.id));
            return (
              <div key={group.id} id={group.id}>
                {/* Group header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${group.color}15` }}
                  >
                    {group.emoji}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#F0F0F0]">{group.label}</h2>
                    <p className="text-base text-[#C0C0C0]">{group.desc}</p>
                  </div>
                </div>

                {/* Services in group */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {groupServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Services Quick Nav */}
      <section className="py-16 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-[#F0F0F0] mb-8">All Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#141414] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-xl">{service.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-[#F0F0F0] leading-tight">{service.name}</p>
                  <p className="text-xs text-[#C0C0C0]">{service.duration}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Detail Sections */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: service.accentBg }}
                  >
                    {service.emoji}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#F0F0F0]">{service.name}</h2>
                    <p className="text-sm font-medium" style={{ color: service.color }}>
                      {service.duration} session
                    </p>
                  </div>
                </div>

                <p className="text-base text-[#C0C0C0] leading-relaxed mb-6">{service.description}</p>

                {/* Works well for */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">Works well for</p>
                  <div className="flex flex-wrap gap-2">
                    {service.worksWellFor.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1.5 rounded-full border text-[#F0F0F0]"
                        style={{ borderColor: `${service.color}40`, background: `${service.color}10` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">Benefits</p>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-base text-[#C0C0C0]">
                        <span className="mt-0.5 shrink-0" style={{ color: service.color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={ZENOTI_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-105"
                  style={{ background: service.color }}
                >
                  Book {service.name}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </div>

              {/* Info card */}
              <div
                className="rounded-2xl p-6 border"
                style={{ background: service.accentBg, borderColor: `${service.color}25` }}
              >
                {service.researchBacked && (
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-5"
                    style={{ background: `${service.color}20`, color: service.color, border: `1px solid ${service.color}30` }}
                  >
                    ★ Research-Backed
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-[#0A0A0A]/60 p-4">
                    <p className="text-xs text-[#C0C0C0] mb-1">Session Length</p>
                    <p className="text-xl font-black text-[#F0F0F0]">{service.duration}</p>
                  </div>
                  <div className="rounded-xl bg-[#0A0A0A]/60 p-4">
                    <p className="text-xs text-[#C0C0C0] mb-1">Category</p>
                    <p className="text-xl font-black text-[#F0F0F0] capitalize">Core</p>
                  </div>
                </div>

                {/* Sauna protocols */}
                {service.protocols && (
                  <div>
                    <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">
                      6 Wellness Protocols
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.protocols.map((p) => (
                        <div key={p.name} className="rounded-lg bg-[#0A0A0A]/60 p-3">
                          <p className="text-sm font-semibold text-[#F0F0F0] mb-1">
                            {p.emoji} {p.name}
                          </p>
                          <p className="text-xs text-[#C0C0C0] leading-relaxed line-clamp-2">{p.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* App integration hint */}
                <div className="mt-5 p-4 rounded-xl bg-[#2BBFFF]/10 border border-[#2BBFFF]/20">
                  <p className="text-xs text-[#2BBFFF] font-semibold mb-1">💡 In Your Wellness Plan</p>
                  <p className="text-xs text-[#C0C0C0]">
                    The app recommends how {service.name} fits into your personalized plan based on your goals and intake.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F0F0F0] mb-4">Ready to experience the difference?</h2>
          <p className="text-[#C0C0C0] mb-8">Book a single session or start with a Day Pass to try everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              Book a Service
            </a>
            <Link
              href="/memberships"
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold rounded-full border border-[#2A2A2A] hover:border-[#E8450A] transition-all duration-200"
            >
              View Memberships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <a
      href={`#${service.id}`}
      className="group relative rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-1 bg-[#141414] block"
    >
      {service.featured && (
        <div className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
          Featured
        </div>
      )}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
        style={{ background: service.accentBg }}
      >
        {service.emoji}
      </div>
      <h3 className="text-lg font-bold text-[#F0F0F0] mb-1">{service.name}</h3>
      <p className="text-base text-[#C0C0C0] mb-4 leading-relaxed">{service.tagline}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#C0C0C0]">⏱ {service.duration}</span>
        {service.researchBacked && (
          <span className="text-xs font-medium text-[#2BBFFF]">★ Research-backed</span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {service.worksWellFor.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[#1E1E1E] text-[#C0C0C0]">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
