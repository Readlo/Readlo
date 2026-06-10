import { Wallet, Library, UserX, Unplug, type LucideIcon } from "lucide-react";

import { Reveal } from "./Reveal";

interface Problem {
  icon: LucideIcon;
  title: string;
  body: string;
}

const problems: Problem[] = [
  {
    icon: Wallet,
    title: "Costs Add Up Fast",
    body: "Books often cost hundreds of rupees and many are finished within days.",
  },
  {
    icon: Library,
    title: "Shelves Fill Up Quickly",
    body: "Thousands of books sit untouched after a single read.",
  },
  {
    icon: UserX,
    title: "Budget Readers Miss Out",
    body: "People skip books they want because purchasing new titles every time becomes expensive.",
  },
  {
    icon: Unplug,
    title: "No Sharing Infrastructure",
    body: "There is no easy, trusted way to share books with nearby readers.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
            Buying a new book every time gets expensive. Then it just collects dust.
          </h2>
        </Reveal>

        <div>
          {problems.map((problem, i) => (
            <Reveal
              key={problem.title}
              delay={i * 80}
              className="flex gap-5 border-b border-border py-7 first:pt-0 last:border-b-0 last:pb-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-light-accent text-primary">
                <problem.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">{problem.title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                  {problem.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}