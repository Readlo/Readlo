import { BookDown, BadgeIndianRupee, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface Feature {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: BookDown,
    eyebrow: "FOR BORROWERS",
    title: "Borrow Books",
    body: "Access books without paying full retail prices. Discover more titles while keeping reading affordable.",
  },
  {
    icon: BadgeIndianRupee,
    eyebrow: "FOR LENDERS",
    title: "Lend & Earn",
    body: "List books you've already read. Earn back part of what you spent whenever someone borrows them.",
  },
];

export function SolutionSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            The Solution
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
            Give books a second life and get a chance to earn from the first.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12">
        {features.map((feature, i) => {
          const tinted = i % 2 === 1;
          return (
            <div key={feature.title} className={cn(tinted && "bg-light-accent")}>
              <Reveal
                className={cn(
                  "mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:gap-16 lg:py-16",
                  tinted && "lg:flex-row-reverse",
                )}
              >
                <div className="flex w-full shrink-0 justify-center lg:w-2/5">
                  <FeatureGlyph icon={feature.icon} index={String(i + 1).padStart(2, "0")} />
                </div>
                <div className="w-full lg:w-3/5">
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    {feature.eyebrow}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeatureGlyph({ icon: Icon, index }: { icon: LucideIcon; index: string }) {
  return (
    <div className="relative">
      <div className="absolute -left-4 -top-4 h-20 w-20 rounded-3xl bg-primary/10" />
      <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-2xl border-2 border-primary/30" />
      <div className="relative flex h-40 w-40 items-center justify-center rounded-[2rem] bg-card shadow-[var(--shadow-card)]">
        <Icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
        <span className="absolute right-4 top-3 text-3xl font-extrabold text-foreground/10">
          {index}
        </span>
      </div>
    </div>
  );
}