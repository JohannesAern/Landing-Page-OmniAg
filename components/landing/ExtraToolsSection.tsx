import { cn } from "@/lib/utils";

interface Tool {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag?: string;
}

function CalculatorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8.01" y2="10" />
      <line x1="12" y1="10" x2="12.01" y2="10" />
      <line x1="16" y1="10" x2="16.01" y2="10" />
      <line x1="8" y1="14" x2="8.01" y2="14" />
      <line x1="12" y1="14" x2="12.01" y2="14" />
      <line x1="16" y1="14" x2="16.01" y2="14" />
      <line x1="8" y1="18" x2="12" y2="18" />
      <line x1="16" y1="18" x2="16.01" y2="18" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function FileTextIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const TOOLS: Tool[] = [
  {
    title: "Net worth calculator",
    description:
      "Instantly calculate your total net worth across all assets and liabilities.",
    icon: <CalculatorIcon />,
  },
  {
    title: "Investment simulator",
    description:
      "Model different investment scenarios and see how your money could grow over time.",
    icon: <BarChartIcon />,
    tag: "New",
  },
  {
    title: "Bill alerts",
    description:
      "Never miss a payment. Get reminders for upcoming bills and subscription renewals.",
    icon: <BellIcon />,
  },
  {
    title: "Auto-transfers",
    description:
      "Schedule recurring transfers between accounts based on rules you define.",
    icon: <RefreshIcon />,
  },
  {
    title: "Vault storage",
    description:
      "Securely store important financial documents with bank-level encryption.",
    icon: <LockIcon />,
    tag: "Pro",
  },
  {
    title: "Tax reports",
    description:
      "Generate one-click tax summaries and export to your accountant or filing software.",
    icon: <FileTextIcon />,
    tag: "Pro",
  },
] as const;

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-3 p-5 rounded-2xl",
        "border border-brand-dark-border/50 bg-brand-card-bg",
        "hover:bg-brand-dark-card hover:border-brand-dark-border transition-all duration-300"
      )}
    >
      {tool.tag && (
        <span
          className={cn(
            "absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full font-manrope",
            tool.tag === "New"
              ? "bg-brand-accent/15 text-brand-accent border border-brand-accent/20"
              : "bg-brand-dark-navy/60 text-brand-muted-blue border border-brand-dark-border/50"
          )}
        >
          {tool.tag}
        </span>
      )}
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-dark-pill text-brand-accent">
        {tool.icon}
      </div>
      <div>
        <h3 className="font-poppins font-semibold text-brand-near-white text-sm mb-1.5">
          {tool.title}
        </h3>
        <p className="text-xs text-brand-gray-body font-manrope leading-relaxed">
          {tool.description}
        </p>
      </div>
    </div>
  );
}

export default function ExtraToolsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
              Extra tools
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-brand-near-white mb-4 leading-tight">
            Powerful extras built in
          </h2>
          <p className="text-brand-gray-body font-manrope max-w-lg mx-auto">
            From tax prep to investment modeling, OmniAg packs a full suite of
            financial tools alongside your everyday dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.title} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
