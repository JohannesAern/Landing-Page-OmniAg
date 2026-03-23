import { cn } from "@/lib/utils";

interface Feature {
  number: string;
  title: string;
  description: string;
  details: string[];
}

const FEATURES: Feature[] = [
  {
    number: "01",
    title: "Connect all your accounts in seconds",
    description:
      "Link your bank accounts, credit cards, investments, and crypto wallets in a single secure dashboard. We support 10,000+ financial institutions worldwide.",
    details: [
      "One-click bank integration",
      "Real-time balance sync",
      "Supports crypto & DeFi wallets",
      "Works globally — 40+ countries",
    ],
  },
  {
    number: "02",
    title: "AI-powered spending insights",
    description:
      "Our machine learning engine automatically categorizes your transactions, detects unusual patterns, and surfaces actionable insights to reduce waste.",
    details: [
      "Auto-categorization with 98% accuracy",
      "Anomaly & fraud detection",
      "Monthly spend reports",
      "Custom category rules",
    ],
  },
  {
    number: "03",
    title: "Set goals and hit them",
    description:
      "Define financial goals — emergency fund, vacation, home deposit — and let OmniAg calculate a personalized savings plan that adapts as your income changes.",
    details: [
      "Smart savings calculator",
      "Dynamic plan adjustments",
      "Visual progress tracking",
      "Milestone notifications",
    ],
  },
] as const;

function CheckSmallIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-accent shrink-0 mt-0.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 border-b border-brand-dark-border/40 last:border-0">
      {/* Text side */}
      <div>
        <span className="text-5xl font-poppins font-bold text-brand-dark-border/60 leading-none">
          {feature.number}
        </span>
        <h3 className="font-poppins font-semibold text-2xl sm:text-3xl text-brand-near-white mt-3 mb-4 leading-snug">
          {feature.title}
        </h3>
        <p className="text-brand-gray-body font-manrope leading-relaxed mb-6">
          {feature.description}
        </p>
        <ul className="flex flex-col gap-2">
          {feature.details.map((d) => (
            <li key={d} className="flex items-start gap-2">
              <CheckSmallIcon />
              <span className="text-sm text-brand-muted-blue font-manrope">
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual placeholder */}
      <div
        className={cn(
          "rounded-2xl border border-brand-dark-border/50 bg-brand-card-bg",
          "h-64 lg:h-72 flex items-center justify-center"
        )}
      >
        <div className="flex flex-col items-center gap-3 opacity-40">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-brand-accent"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span className="text-xs text-brand-body-alt font-manrope">
            Feature {feature.number} preview
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
              How it works
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-near-white mb-4 leading-tight">
            Three steps to financial clarity
          </h2>
          <p className="text-brand-gray-body font-manrope max-w-xl mx-auto">
            Getting started takes minutes. Seeing results takes days, not years.
          </p>
        </div>

        <div>
          {FEATURES.map((feature) => (
            <FeatureItem key={feature.number} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
