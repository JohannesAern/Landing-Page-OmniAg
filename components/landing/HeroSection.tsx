import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#c8e3f5] pt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">

        {/* ── Left: text ── */}
        <div className="flex flex-col justify-center py-12 lg:py-24">
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[#1a1a1a] mb-5">
            Your finances,
            <br />
            under control.
          </h1>

          <p className="font-manrope text-base sm:text-lg text-[#2a2a2a] leading-relaxed mb-8 max-w-xs sm:max-w-sm">
            OmniAg brings together your spending, investments, and goals in one intelligent platform.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="bg-[#013496] hover:bg-[#012070] text-white font-manrope font-semibold text-sm px-6 py-3 rounded transition-colors duration-200"
            >
              Get started free
            </Link>
            <Link
              href="#"
              className="border-2 border-[#013496] text-[#013496] hover:bg-[#013496]/10 font-manrope font-semibold text-sm px-6 py-3 rounded transition-colors duration-200"
            >
              View demo
            </Link>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="flex items-end justify-center lg:justify-end">
          <Image
            src="https://proxy.extractcss.dev/https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
            alt="OmniAg dashboard"
            width={600}
            height={520}
            priority
            className="w-full max-w-[460px] lg:max-w-[560px] h-auto object-contain object-bottom"
          />
        </div>

      </div>
    </section>
  );
}
