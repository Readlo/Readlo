import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Readlo — Borrow & Lend Books With Readers Near You" },
      {
        name: "description",
        content:
          "Readlo is India's first peer-to-peer book lending community. Borrow books from readers near you, lend the ones you've finished, and join the waitlist — launching in Jammu first.",
      },
      { property: "og:title", content: "Readlo — Read more. Spend less." },
      {
        property: "og:description",
        content:
          "Borrow books from readers near you and lend the ones you've finished. Join the founding community of readers in Jammu.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <WaitlistSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
