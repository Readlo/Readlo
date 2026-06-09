import { ArrowRight, MapPin, BookHeart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/scroll";
import { BookStack } from "./BookStack";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-24">
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-light-accent blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[3fr_2fr]">
        <div className="animate-[fade-up_0.7s_ease-out_both]">
          <span className="inline-flex items-center gap-2 rounded-full bg-light-accent px-4 py-1.5 text-sm font-semibold text-primary">
            <MapPin className="h-4 w-4" />
            Launching in Jammu First
          </span>

          <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4rem]">
            Read more.
            <br />
            <span className="text-primary">Spend less.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Borrow books from readers near you. Lend the books you've already finished.
            India's first peer-to-peer book lending community.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="pillLg" onClick={() => scrollToId("waitlist")}>
              Join the Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="pillLg" onClick={() => scrollToId("waitlist")}>
              <BookHeart className="h-4 w-4" />
              I Want to Lend Books
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Join the founding community of readers in Jammu.
          </p>
        </div>

        <div className="animate-[fade-up_0.9s_ease-out_both]">
          <BookStack className="mx-auto w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}