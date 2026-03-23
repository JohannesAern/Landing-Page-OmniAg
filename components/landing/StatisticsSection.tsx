interface Stat {
  value: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: "50K+",
    label: "Active users",
    description: "Professionals managing their finances with OmniAg every day",
  },
  {
    value: "$2.4B",
    label: "Assets tracked",
    description: "Total portfolio and account value monitored on our platform",
  },
  {
    value: "99.9%",
    label: "Uptime",
    description:
      "Enterprise-grade reliability so your data is always available",
  },
  {
    value: "4.9★",
    label: "App rating",
    description: "Average rating across App Store and Google Play reviews",
  },
] as const;

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <p className="font-poppins font-bold text-4xl sm:text-5xl text-brand-near-white mb-1">
        {stat.value}
      </p>
      <p className="text-sm font-semibold text-brand-accent font-manrope mb-2">
        {stat.label}
      </p>
      <p className="text-xs text-brand-body-alt font-manrope leading-relaxed max-w-[160px]">
        {stat.description}
      </p>
    </div>
  );
}

export default function StatisticsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-brand-dark-border/50 bg-brand-card-bg overflow-hidden">
          {/* Top gradient accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-brand-dark-border/40">
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>

          {/* Bottom gradient accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
