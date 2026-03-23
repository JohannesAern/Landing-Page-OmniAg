import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarId?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "OmniAg completely changed how I handle my business finances. The real-time insights saved me thousands in unnecessary spending.",
    name: "Sarah Johnson",
    role: "Founder, TechStart",
  },
  {
    quote:
      "I've tried dozens of finance apps and nothing comes close to how intuitive and powerful this platform is. Absolutely love it.",
    name: "Marcus Williams",
    role: "Freelance Designer",
  },
  {
    quote:
      "The investment tracking feature alone is worth every penny. I can finally see my whole portfolio in one place.",
    name: "Priya Sharma",
    role: "Product Manager, Scale Corp",
  },
  {
    quote:
      "Setting up took less than 5 minutes and instantly connected to all my accounts. The budget alerts are a game changer.",
    name: "James Carter",
    role: "Software Engineer",
  },
  {
    quote:
      "Our finance team relies on OmniAg for daily reporting. The export features and API integrations are top-notch.",
    name: "Elena Kowalski",
    role: "CFO, NovaBuild",
  },
  {
    quote:
      "Finally a finance tool that doesn't feel like you need a PhD to use. Clean, fast, and genuinely helpful.",
    name: "David Osei",
    role: "Marketing Director",
  },
] as const;

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#1f78ff"
          className="shrink-0"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-72 sm:w-80 flex flex-col gap-4 p-6 rounded-2xl",
        "border border-brand-dark-border/50 bg-brand-card-bg",
        className
      )}
    >
      <StarRating />
      <p className="text-sm text-brand-muted-blue font-manrope leading-relaxed line-clamp-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-auto">
        {testimonial.avatarId ? (
          <Image
            src={`https://proxy.extractcss.dev/https://framerusercontent.com/images/${testimonial.avatarId}`}
            alt={testimonial.name}
            width={36}
            height={36}
            className="rounded-full w-9 h-9 object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-brand-dark-pill flex items-center justify-center text-brand-accent font-semibold text-sm font-poppins">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-brand-near-white font-poppins">
            {testimonial.name}
          </p>
          <p className="text-xs text-brand-body-alt font-manrope">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const firstRow = TESTIMONIALS.slice(0, 3);
  const secondRow = TESTIMONIALS.slice(3, 6);

  return (
    <section className="py-24 overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
            Testimonials
          </span>
        </div>
        <h2 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-brand-near-white mb-4 leading-tight">
          Loved by thousands of users
        </h2>
        <p className="text-brand-gray-body font-manrope max-w-xl mx-auto">
          Join over 50,000 professionals who trust OmniAg to manage their
          finances every day.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-4 pause-on-hover">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-brand-page-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-brand-page-bg to-transparent pointer-events-none" />
        <div className="flex gap-4 animate-marquee">
          {[...firstRow, ...firstRow, ...firstRow].map((t, i) => (
            <TestimonialCard key={`row1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative pause-on-hover">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-brand-page-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-brand-page-bg to-transparent pointer-events-none" />
        <div className="flex gap-4 animate-marquee-reverse">
          {[...secondRow, ...secondRow, ...secondRow].map((t, i) => (
            <TestimonialCard key={`row2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
