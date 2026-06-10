import { createFileRoute, Link } from "@tanstack/react-router";
import { User, Mail, MapPin } from "lucide-react";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Readlo — Our Story & Contact" },
      {
        name: "description",
        content:
          "Readlo is a community of readers helping each other read more and spend less. Learn our story and get in touch with the team building India's peer-to-peer book lending network.",
      },
      { property: "og:title", content: "About Readlo — Our Story & Contact" },
      {
        property: "og:description",
        content:
          "Why we started Readlo and how to reach us. A small team building the infrastructure for readers to help each other.",
      },
    ],
  }),
  component: AboutPage,
});

const contactRows = [
  { icon: User, label: "Founder", value: "Rian Sharma" },
  { icon: Mail, label: "Email", value: "readlo.social@gmail.com" },
  { icon: MapPin, label: "Based in", value: "Jammu Kashmir, India" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* About */}
        <section className="pt-32 pb-16 sm:pt-36">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Our Story
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                We started Readlo because books deserve more than a dusty shelf.
              </h1>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Most of us have a stack of books we loved reading once and haven't touched since.
                  Not because we stopped caring about them — just because that's how it goes. You read
                  it, you shelve it, you move on.
                </p>
                <p>
                  Readlo is our attempt to fix that quiet waste. A place where finished books find new
                  readers, and where the cost of curiosity doesn't have to be a barrier. We're not a
                  library. We're not a store. We're the infrastructure for readers to help each other.
                </p>
                <p>
                  We're starting small — one city, a handful of readers, zero funding. Just an idea we
                  believe in and a community we're trying to build. If that sounds like something you'd
                  want to be part of, you're exactly who this is for.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Get in Touch
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
                We'd love to hear from you.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We're a small team. We read every message.
              </p>

              <div className="mt-8 rounded-2xl bg-secondary p-5 sm:p-7">
                <ul className="divide-y divide-border">
                  {contactRows.map((row) => (
                    <li
                      key={row.label}
                      className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-light-accent text-primary">
                        <row.icon className="h-5 w-5" />
                      </span>
                      <div className="flex w-full flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-sm font-medium text-muted-foreground">
                          {row.label}
                        </span>
                        <span className="text-base font-bold text-foreground">{row.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-5 text-center text-sm text-muted-foreground">
                Response time is usually within 24–48 hours.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
