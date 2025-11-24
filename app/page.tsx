import Navigation from "@/components/Navigation";
import HeroRedesign from "@/components/HeroRedesign";
import StatsShowcase from "@/components/StatsShowcase";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import FeaturesRedesign from "@/components/FeaturesRedesign";
import TestimonialsRedesign from "@/components/TestimonialsRedesign";
import UseCases from "@/components/UseCases";
import PricingRedesign from "@/components/PricingRedesign";
import FAQMagiq from "@/components/FAQMagiq";
import Footer from "@/components/Footer";
import { magiqContent } from "@/data/content-magiq";

export default function Home() {
  // Stats data for the showcase section
  const stats = [
    {
      value: "700%",
      label: "Higher Conversion",
      description: "Close more deals with AI-powered intelligence",
      color: "blue" as const
    },
    {
      value: "42x",
      label: "Faster Building",
      description: "From 4-6 weeks research to 48 hours",
      color: "purple" as const
    },
    {
      value: "300%",
      label: "Better Lead Quality",
      description: "Focus only on high-probability prospects",
      color: "green" as const
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation {...magiqContent.navigation} />
      <HeroRedesign {...magiqContent.hero} />
      {/* <StatsShowcase 
        headline="Results in All Business-Critical Areas"
        subheadline="We analyzed over 100,000 funnels on our platform to create the highest-converting templates"
        stats={stats}
      /> */}
      <Problem {...magiqContent.problem} />
      <Solution {...magiqContent.solution} />
      <section id="how-it-works">
        <HowItWorks {...magiqContent.howItWorks} />
      </section>
      <section id="features">
        <FeaturesRedesign {...magiqContent.features} />
      </section>
      {/* <TestimonialsRedesign {...magiqContent.testimonials} /> */}
      <section id="use-cases">
        <UseCases {...magiqContent.useCases} />
      </section>
      <section id="pricing">
        <PricingRedesign {...magiqContent.pricing} />
      </section>
      <FAQMagiq {...magiqContent.faq} />
      <Footer 
        tagline="Empowering sales teams with AI-powered intelligence"
        sections={[
          {
            title: "Product",
            links: [
              { label: "How It Works", href: "#how-it-works" },
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Use Cases", href: "#use-cases" }
            ]
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" }
            ]
          }
        ]}
      />
    </main>
  );
}
