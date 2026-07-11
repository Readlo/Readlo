import { createFileRoute } from "@tanstack/react-router";
import { User, Mail, MapPin } from "lucide-react";

import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ReadLo — Our Story & Contact" },
      {
        name: "description",
        content:
          "ReadLo is a community of readers helping each other read more and spend less. Learn our story and get in touch with the team building India's peer-to-peer book lending network.",
      },
      { property: "og:title", content: "About ReadLo — Our Story & Contact" },
      {
        property: "og:description",
        content:
          "Why we started ReadLo and how to reach us. A small team building the infrastructure for readers to help each other.",
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
                We started ReadLo because books deserve more than a dusty shelf.
              </h1>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  There is a very specific feeling you get after finishing a book you loved. You close
                  it, set it down, and it just sits there. On the shelf, on the nightstand, on the
                  floor next to your bed. Weeks pass. Then months. The book does not move. You do not
                  reread it. It just exists.
                </p>
                <p>
                  Meanwhile, somewhere across the city, someone wants to read that exact book but
                  cannot justify spending full price on something they will finish in a week. So they
                  skip it. And your copy keeps collecting dust. That felt like a problem worth solving.
                </p>
                <p>
                  ReadLo is one person, one city, and one straightforward idea: books should move
                  between readers, not sit on shelves. If this resonates with you, you are exactly the
                  kind of person we are building this for.
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
                ReadLo is an early-stage project. Every message goes directly to the founder.
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
