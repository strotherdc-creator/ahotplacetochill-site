import Link from "next/link";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";
import { SERVICES } from "@/lib/services-data";

const PATHWAYS = [
  {
    id: "restore",
    label: "Restore",
    emoji: "🧊",
    color: "#2BBFFF",
    bg: "rgba(43,191,255,0.08)",
    border: "rgba(43,191,255,0.2)",
    tagline: "Calm soreness. Improve sleep. Reduce stress load.",
    description:
      "Support your body's natural recovery rhythm with cryotherapy, infrared sauna, red light therapy, and compression. Designed for anyone who needs to reset.",
    services: ["Whole Body Cryotherapy", "Desert Heat Sauna", "Red Light Therapy", "Compression Therapy"],
    cta: "Start Restoring",
  },
  {
    id: "strength",
    label: "Strength",
    emoji: "⚡",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    tagline: "Rebuild movement ability, flexibility, and confidence.",
    description:
      "Power Plate whole-body vibration activates more muscle fibers than conventional exercise. Pair it with recovery services for a complete movement and strength protocol.",
    services: ["Power Plate", "Compression Therapy", "Red Light Therapy"],
    cta: "Build Strength",
  },
  {
    id: "vitality",
    label: "Vitality",
    emoji: "🔥",
    color: "#E8450A",
    bg: "rgba(232,69,10,0.08)",
    border: "rgba(232,69,10,0.2)",
    tagline: "Stay active for life. Support healthy aging.",
    description:
      "A structured combination of heat, light, vibration, and cold supports metabolic health, cardiovascular function, and the energy to keep doing what you love.",
    services: ["Desert Heat Sauna", "Power Plate", "Whole Body Cryotherapy", "Red Light Therapy"],
    cta: "Explore Vitality",
  },
];

