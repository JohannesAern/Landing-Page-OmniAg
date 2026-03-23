import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import FeaturesSection from "./FeaturesSection";
import ExtraToolsSection from "./ExtraToolsSection";
import IntegrationSection from "./IntegrationSection";
import StatisticsSection from "./StatisticsSection";
import CtaSection from "./CtaSection";
import FaqSection from "./FaqSection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

export default function FinanceLandingPage() {
  return (
    <div className="min-h-screen bg-brand-page-bg text-brand-near-white">
      <Navbar />
      <main>
        <HeroSection />
        <StatisticsSection />
        <BenefitsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <IntegrationSection />
        <ExtraToolsSection />
        <BlogSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
