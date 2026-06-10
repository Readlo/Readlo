import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is Readlo?",
    a: "Readlo is a peer-to-peer book lending platform. Readers lend books they've finished and borrowers gain affordable access without purchasing every title.",
  },
  {
    q: "When are you launching?",
    a: "We are currently validating demand and building the community before launching the platform.",
  },
  {
    q: "Is lending safe?",
    a: "We are exploring identity verification, deposits, and trust systems to protect lenders.",
  },
  {
    q: "How much will borrowing cost?",
    a: "Borrowing will cost significantly less than purchasing a new copy. Exact pricing will be finalized after community feedback and testing.",
  },
  {
    q: "Which cities do you plan to launch in first?",
    a: "Jammu first. Expansion to other cities will be prioritized based on the response from the community.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">FAQ</span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
            Questions, answered honestly.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
            Have something else on your mind? Tell us through the waitlist form, or reach out through the contact info on our About page.
          </p>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}