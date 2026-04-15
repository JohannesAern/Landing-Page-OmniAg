"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TRUST_ITEMS = [
  "Sem contratos de longo prazo",
  "Cancele quando quiser",
  "Suporte em português",
];

function DashboardMockup() {
  return (
    <div className="relative w-full">
      {/* Glow behind the card */}
      <div className="absolute -inset-4 rounded-3xl bg-brand-accent/10 blur-2xl pointer-events-none" />

      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-brand-dark-border/40 bg-white shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-dark-border/20 bg-[#F8F9FB]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-3 h-5 rounded-md bg-brand-dark-border/20 flex items-center px-2">
            <span className="text-[9px] text-brand-gray-body font-manrope">app.omniag.com.br</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-brand-gray-body font-manrope">Safra 2025</p>
              <p className="text-base font-poppins font-semibold text-brand-near-white">Lavoura Principal</p>
            </div>
            <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-green-700 font-manrope font-medium">Tudo em dia</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Hectares", value: "340 ha", color: "text-brand-accent" },
              { label: "Produção", value: "58 sc/ha", color: "text-green-600" },
              { label: "Resultado", value: "R$ 412k", color: "text-brand-near-white" },
            ].map(({ label, value, color }) => (
              <div key={label} className="rounded-xl border border-brand-dark-border/30 bg-[#F8F9FB] p-3">
                <p className="text-[10px] text-brand-gray-body font-manrope mb-1">{label}</p>
                <p className={`text-sm font-poppins font-bold ${color}`}>{value}</p>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="rounded-xl border border-brand-dark-border/30 bg-[#F8F9FB] p-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-manrope font-medium text-brand-near-white">Receita mensal</p>
              <span className="text-[10px] text-green-600 font-manrope font-medium">+18% vs. ano anterior</span>
            </div>
            {/* Simple bar chart */}
            <div className="flex items-end gap-1.5 h-16">
              {[45, 62, 38, 78, 55, 90, 70, 85, 60, 95, 72, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    backgroundColor: i === 9 ? "#013496" : i === 11 ? "#013496" : "#013496",
                    opacity: i >= 10 ? 0.25 : i >= 8 ? 0.5 : 0.8,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[9px] text-brand-gray-body font-manrope">Jan</span>
              <span className="text-[9px] text-brand-gray-body font-manrope">Dez</span>
            </div>
          </div>

          {/* Tasks row */}
          <div className="space-y-2">
            {[
              { text: "Aplicação de defensivos — Talhão 3", done: true },
              { text: "Relatório de insumos pendente", done: false },
              { text: "Irrigação programada para amanhã", done: false },
            ].map(({ text, done }) => (
              <div key={text} className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${done ? "bg-brand-accent border-brand-accent" : "border-brand-dark-border/50"}`}>
                  {done && (
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className={`text-xs font-manrope ${done ? "line-through text-brand-gray-body" : "text-brand-near-white"}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative w-full bg-brand-page-bg pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">

      {/* Subtle decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text + CTA ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-brand-dark-border/40 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              <span className="text-xs font-manrope font-medium text-brand-near-white tracking-wide">
                Plataforma Agrícola Inteligente
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[52px] leading-tight text-brand-near-white mb-5">
              Visão geral da sua lavoura,{" "}
              <span className="text-brand-accent">em um só lugar</span>
            </h1>

            {/* Subtitle */}
            <p className="font-manrope text-base sm:text-lg text-brand-gray-body leading-relaxed mb-8 max-w-lg">
              Monitore cultivos, finanças e insumos com inteligência. Tome decisões mais rápidas e aumente a produtividade da sua propriedade.
            </p>

            {/* Email CTA */}
            <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3.5 text-sm bg-white border border-brand-dark-border/50 text-brand-near-white placeholder-brand-gray-body rounded-xl outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all font-manrope shadow-sm"
              />
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-dark-blue text-white font-manrope font-semibold text-sm px-6 py-3.5 rounded-xl whitespace-nowrap transition-colors duration-200 shadow-sm"
              >
                Começar grátis
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-xs text-brand-gray-body font-manrope">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <div className="w-full lg:pl-4">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
