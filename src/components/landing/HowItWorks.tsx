import { Search, Send, BookOpenCheck, RotateCcw, type LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";

interface Step {
  num: string;
  icon: LucideIcon;
  title: string;
  body: string;
}

const steps: Step[] = [
  { num: "01", icon: Search, title: "Discover", body: "Browse books available from readers near you." },
  { num: "02", icon: Send, title: "Request", body: "Send a borrow request." },
  { num: "03", icon: BookOpenCheck, title: "Read", body: "Enjoy the book at your own pace." },
  {
    num: "04",
    icon: RotateCcw,
    title: "Return",
    body: "Return the book and help build trust in the community.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-foreground py-20 text-background">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl">
            Simple. Local. Affordable.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-2">
          {/* vertical line */}
          <span
            aria-hidden
            className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-background/15 sm:left-[1.65rem]"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.num} delay={i * 90} className="relative flex gap-5 pb-8 sm:gap-7">
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-[3.4rem] sm:w-[3.4rem]">
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <div className="pt-1">
                <span className="text-xs font-bold tracking-[0.2em] text-primary">
                  STEP {step.num}
                </span>
                <h3 className="mt-1 text-xl font-bold sm:text-2xl">{step.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-background/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-6 rounded-2xl bg-background/5 p-6 text-center ring-1 ring-background/10">
          <p className="text-lg font-semibold">
            Starting with Jammu. <span className="text-primary">Expanding city by city.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}