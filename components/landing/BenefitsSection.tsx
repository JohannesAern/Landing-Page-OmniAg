import { cn } from "@/lib/utils";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-accent"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function PieChartIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

const BENEFITS: Benefit[] = [
  {
    icon: <TrendingIcon />,
    title: "Smart investment tracking",
    description:
      "Monitor all your investments in real time with AI-powered insights and automated portfolio rebalancing suggestions.",
  },
  {
    icon: <ShieldIcon />,
    title: "Bank-grade security",
    description:
      "Your financial data is protected with 256-bit encryption, two-factor authentication, and continuous fraud monitoring.",
  },
  {
    icon: <ZapIcon />,
    title: "Instant transactions",
    description:
      "Send and receive money instantly across 40+ countries with near-zero fees, powered by our proprietary payment rails.",
  },
  {
    icon: <PieChartIcon />,
    title: "Budgeting made easy",
    description:
      "Set budgets, track categories automatically, and get proactive alerts before you overspend — all in one dashboard.",
  },
];

const CHECKLIST_ITEMS = [
  "No hidden fees or surprise charges",
  "Cancel anytime, no lock-in contracts",
  "24/7 live support from real humans",
  "Works with 10,000+ banks worldwide",
];

function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 p-6 rounded-2xl border border-brand-dark-border/50",
        "bg-brand-card-bg hover:bg-brand-dark-card transition-colors duration-300"
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-dark-pill text-brand-accent">
        {benefit.icon}
      </div>
      <div>
        <h3 className="font-poppins font-semibold text-brand-near-white text-base mb-2">
          {benefit.title}
        </h3>
        <p className="text-sm text-brand-gray-body leading-relaxed font-manrope">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="py-24 px-4" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
              Why OmniAg
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-near-white mb-6 max-w-2xl mx-auto leading-tight">
            Everything you need to take control of your money
          </h2>
          <p className="text-brand-gray-body font-manrope max-w-xl mx-auto leading-relaxed">
            From tracking everyday expenses to growing long-term wealth, OmniAg
            gives you every tool in one beautifully simple platform.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>

        {/* Checklist row */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {CHECKLIST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-sm text-brand-muted-blue font-manrope">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
