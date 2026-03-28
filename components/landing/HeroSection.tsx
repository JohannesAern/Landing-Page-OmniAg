"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://proxy.extractcss.dev/https://framerusercontent.com/images/fGcjZ99aH15nOvlG5HEMNGs4ro.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay — heavy like Netflix */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Subtle blue tint to keep OmniAg identity */}
        <div className="absolute inset-0 bg-[#013496]/20" />
        {/* Vignette top & bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl mx-auto">

        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-4 drop-shadow-lg">
          Visão geral da sua lavoura
        </h1>

        <p className="font-manrope text-base sm:text-lg text-white/90 mb-3 drop-shadow">
          Monitore cultivos, finanças e insumos em um só lugar. Cancele quando quiser.
        </p>

        <p className="font-manrope text-sm text-white/70 mb-6">
          Pronto para começar? Informe seu e-mail para criar sua conta gratuitamente.
        </p>

        {/* Email + CTA */}
        <div className="flex flex-col sm:flex-row w-full max-w-xl gap-0 shadow-2xl">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            className="flex-1 px-5 py-4 text-base bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 sm:rounded-l sm:rounded-r-none rounded outline-none focus:border-white/60 transition-colors font-manrope"
          />
          <button
            type="button"
            className="flex items-center justify-center gap-2 bg-[#013496] hover:bg-[#012070] text-white font-manrope font-semibold text-base px-8 py-4 sm:rounded-r sm:rounded-l-none rounded whitespace-nowrap transition-colors duration-200"
          >
            Começar agora
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
