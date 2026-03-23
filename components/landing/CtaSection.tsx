import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative rounded-3xl border border-brand-dark-border/50 bg-brand-card-bg overflow-hidden px-8 py-16 sm:py-20">
          {/* Glow blob */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-medium text-brand-muted-blue font-manrope">
                Free 14-day trial — no credit card required
              </span>
            </div>

            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-near-white mb-6 leading-tight">
              Start managing your money{" "}
              <span className="gradient-text-accent">smarter today</span>
            </h2>

            <p className="text-brand-gray-body font-manrope max-w-lg mx-auto mb-10 leading-relaxed">
              Join 50,000+ users who have transformed their financial life with
              OmniAg. Set up in under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-dark-blue text-white font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm glow-accent"
              >
                Get started free
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto border border-brand-dark-border/60 text-brand-near-white hover:bg-brand-dark-card font-medium px-8 py-3.5 rounded-xl transition-colors duration-200 text-sm"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
