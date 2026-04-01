import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "The App",
  description:
    "Download the A Hot Place To Chill app. Get a personalized wellness plan, track your Wellness Score, log visits, and reassess every 4 weeks.",
};

const FEATURES = [
  {
    emoji: "📋",
    title: "18-Question Intake",
    desc: "A thorough assessment of your goals, lifestyle, pain levels, sleep quality, stress, and movement ability. Takes about 5 minutes.",
    color: "#2BBFFF",
  },
  {
    emoji: "🎯",
    title: "Personalized Plan",
    desc: "Foundation, Core Focus, or Enhanced — your plan specifies which services to use, in what order, and how often.",
    color: "#E8450A",
  },
  {
    emoji: "📊",
    title: "Wellness Score",
    desc: "A 0–100 composite score across 5 domains: Recovery, Movement, Sleep, Stress, and Vitality. Track it over time.",
    color: "#8B5CF6",
  },
  {
    emoji: "✅",
    title: "Visit Logging",
    desc: "Log every session with pre/post feeling scores (0–100), services used, and notes. See your trend over time.",
    color: "#22C55E",
  },
  {
    emoji: "🔄",
    title: "4-Week Reassessment",
    desc: "Retake the intake every 4 weeks. Your plan evolves as your wellness improves.",
    color: "#F59E0B",
  },
  {
    emoji: "🔔",
    title: "Smart Reminders",
    desc: "Session reminders, reassessment prompts, and inactivity nudges keep you on track.",
    color: "#06B6D4",
  },
  {
    emoji: "📅",
    title: "Appointment Booking",
    desc: "Book services directly through the app with Zenoti integration.",
    color: "#EF4444",
  },
  {
    emoji: "✔️",
    title: "Easy Check-In",
    desc: "Check in to your existing appointments in seconds — no front desk required.",
    color: "#8B5CF6",
  },
];

