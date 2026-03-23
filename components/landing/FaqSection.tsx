"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Is OmniAg free to use?",
    answer:
      "OmniAg offers a free 14-day trial with full access to all features. After the trial, you can choose from our Starter, Pro, or Business plans. There's no credit card required to start your trial.",
  },
  {
    question: "How secure is my financial data?",
    answer:
      "We use 256-bit AES encryption for all data at rest and in transit. We are SOC 2 Type II certified, never store your banking passwords, and use read-only API access through Plaid and other regulated providers. Your data is never sold or shared with third parties.",
  },
  {
    question: "Which banks and financial institutions are supported?",
    answer:
      "OmniAg connects with over 10,000 banks, credit unions, and financial institutions across 40+ countries. If your bank isn't listed, you can import CSV statements manually. We're continuously adding new institutions.",
  },
  {
    question: "Can I use OmniAg for my business finances?",
    answer:
      "Absolutely. Our Business plan includes multi-user access, advanced reporting, QuickBooks/Xero integrations, expense approval workflows, and dedicated support. Many small businesses and freelancers use OmniAg to replace traditional accounting software.",
  },
  {
    question: "How does the AI categorization work?",
    answer:
      "Our machine learning model is trained on millions of transactions and achieves 98% categorization accuracy out of the box. You can also create custom rules to override or refine categories. The model learns from your corrections over time.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. There are no lock-in contracts. You can cancel your subscription at any time from your account settings and you'll retain access until the end of your billing period. We offer a full refund within 30 days if you're not satisfied.",
  },
] as const;

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-brand-dark-border/40 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-sm sm:text-base font-semibold font-poppins transition-colors duration-200",
            isOpen ? "text-brand-near-white" : "text-brand-muted-blue group-hover:text-brand-near-white"
          )}
        >
          {item.question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-brand-accent/50 bg-brand-accent/10 rotate-45"
              : "border-brand-dark-border/60 bg-brand-dark-pill"
          )}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={cn("transition-colors duration-200", isOpen ? "text-brand-accent" : "text-brand-gray-body")}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-48 opacity-100 pb-5" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm text-brand-gray-body font-manrope leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-brand-near-white mb-4 leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-brand-gray-body font-manrope">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <a href="#" className="text-brand-accent hover:underline">
              support team
            </a>
            .
          </p>
        </div>

        <div className="rounded-2xl border border-brand-dark-border/50 bg-brand-card-bg px-6 sm:px-8">
          {FAQ_ITEMS.map((item, i) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
