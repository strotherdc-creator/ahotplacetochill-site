import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Member Portal",
  description:
    "Sign in to your A Hot Place To Chill member portal. View your Wellness Score, current plan, visit history, and upcoming appointments.",
};

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Sign-in panel */}
          <div>
            <p className="text-sm font-semibold text-[#2BBFFF] uppercase tracking-widest mb-3">Member Portal</p>
            <h1 className="text-4xl lg:text-5xl font-black text-[#F0F0F0] tracking-tight mb-4">
              Your wellness dashboard
            </h1>
            <p className="text-lg text-[#C0C0C0] leading-relaxed mb-8">
              Sign in to view your Wellness Score, current plan, visit history, and upcoming appointments. Your portal syncs with the mobile app in real time.
            </p>

            {/* Sign in with app */}
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#141414] p-8 mb-6">
              <h2 className="text-xl font-bold text-[#F0F0F0] mb-2">Sign in with the app</h2>
              <p className="text-base text-[#C0C0C0] mb-6">
                Use the same account you created in the A Hot Place To Chill mobile app. Your data syncs automatically.
              </p>

              <a
                href="#signin"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-xl transition-all duration-200 hover:scale-[1.02] mb-4"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Sign In to Your Portal
              </a>

              <p className="text-xs text-[#C0C0C0] text-center">
                Don&apos;t have an account?{" "}
                <Link href="/wellness-app" className="text-[#2BBFFF] hover:text-[#7DD3FC] transition-colors">
                  Download the app to get started
                </Link>
              </p>
            </div>

            {/* What you&apos;ll see */}
            <div className="space-y-3">
              {[
                { emoji: "📊", label: "Wellness Score across 5 domains" },
                { emoji: "🎯", label: "Your current personalized plan" },
                { emoji: "📅", label: "Upcoming appointments" },
                { emoji: "✅", label: "Visit history and session logs" },
                { emoji: "🔄", label: "Reassessment schedule and history" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-base text-[#C0C0C0]">
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative">
            <div className="rounded-3xl border border-[#2A2A2A] bg-[#141414] overflow-hidden">
              {/* Dashboard header */}
              <div className="bg-[#1E1E1E] border-b border-[#2A2A2A] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#C0C0C0]">Member Portal</p>
                  <p className="text-sm font-bold text-[#F0F0F0]">Dashboard</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8450A]/20 flex items-center justify-center text-sm">
                  🔥
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-5">
                {/* Score */}
                <div className="rounded-2xl bg-gradient-to-br from-[#2BBFFF]/15 to-[#141414] border border-[#2BBFFF]/20 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-[#C0C0C0] uppercase tracking-wider">Wellness Score</p>
                      <div className="flex items-end gap-2">
                        <span className="text-5xl font-black text-[#F0F0F0]">78</span>
                        <span className="text-sm text-[#22C55E] mb-1">↑ +4</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-[#2BBFFF]/40 flex items-center justify-center">
                      <span className="text-sm font-black text-[#2BBFFF]">78</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { l: "Recovery", v: 82, c: "#2BBFFF" },
                      { l: "Movement", v: 74, c: "#8B5CF6" },
                      { l: "Sleep", v: 78, c: "#E8450A" },
                      { l: "Stress", v: 70, c: "#22C55E" },
                      { l: "Vitality", v: 80, c: "#F59E0B" },
                    ].map((d) => (
                      <div key={d.l} className="flex items-center gap-3">
                        <span className="text-xs text-[#C0C0C0] w-16">{d.l}</span>
                        <div className="flex-1 h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${d.v}%`, background: d.c }} />
                        </div>
                        <span className="text-xs text-[#F0F0F0] w-6 text-right">{d.v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan + Next appointment */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] p-4">
                    <p className="text-xs text-[#C0C0C0] mb-1">Current Plan</p>
                    <p className="text-sm font-bold text-[#F0F0F0]">Core Focus</p>
                    <p className="text-xs text-[#E8450A] mt-1">Week 3 of 4</p>
                  </div>
                  <div className="rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] p-4">
                    <p className="text-xs text-[#C0C0C0] mb-1">Next Session</p>
                    <p className="text-sm font-bold text-[#F0F0F0]">Tomorrow</p>
                    <p className="text-xs text-[#2BBFFF] mt-1">10:00 AM</p>
                  </div>
                </div>

                {/* Recent visits */}
                <div>
                  <p className="text-xs font-semibold text-[#C0C0C0] uppercase tracking-wider mb-3">Recent Visits</p>
                  <div className="space-y-2">
                    {[
                      { date: "Mar 10", services: "Cryo + Red Light", score: "+8" },
                      { date: "Mar 8", services: "Sauna + Power Plate", score: "+12" },
                      { date: "Mar 6", services: "Compression + Cryo", score: "+6" },
                    ].map((visit) => (
                      <div key={visit.date} className="flex items-center justify-between text-sm py-2 border-b border-[#2A2A2A] last:border-0">
                        <div>
                          <span className="text-[#C0C0C0] mr-3">{visit.date}</span>
                          <span className="text-[#F0F0F0]">{visit.services}</span>
                        </div>
                        <span className="text-[#22C55E] font-medium">{visit.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blur overlay indicating login required */}
            <div className="absolute inset-0 rounded-3xl bg-[#0A0A0A]/60 backdrop-blur-[2px] flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-[#E8450A]/20 border border-[#E8450A]/30 flex items-center justify-center text-2xl mx-auto mb-3">
                  🔒
                </div>
                <p className="text-sm font-semibold text-[#F0F0F0] mb-1">Sign in to view your dashboard</p>
                <p className="text-xs text-[#C0C0C0]">Your data is private and secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
