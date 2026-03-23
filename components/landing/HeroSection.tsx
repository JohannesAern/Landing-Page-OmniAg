import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4-4 4 4 4-6 4 4" />
        <rect x="2" y="3" width="20" height="18" rx="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-time insights",
    description:
      "Track your spending and investments live. Our dashboard updates instantly so you're always in control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Set up in minutes",
    description:
      "Connect your accounts and get a full financial overview in under 5 minutes. No manual data entry.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12H4m16 0h1M4.22 19.78l.707-.707M18.364 5.636l.707-.707" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Free to get started",
    description:
      "Our 14-day trial gives you full access to every feature. No credit card required, no hidden fees.",
  },
] as const;

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Connect your accounts",
    description: "Link your bank, credit cards, and investment accounts securely in seconds.",
  },
  {
    step: 2,
    title: "Get your full picture",
    description: "OmniAg automatically categorises transactions and builds your financial dashboard.",
  },
  {
    step: 3,
    title: "Reach your goals",
    description: "Set savings targets, track progress, and let smart alerts keep you on track.",
  },
] as const;

export default function HeroSection() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full min-h-[520px] sm:min-h-[600px] flex flex-col justify-end overflow-hidden pt-20">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://proxy.extractcss.dev/https://framerusercontent.com/images/fGcjZ99aH15nOvlG5HEMNGs4ro.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          {/* Blue-gray tinted overlay, darker at bottom */}
          <div className="absolute inset-0 bg-[#1a2e4a]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 sm:px-8 pb-14 sm:pb-20">
          <div className="max-w-xl">
            <h1 className="font-poppins font-semibold text-3xl sm:text-5xl leading-tight text-white mb-4">
              Manage your finances smarter.
            </h1>
            <p className="text-sm sm:text-base text-white/80 font-manrope leading-relaxed mb-8 max-w-md">
              We help you take control of spending, investments, and savings.
              Connect your accounts and get a personalised financial plan — free
              for 14 days.
            </p>
            <Link
              href="#"
              className="inline-block bg-brand-accent hover:bg-brand-dark-blue text-white font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded transition-colors duration-200"
            >
              Get started free
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 Features ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col gap-3">
              <div className="text-brand-accent">{f.icon}</div>
              <h3 className="font-poppins font-semibold text-[#1A1A1A] text-base">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 font-manrope leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 sm:py-20">
          <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-center text-brand-accent mb-12">
            This is how it works
          </h2>

          {/* Steps timeline */}
          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Connecting line (desktop only) */}
            <div className="hidden sm:block absolute top-5 left-[calc(16.66%+1px)] right-[calc(16.66%+1px)] h-0.5 bg-amber-400" />

            {HOW_IT_WORKS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-4">
                <div className="relative z-10 w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center font-poppins font-bold text-white text-base shrink-0">
                  {s.step}
                </div>
                <h3 className="font-poppins font-semibold text-[#1A1A1A] text-base">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 font-manrope leading-relaxed max-w-[220px]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
