import Image from "next/image";
import Link from "next/link";

const BRAND_LOGOS = [
  {
    id: "njR4vc3CneMWk2Hb2Fssp9pHTbk",
    alt: "Brand partner 1",
  },
  {
    id: "wWb4slCaOduEWAivmJFstMjx6qc",
    alt: "Brand partner 2",
  },
  {
    id: "Y6yn57fYB15aSbFBhmwqiOzQrQ",
    alt: "Brand partner 3",
  },
  {
    id: "lo3NQV5s300QS0DSSxciQNNYAw",
    alt: "Brand partner 4",
  },
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://proxy.extractcss.dev/https://framerusercontent.com/images/fGcjZ99aH15nOvlG5HEMNGs4ro.png"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-page-bg/60 via-brand-page-bg/40 to-brand-page-bg" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Badge pill */}
        <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          <span className="text-xs font-medium text-brand-muted-blue font-manrope">
            Smart Finance Management
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-brand-near-white mb-6">
          Manage your finances{" "}
          <span className="gradient-text-accent">smarter</span>
          <br className="hidden sm:block" /> not harder
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-brand-gray-body font-manrope max-w-2xl mb-10 leading-relaxed">
          Track spending, manage investments, and achieve your financial goals
          with our intelligent platform designed for modern professionals.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
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
            View demo
          </Link>
        </div>

        {/* App mockup */}
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="https://proxy.extractcss.dev/https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
            alt="OmniAg app mockup"
            width={800}
            height={600}
            className="w-full h-auto rounded-2xl"
            priority
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-dark-border/40" />
        </div>

        {/* Brand logos ticker */}
        <div className="mt-16 w-full">
          <p className="text-xs text-brand-body-alt font-manrope uppercase tracking-widest mb-6">
            Trusted by teams at
          </p>
          <div className="relative overflow-hidden pause-on-hover">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-brand-page-bg to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-brand-page-bg to-transparent pointer-events-none" />

            <div className="flex gap-12 animate-marquee-slow whitespace-nowrap">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex-shrink-0 h-8 w-24 relative grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={`https://proxy.extractcss.dev/https://framerusercontent.com/images/${logo.id}`}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
