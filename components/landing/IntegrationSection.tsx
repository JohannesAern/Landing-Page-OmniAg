import { cn } from "@/lib/utils";

interface Integration {
  name: string;
  category: string;
  icon: React.ReactNode;
}

function StripeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
    </svg>
  );
}

function PlaidIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M8.1 6.8L4 10.9v6.2l4.1 4.1h6.2l4.1-4.1v-6.2L14.3 6.8H8.1zM12 14.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 9.5 12 9.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
    </svg>
  );
}

function XeroIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518l-4.5-4.502 1.413-1.413 3.087 3.089 3.085-3.09 1.414 1.414-4.499 4.502zm4.5-7.518l-3.085 3.09-3.087-3.09L7.665 7.586l4.5 4.501 4.5-4.501-1.415 1.414z" />
    </svg>
  );
}

function QuickBooksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4.8c1.5 0 2.8.5 3.8 1.4l-1.2 1.2c-.7-.6-1.6-1-2.6-1-2.2 0-4 1.8-4 4s1.8 4 4 4c1 0 1.9-.4 2.6-1l1.2 1.2C14.8 15.5 13.5 16 12 16c-3.3 0-6-2.7-6-6s2.7-6 6-6zm2.8 4.2H16v6h-1.2v-2.4H12V16h-1.2v-6h1.2v2.4h2.8V9z" />
    </svg>
  );
}

function CoinbaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm0 4.8C8.03 4.8 4.8 8.03 4.8 12S8.03 19.2 12 19.2 19.2 15.97 19.2 12 15.97 4.8 12 4.8zm2.8 4.4c.44 0 .8.36.8.8v4c0 .44-.36.8-.8.8h-5.6c-.44 0-.8-.36-.8-.8V10c0-.44.36-.8.8-.8h5.6z" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

const INTEGRATIONS: Integration[] = [
  { name: "Stripe", category: "Payments", icon: <StripeIcon /> },
  { name: "Plaid", category: "Banking", icon: <PlaidIcon /> },
  { name: "Xero", category: "Accounting", icon: <XeroIcon /> },
  { name: "QuickBooks", category: "Accounting", icon: <QuickBooksIcon /> },
  { name: "Coinbase", category: "Crypto", icon: <CoinbaseIcon /> },
  { name: "Slack", category: "Notifications", icon: <SlackIcon /> },
] as const;

function IntegrationPill({ integration }: { integration: Integration }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl",
        "border border-brand-dark-border/50 bg-brand-card-bg",
        "hover:border-brand-accent/30 hover:bg-brand-dark-card transition-all duration-200"
      )}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-dark-pill text-brand-accent shrink-0">
        {integration.icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-brand-near-white font-poppins leading-tight">
          {integration.name}
        </p>
        <p className="text-xs text-brand-body-alt font-manrope">
          {integration.category}
        </p>
      </div>
    </div>
  );
}

export default function IntegrationSection() {
  return (
    <section className="py-24 px-4" id="integrations">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-dark-pill border border-brand-dark-border/60 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-brand-muted-blue font-manrope uppercase tracking-widest">
                Integrations
              </span>
            </div>
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-brand-near-white mb-4 leading-tight">
              Connects with the tools you already use
            </h2>
            <p className="text-brand-gray-body font-manrope leading-relaxed mb-8">
              OmniAg integrates seamlessly with over 200 financial tools,
              accounting software, payment processors, and notification systems
              — so nothing falls through the cracks.
            </p>
            <button className="text-sm font-medium text-brand-accent hover:text-white border border-brand-accent/30 hover:border-brand-accent px-6 py-2.5 rounded-xl transition-all duration-200">
              View all integrations
            </button>
          </div>

          {/* Integrations grid */}
          <div className="grid grid-cols-2 gap-3">
            {INTEGRATIONS.map((integration) => (
              <IntegrationPill key={integration.name} integration={integration} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
