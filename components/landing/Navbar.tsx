"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "w-full max-w-5xl rounded-2xl border border-brand-dark-border/60 bg-brand-page-bg/80 backdrop-blur-md",
          "flex items-center justify-between px-6 py-3"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/omniag-logo.svg"
            alt="OmniAg logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-poppins font-semibold text-brand-near-white text-base">
            OmniAg
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-brand-gray-body hover:text-brand-near-white transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="text-sm text-brand-gray-body hover:text-brand-near-white transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="text-sm font-medium bg-brand-accent hover:bg-brand-dark-blue text-white px-4 py-2 rounded-xl transition-colors duration-200"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 text-brand-gray-body hover:text-brand-near-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-2xl border border-brand-dark-border/60 bg-brand-page-bg/95 backdrop-blur-md p-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-brand-gray-body hover:text-brand-near-white transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <hr className="border-brand-dark-border/40" />
          <Link
            href="#"
            className="text-sm text-brand-gray-body hover:text-brand-near-white transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="text-sm font-medium bg-brand-accent hover:bg-brand-dark-blue text-white px-4 py-2 rounded-xl text-center transition-colors duration-200"
          >
            Get started
          </Link>
        </div>
      )}
    </header>
  );
}
