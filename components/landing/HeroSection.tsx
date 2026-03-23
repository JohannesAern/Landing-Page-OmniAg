import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#c8e3f5] overflow-hidden flex items-center pt-20">
      <div className="max-w-6xl mx-auto w-full px-8 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 items-end min-h-[calc(100vh-80px)]">

        {/* ── Left: text ── */}
        <div className="flex flex-col justify-center pb-16 lg:pb-24 pt-12 lg:pt-0">
          <h1 className="font-poppins font-bold text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.05] text-[#1a1a1a] mb-6">
            Your finances,{" "}
            <br />
            under control.
          </h1>

          <p className="font-manrope text-lg sm:text-xl text-[#2a2a2a] leading-relaxed mb-10 max-w-sm">
            OmniAg brings together your spending, investments, and goals in one intelligent platform.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="inline-block bg-[#013496] hover:bg-[#012070] text-white font-manrope font-semibold text-sm px-7 py-3.5 rounded transition-colors duration-200"
            >
              Get started free
            </Link>
            <Link
              href="#"
              className="inline-block border-2 border-[#013496] text-[#013496] hover:bg-[#013496]/10 font-manrope font-semibold text-sm px-7 py-3.5 rounded transition-colors duration-200"
            >
              View demo
            </Link>
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="relative flex items-end justify-center lg:justify-end h-full min-h-[380px] lg:min-h-0">
          <Image
            src="https://proxy.extractcss.dev/https://framerusercontent.com/images/L06kDydSsKJ8LId4Ou11xQiWas.png"
            alt="OmniAg dashboard"
            width={680}
            height={560}
            priority
            className="w-full max-w-[560px] lg:max-w-none h-auto object-contain object-bottom self-end"
          />
        </div>

      </div>
    </section>
  );
}