export default function AppPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-[#2BBFFF] uppercase tracking-widest mb-3">The App</p>
              <h1 className="text-5xl lg:text-6xl font-black text-[#F0F0F0] tracking-tight mb-6">
                Your personalized plan starts here.
              </h1>
              <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
                The A Hot Place To Chill app transforms your membership into a guided wellness system. Take the intake, get your plan, track your score, and watch your progress build over time.
              </p>
              <p className="text-base text-[#C0C0C0] leading-relaxed mb-10">
                Free to download. Enhanced by your Unlimited Wellness membership.
              </p>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={APP_STORE_URL}
                  className="flex items-center gap-3 px-6 py-4 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#2BBFFF] rounded-xl transition-all duration-200"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#F0F0F0]">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-xs text-[#C0C0C0]">Download on the</p>
                    <p className="text-sm font-bold text-[#F0F0F0]">App Store</p>
                  </div>
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  className="flex items-center gap-3 px-6 py-4 bg-[#141414] hover:bg-[#1E1E1E] border border-[#2A2A2A] hover:border-[#2BBFFF] rounded-xl transition-all duration-200"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[#F0F0F0]">
                    <path d="M3.18 23.76c.33.18.7.24 1.06.18L14.88 12 4.24.06C3.88 0 3.51.06 3.18.24 2.52.6 2.1 1.29 2.1 2.1v19.8c0 .81.42 1.5 1.08 1.86zM16.44 13.56l2.52 2.52-9.42 5.28 6.9-7.8zM21.3 10.26c.48.27.78.78.78 1.32s-.3 1.05-.78 1.32l-2.58 1.44-2.82-2.82 2.82-2.82 2.58 1.56zM9.54 12L2.64 4.44l9.42 5.28-2.52 2.28z" />
                  </svg>
                  <div>
                    <p className="text-xs text-[#C0C0C0]">Get it on</p>
                    <p className="text-sm font-bold text-[#F0F0F0]">Google Play</p>
                  </div>
                </a>
              </div>

              <p className="text-base text-[#C0C0C0]">
                Already have an account?{" "}
                <Link href="/portal" className="text-[#2BBFFF] hover:text-[#7DD3FC] font-medium transition-colors">
                  Sign in to your portal →
                </Link>
              </p>
            </div>

            {/* App mockup */}
            <div className="relative flex justify-center">
              <div className="w-72 rounded-[2.5rem] border-2 border-[#2A2A2A] bg-[#141414] overflow-hidden shadow-2xl">
                {/* Phone notch */}
                <div className="h-7 bg-[#0A0A0A] flex items-center justify-center">
                  <div className="w-20 h-4 bg-[#141414] rounded-full" />
                </div>

                {/* App content */}
                <div className="p-5 bg-[#0A0A0A]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs text-[#C0C0C0]">Good morning</p>
                      <p className="text-base font-bold text-[#F0F0F0]">Welcome back</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#E8450A]/20 flex items-center justify-center text-sm">
                      🔥
                    </div>
                  </div>

                  {/* Score card */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#2BBFFF]/20 to-[#141414] border border-[#2BBFFF]/20 p-4 mb-4">
                    <p className="text-xs text-[#C0C0C0] mb-1">Wellness Score</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-[#F0F0F0]">78</span>
                      <span className="text-sm text-[#22C55E] mb-1">↑ +4 this month</span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      {[
                        { l: "Recovery", v: 82, c: "#2BBFFF" },
                        { l: "Movement", v: 74, c: "#8B5CF6" },
                        { l: "Sleep", v: 78, c: "#E8450A" },
                      ].map((d) => (
                        <div key={d.l} className="flex items-center gap-2">
                          <span className="text-xs text-[#C0C0C0] w-16">{d.l}</span>
                          <div className="flex-1 h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${d.v}%`, background: d.c }} />
                          </div>
                          <span className="text-xs text-[#F0F0F0] w-6 text-right">{d.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan */}
                  <div className="rounded-xl bg-[#141414] border border-[#2A2A2A] p-3 mb-4">
                    <p className="text-xs text-[#C0C0C0]">Current Plan</p>
                    <p className="text-sm font-bold text-[#F0F0F0]">Core Focus · Week 3</p>
                    <p className="text-xs text-[#E8450A] mt-0.5">Reassess in 9 days</p>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-[#E8450A]/10 border border-[#E8450A]/20 p-3 text-center">
                      <p className="text-lg">✔️</p>
                      <p className="text-xs font-medium text-[#F0F0F0]">Check In</p>
                    </div>
                    <div className="rounded-xl bg-[#2BBFFF]/10 border border-[#2BBFFF]/20 p-3 text-center">
                      <p className="text-lg">📅</p>
                      <p className="text-xs font-medium text-[#F0F0F0]">Book</p>
                    </div>
                  </div>
                </div>

                {/* Tab bar */}
                <div className="flex items-center justify-around py-3 bg-[#141414] border-t border-[#2A2A2A]">
                  {["🏠", "🛎️", "📅", "✔️", "💙"].map((icon, i) => (
                    <div
                      key={i}
                      className={`text-base ${i === 0 ? "opacity-100" : "opacity-40"}`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#8B5CF6] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                iOS & Android
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#F0F0F0] mb-3">Everything in the app</h2>
            <p className="text-[#C0C0C0]">Built specifically for A Hot Place To Chill members.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl p-5 bg-[#141414] border border-[#2A2A2A]">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3"
                  style={{ background: `${feature.color}15` }}
                >
                  {feature.emoji}
                </div>
                <h3 className="text-sm font-bold text-[#F0F0F0] mb-1">{feature.title}</h3>
                <p className="text-xs text-[#C0C0C0] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get started */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#F0F0F0] mb-4">Get started in 3 steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-12">
            {[
              { step: "1", emoji: "📲", title: "Download the app", desc: "Available on iOS and Android. Free to download." },
              { step: "2", emoji: "📋", title: "Take the intake", desc: "5 minutes. Answer questions about your goals and wellness state." },
              { step: "3", emoji: "🎯", title: "Get your plan", desc: "Your personalized plan is generated instantly. Start your first session." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#E8450A]/10 border border-[#E8450A]/20 flex items-center justify-center text-2xl mx-auto mb-3">
                  {item.emoji}
                </div>
                <h3 className="text-base font-bold text-[#F0F0F0] mb-1">{item.title}</h3>
                <p className="text-base text-[#C0C0C0]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_STORE_URL}
              className="px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              Download for iOS
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold rounded-full border border-[#2A2A2A] hover:border-[#E8450A] transition-all duration-200"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