const FEATURED_SERVICES = SERVICES.filter((s) =>
  ["cryotherapy", "desert-heat-sauna", "red-light-therapy", "power-plate", "compression"].includes(s.id)
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0d0d0d] to-[#0A0A0A]" />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E8450A]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[300px] bg-[#2BBFFF]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030573991/IqwoYZkJKxiMuTAA.png"
              alt="A Hot Place To Chill"
              className="h-24 lg:h-32 w-auto object-contain"
            />
          </div>

          {/* Headline */}
          <h1 className="fade-in-up fade-in-up-delay-1 text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            <span className="text-[#F0F0F0]">Move better.</span>
            <br />
            <span className="text-[#F0F0F0]">Recover better.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #E8450A, #FF6B35, #2BBFFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Stay active longer.
            </span>
          </h1>

          <p className="fade-in-up fade-in-up-delay-2 text-lg lg:text-xl text-[#C0C0C0] max-w-2xl mx-auto leading-relaxed mb-10">
            Modern wellness services and guided recovery plans designed to help you feel stronger, more flexible, and more resilient. New Buffalo, MI.
          </p>

          {/* CTAs */}
          <div className="fade-in-up fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold text-base rounded-full transition-all duration-200"
            >
              Book Now →
            </a>
            <Link
              href="/wellness-app"
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold text-base rounded-full border border-[#2A2A2A] hover:border-[#2BBFFF] transition-all duration-200"
            >
              Start Your Wellness Plan
            </Link>
          </div>

          {/* Location badge */}
          <div className="mt-10 flex items-center justify-center gap-2 text-base text-[#C0C0C0]">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            New Buffalo, Michigan · Open Today
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C0C0C0] animate-bounce">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ── PATHWAYS ─────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Your Journey</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight">
              Three pathways to your goals
            </h2>
            <p className="mt-4 text-lg text-[#C0C0C0] max-w-xl mx-auto">
              Whether you need to reset, rebuild, or maintain your edge — we have a structured path for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PATHWAYS.map((pathway) => (
              <div
                key={pathway.id}
                className="relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background: pathway.bg,
                  borderColor: pathway.border,
                }}
              >
                <div className="text-4xl mb-4">{pathway.emoji}</div>
                <h3 className="text-2xl font-black text-[#F0F0F0] mb-2">{pathway.label}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: pathway.color }}>
                  {pathway.tagline}
                </p>
                <p className="text-base text-[#C0C0C0] leading-relaxed mb-6">{pathway.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pathway.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full border text-[#C0C0C0]"
                      style={{ borderColor: pathway.border }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: pathway.color }}
                >
                  {pathway.cta}
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Core Services</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight">
                Advanced modalities.<br />Approachable experience.
              </h2>
            </div>
            <Link
              href="/services"
              className="shrink-0 text-sm font-semibold text-[#2BBFFF] hover:text-[#7DD3FC] transition-colors flex items-center gap-2"
            >
              View all services
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-1 bg-[#141414]"
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
                  <span className="text-xs font-medium text-[#C0C0C0] flex items-center gap-1.5">
                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {service.duration}
                  </span>
                  {service.researchBacked && (
                    <span className="text-xs font-medium text-[#2BBFFF] flex items-center gap-1">
                      <svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      Research-backed
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.worksWellFor.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[#1E1E1E] text-[#C0C0C0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── POWER PLATE FEATURE ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border border-[#8B5CF6]/20 bg-gradient-to-br from-[#8B5CF6]/10 to-[#141414] p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 mb-6">
                  ⚡ The Movement Engine
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight mb-4">
                  Power Plate
                </h2>
                <p className="text-lg text-[#C0C0C0] leading-relaxed mb-6">
                  The movement engine in our wellness system. Whole-body vibration activates up to 95% of muscle fibers, supports flexibility, balance, and strength — all in 15 minutes. Used by professional athletes, physical therapists, and wellness seekers alike.
                </p>
                <p className="text-base text-[#C0C0C0] leading-relaxed mb-8">
                  Power Plate pairs especially well with cryotherapy, red light therapy, and sauna — making it a cornerstone of any personalized recovery plan.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Flexibility", "Strength", "Balance", "Recovery", "Circulation"].map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-4 py-2 rounded-full border border-[#8B5CF6]/30 text-[#8B5CF6] bg-[#8B5CF6]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { stat: "95%", label: "of muscle fibers activated vs ~40% in conventional exercise" },
                  { stat: "15 min", label: "session delivers equivalent benefit to a full movement workout" },
                  { stat: "3×", label: "more effective when paired with recovery modalities" },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="flex items-start gap-4 p-5 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A]"
                  >
                    <span className="text-3xl font-black text-[#8B5CF6] shrink-0">{item.stat}</span>
                    <span className="text-base text-[#C0C0C0] leading-relaxed pt-1">{item.label}</span>
                  </div>
                ))}

                <a
                  href={ZENOTI_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Book Power Plate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APP TEASER ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#2BBFFF] uppercase tracking-widest mb-3">The App</p>
              <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight mb-6">
                Your personalized plan starts here.
              </h2>
              <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
                The A Hot Place To Chill app builds a personalized wellness plan based on your goals, lifestyle, and how you feel. Track your Wellness Score over time, log every visit, and reassess every 4 weeks to keep your plan aligned.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { emoji: "📋", title: "Intake Assessment", desc: "18 questions about your goals, lifestyle, and current wellness state." },
                  { emoji: "🎯", title: "Personalized Plan", desc: "Foundation, Core Focus, or Enhanced tier — matched to your needs." },
                  { emoji: "📊", title: "Wellness Score", desc: "Track your score across 5 domains. Reassess every 4 weeks." },
                  { emoji: "✅", title: "Visit Logging", desc: "Log every session with pre/post feeling scores and notes." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2BBFFF]/10 flex items-center justify-center text-xl shrink-0">
                      {item.emoji}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F0F0F0]">{item.title}</h4>
                      <p className="text-base text-[#C0C0C0]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/wellness-app"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2BBFFF] hover:bg-[#1aa8e8] text-[#0A0A0A] font-bold rounded-full transition-all duration-200 hover:scale-105"
              >
                Learn More About the App
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>

            {/* App preview card */}
            <div className="relative">
              <div className="rounded-3xl border border-[#2BBFFF]/20 bg-[#141414] p-8 max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#C0C0C0] uppercase tracking-wider">Wellness Score</p>
                    <p className="text-4xl font-black text-[#F0F0F0]">78</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-[#2BBFFF] flex items-center justify-center">
                    <span className="text-lg font-black text-[#2BBFFF]">78</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    { label: "Recovery", score: 82, color: "#2BBFFF" },
                    { label: "Movement", score: 74, color: "#8B5CF6" },
                    { label: "Sleep", score: 78, color: "#E8450A" },
                    { label: "Stress", score: 70, color: "#22C55E" },
                    { label: "Vitality", score: 80, color: "#F59E0B" },
                  ].map((domain) => (
                    <div key={domain.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#C0C0C0]">{domain.label}</span>
                        <span className="text-[#F0F0F0] font-medium">{domain.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${domain.score}%`, background: domain.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#1E1E1E] p-4">
                  <p className="text-xs text-[#C0C0C0] mb-1">Current Program</p>
                  <p className="text-sm font-bold text-[#F0F0F0]">Core Focus · Week 3 of 4</p>
                  <p className="text-xs text-[#2BBFFF] mt-1">Reassessment in 9 days</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#E8450A] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                Free with membership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIPS CTA ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Memberships</p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight mb-6">
            Unlimited access.<br />Visible progress.
          </h2>
          <p className="text-lg text-[#C0C0C0] max-w-2xl mx-auto leading-relaxed mb-10">
            Our Unlimited Wellness membership gives you daily access to all core services, plus the personalized app experience that tracks your progress and keeps your plan aligned with your goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                name: "Day Pass",
                price: "$67",
                period: "one time",
                desc: "Try all 6 core services in one day. No commitment.",
                color: "#C0C0C0",
              },
              {
                name: "Unlimited Tanning",
                price: "$60",
                period: "/ month",
                desc: "Daily tanning access plus discounted add-on services.",
                color: "#F59E0B",
              },
              {
                name: "Unlimited Wellness",
                price: "$150",
                period: "/ month",
                desc: "Unlimited daily access to all core services. Best value.",
                color: "#E8450A",
                featured: true,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  plan.featured
                    ? "border-[#E8450A]/40 bg-[#E8450A]/5"
                    : "border-[#2A2A2A] bg-[#141414]"
                }`}
              >
                {plan.featured && (
                  <div className="text-xs font-bold text-[#E8450A] uppercase tracking-wider mb-3">Most Popular</div>
                )}
                <h3 className="text-base font-bold text-[#F0F0F0] mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-black" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-base text-[#C0C0C0]">{plan.period}</span>
                </div>
                <p className="text-base text-[#C0C0C0] leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/memberships"
              className="px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              View All Membership Details
            </Link>
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold rounded-full border border-[#2A2A2A] hover:border-[#E8450A] transition-all duration-200"
            >
              Book a Single Session
            </a>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / LOCATION ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-[#E8450A] mb-2">7</p>
              <p className="text-base text-[#C0C0C0]">Advanced wellness modalities</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#2BBFFF] mb-2">New Buffalo</p>
              <p className="text-base text-[#C0C0C0]">Southwest Michigan&apos;s premier wellness lounge</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[#8B5CF6] mb-2">4-Week</p>
              <p className="text-base text-[#C0C0C0]">Personalized reassessment cycle in the app</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
