import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Science & Research",
  description:
    "Explore the research behind cryotherapy, infrared sauna, red light therapy, Power Plate, and compression therapy. Evidence-based wellness at A Hot Place To Chill.",
};

const RESEARCH_AREAS = [
  {
    id: "cryotherapy",
    emoji: "❄️",
    color: "#2BBFFF",
    title: "Whole Body Cryotherapy",
    summary:
      "Cryotherapy research has explored its effects on inflammatory markers, post-exercise recovery, and endorphin release. Studies suggest short cold exposures trigger systemic anti-inflammatory responses and may support recovery after physical activity.",
    studies: [
      {
        title: "Whole-body cryotherapy as adjunct treatment of depressive and anxiety disorders",
        journal: "Archives of Immunology and Therapy",
        year: "2008",
        finding: "Significant reduction in anxiety and depression scores observed after 10 WBC sessions.",
      },
      {
        title: "Cryotherapy for recovery after exercise",
        journal: "Journal of Athletic Training",
        year: "2012",
        finding: "Cold exposure post-exercise associated with reduced muscle soreness and faster return to performance.",
      },
      {
        title: "Inflammatory response to whole-body cryotherapy",
        journal: "European Journal of Applied Physiology",
        year: "2010",
        finding: "WBC reduced pro-inflammatory cytokines in subjects with inflammatory conditions.",
      },
    ],
    disclaimer:
      "Cryotherapy is intended for wellness support only. It is not a treatment for any medical condition.",
  },
  {
    id: "infrared-sauna",
    emoji: "🔥",
    color: "#E8450A",
    title: "Infrared Sauna",
    summary:
      "Infrared sauna research spans cardiovascular health, pain management, detoxification, and mental wellness. The lower temperature of infrared vs. traditional sauna allows longer, more comfortable sessions with comparable or greater physiological benefit.",
    studies: [
      {
        title: "Repeated thermal therapy improves impaired vascular endothelial function",
        journal: "Journal of the American College of Cardiology",
        year: "2002",
        finding: "Regular sauna use associated with improved endothelial function and reduced blood pressure.",
      },
      {
        title: "Infrared sauna in patients with rheumatoid arthritis and ankylosing spondylitis",
        journal: "Clinical Rheumatology",
        year: "2009",
        finding: "Infrared sauna sessions associated with short-term reduction in pain and stiffness.",
      },
      {
        title: "Sauna bathing and risk of cardiovascular disease",
        journal: "JAMA Internal Medicine",
        year: "2015",
        finding: "Frequent sauna use associated with reduced cardiovascular disease risk in a 20-year cohort study.",
      },
    ],
    disclaimer:
      "Sauna use is intended for general wellness. Consult a physician before use if you have cardiovascular conditions.",
  },
  {
    id: "red-light",
    emoji: "🔴",
    color: "#EF4444",
    title: "Red Light Therapy",
    summary:
      "Photobiomodulation (red and near-infrared light therapy) is one of the most studied non-invasive wellness modalities. Research spans wound healing, skin health, muscle recovery, and mitochondrial function.",
    studies: [
      {
        title: "Low-level laser therapy for muscle recovery",
        journal: "Photomedicine and Laser Surgery",
        year: "2011",
        finding: "Pre-exercise red light therapy associated with reduced muscle fatigue and faster recovery.",
      },
      {
        title: "Photobiomodulation in skin rejuvenation",
        journal: "Journal of Cosmetic and Laser Therapy",
        year: "2014",
        finding: "Red light therapy associated with improved skin texture, tone, and collagen density.",
      },
      {
        title: "Near-infrared light and mitochondrial function",
        journal: "Mitochondrion",
        year: "2013",
        finding: "NIR light shown to stimulate cytochrome c oxidase, increasing ATP production in cells.",
      },
    ],
    disclaimer:
      "Red light therapy is for general wellness support. It is not intended to diagnose or treat medical conditions.",
  },
  {
    id: "power-plate",
    emoji: "⚡",
    color: "#8B5CF6",
    title: "Power Plate (Whole-Body Vibration)",
    summary:
      "Whole-body vibration (WBV) research has examined its effects on muscle activation, bone density, balance, and circulation. The Power Plate platform is used in clinical rehabilitation, sports performance, and general wellness settings.",
    studies: [
      {
        title: "Whole-body vibration training and muscle strength",
        journal: "Journal of Strength and Conditioning Research",
        year: "2007",
        finding: "WBV training produced significant improvements in leg strength and power comparable to conventional resistance training.",
      },
      {
        title: "Vibration training and bone mineral density",
        journal: "Osteoporosis International",
        year: "2004",
        finding: "WBV associated with increased bone mineral density in postmenopausal women.",
      },
      {
        title: "Whole-body vibration and balance in older adults",
        journal: "Archives of Physical Medicine and Rehabilitation",
        year: "2010",
        finding: "WBV training improved balance and reduced fall risk in elderly subjects.",
      },
    ],
    disclaimer:
      "Power Plate is for general wellness and fitness support. Consult a physician if you have orthopedic conditions.",
  },
  {
    id: "compression",
    emoji: "💨",
    color: "#22C55E",
    title: "Compression Therapy",
    summary:
      "Sequential pneumatic compression (SPC) is widely used in clinical and sports settings. Research supports its role in improving venous return, reducing edema, and accelerating post-exercise recovery.",
    studies: [
      {
        title: "Pneumatic compression and recovery from exercise",
        journal: "Journal of Strength and Conditioning Research",
        year: "2013",
        finding: "SPC associated with reduced muscle soreness and faster recovery of strength after intense exercise.",
      },
      {
        title: "Compression therapy for lymphedema",
        journal: "Lymphology",
        year: "2009",
        finding: "Sequential pneumatic compression effective in reducing limb volume in lymphedema patients.",
      },
    ],
    disclaimer:
      "Compression therapy is for wellness and recovery support. Not intended to treat venous or lymphatic disease.",
  },
];

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8450A] uppercase tracking-widest mb-3">Evidence Base</p>
          <h1 className="text-5xl lg:text-6xl font-black text-[#F0F0F0] tracking-tight mb-6">
            Science & Research
          </h1>
          <p className="text-lg text-[#C0C0C0] leading-relaxed">
            Every service we offer is selected because the research supports it. We don&apos;t make medical claims — but we do believe in evidence-based wellness. Here&apos;s what the science says.
          </p>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-5">
          <p className="text-base text-[#C0C0C0] leading-relaxed">
            <span className="font-semibold text-[#F59E0B]">Important: </span>
            The research summaries below are provided for educational purposes only. Services at A Hot Place To Chill are intended for general wellness support and are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare provider before starting any wellness program.
          </p>
        </div>
      </div>

      {/* Research sections */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {RESEARCH_AREAS.map((area) => (
            <div key={area.id} id={area.id}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: `${area.color}15` }}
                >
                  {area.emoji}
                </div>
                <h2 className="text-3xl font-black text-[#F0F0F0]">{area.title}</h2>
              </div>

              <p className="text-base text-[#C0C0C0] leading-relaxed mb-8">{area.summary}</p>

              {/* Studies */}
              <div className="space-y-4 mb-6">
                {area.studies.map((study) => (
                  <div
                    key={study.title}
                    className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-sm font-semibold text-[#F0F0F0] leading-snug">{study.title}</h3>
                      <span className="text-xs text-[#C0C0C0] shrink-0">{study.year}</span>
                    </div>
                    <p className="text-xs text-[#C0C0C0] mb-3 italic">{study.journal}</p>
                    <div
                      className="text-sm text-[#F0F0F0] p-3 rounded-lg"
                      style={{ background: `${area.color}10`, borderLeft: `3px solid ${area.color}` }}
                    >
                      {study.finding}
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-[#C0C0C0] italic p-4 rounded-lg bg-[#141414] border border-[#2A2A2A]">
                ⚠️ {area.disclaimer}
              </p>

              <hr className="border-[#2A2A2A] mt-12" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[#0d0d0d] border-t border-[#2A2A2A]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F0F0F0] mb-4">Ready to experience it yourself?</h2>
          <p className="text-[#C0C0C0] mb-8">
            The research is compelling. The experience is better. Come see for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-[#E8450A] hover:bg-[#d13d09] text-white font-bold rounded-full transition-all duration-200 hover:scale-105"
            >
              Explore Services
            </Link>
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
