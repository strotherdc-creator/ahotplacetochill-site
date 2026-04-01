import type { Metadata } from "next";
import Link from "next/link";
import { ZENOTI_BOOKING_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Understand the A Hot Place To Chill system: intake assessment, personalized plan, Wellness Score tracking, and 4-week reassessment cycle.",
};

const STEPS = [
  {
    number: "01",
    emoji: "📋",
    color: "#2BBFFF",
    title: "Take the Intake Assessment",
    desc: "Answer 18 questions about your goals, current wellness state, lifestyle, and any physical considerations. This takes about 5 minutes and gives us everything we need to build your plan.",
    detail: "The intake covers: your top wellness goals, pain and stiffness levels, sleep quality, stress, energy stability, movement ability, and what you want your life to look like 6 months from now.",
  },
  {
    number: "02",
    emoji: "🎯",
    color: "#E8450A",
    title: "Get Your Personalized Plan",
    desc: "Based on your intake, the system generates a Foundation, Core Focus, or Enhanced plan — matched to your needs and the services most likely to move the needle for you.",
    detail: "Each plan specifies which modalities to use, in what order, and how often. Power Plate, sauna, cryotherapy, red light, and compression are all weighted by your specific goals.",
  },
  {
    number: "03",
    emoji: "📊",
    color: "#8B5CF6",
    title: "Track Your Wellness Score",
    desc: "Your Wellness Score is a 0–100 composite across 5 domains: Recovery, Movement, Sleep, Stress, and Vitality. It gives you a single number to track your progress over time.",
    detail: "After every visit, log your pre and post session feeling scores. The app tracks the trend so you can see how each modality affects how you feel — and adjust your plan accordingly.",
  },
  {
    number: "04",
    emoji: "🔄",
    color: "#22C55E",
    title: "Reassess Every 4 Weeks",
    desc: "Every 4 weeks, you retake the intake to update your plan. As your wellness improves, your plan evolves — moving from Foundation to Core Focus to Enhanced as you progress.",
    detail: "The reassessment system applies a cap to prevent score inflation and ensures your plan stays honest and aligned with where you actually are — not where you were 3 months ago.",
  },
];

const TIERS = [
  {
    name: "Foundation",
    color: "#2BBFFF",
    bg: "rgba(43,191,255,0.08)",
    border: "rgba(43,191,255,0.2)",
    desc: "For those new to wellness services or rebuilding from a low baseline. Focus on 2–3 core modalities, consistent frequency, and building the habit.",
    services: ["Whole Body Cryotherapy", "Red Light Therapy", "Compression Therapy"],
  },
  {
    name: "Core Focus",
    color: "#E8450A",
    bg: "rgba(232,69,10,0.08)",
    border: "rgba(232,69,10,0.2)",
    desc: "For those with an established routine who are ready to add structure and specificity. 3–4 modalities with targeted protocols.",
    services: ["Desert Heat Sauna", "Power Plate", "Cryotherapy", "Red Light Therapy"],
  },
  {
    name: "Enhanced",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.2)",
    desc: "For those with high wellness scores and performance goals. Full modality stack with advanced protocols and maximum frequency.",
    services: ["All Core Services", "Advanced Sauna Protocols", "Power Plate + Recovery Stack"],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">The System</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#F0F0F0] tracking-tight mb-6">
            How it works
          </h1>
          <p className="text-lg text-[#C0C0C0] leading-relaxed">
            A Hot Place To Chill isn&apos;t just a collection of services — it&apos;s a structured wellness system. The app connects your goals to a personalized plan and tracks your progress over time.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-8 relative overflow-hidden"
              >
                {/* Step number background */}
                <div
                  className="absolute top-0 right-0 text-[120px] font-black leading-none opacity-[0.04] pointer-events-none select-none"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                <div className="relative">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: `${step.color}15` }}
                    >
                      {step.emoji}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold" style={{ color: step.color }}>
                          STEP {step.number}
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-[#F0F0F0] mb-3">{step.title}</h2>
                      <p className="text-base text-[#C0C0C0] leading-relaxed mb-4">{step.desc}</p>
                      <p className="text-base text-[#C0C0C0] leading-relaxed p-4 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A]">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {idx < STEPS.length - 1 && (
                  <div className="absolute -bottom-3 left-[3.25rem] w-0.5 h-6 bg-[#2A2A2A]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-24 px-6 bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#F0F0F0] mb-3">Three program tiers</h2>
            <p className="text-[#C0C0C0]">Your plan is assigned based on your intake score and evolves as you progress.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl p-7 border"
                style={{ background: tier.bg, borderColor: tier.border }}
              >
                <h3 className="text-2xl font-black mb-2" style={{ color: tier.color }}>
                  {tier.name}
                </h3>
                <p className="text-base text-[#C0C0C0] leading-relaxed mb-5">{tier.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">Typical Modalities</p>
                  <ul className="space-y-2">
                    {tier.services.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-[#F0F0F0]">
                        <span style={{ color: tier.color }}>→</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F0F0F0] mb-4">Ready to start your plan?</h2>
          <p className="text-[#C0C0C0] mb-8">
            Download the app to take your intake and get your personalized plan. Or book a session and experience the services first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wellness-app"
              className="px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              Start Your Plan
            </Link>
            <a
              href={ZENOTI_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#141414] hover:bg-[#1E1E1E] text-[#F0F0F0] font-bold rounded-full border border-[#2A2A2A] hover:border-[#E8450A] transition-all duration-200"
            >
              Book a Session First
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
