import { BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/scroll";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:[&>*:last-child]:justify-self-end">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-foreground">Readlo</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building India's reader-powered book network.
            </p>
            <Button
              variant="hero"
              size="pill"
              className="mt-5"
              onClick={() => scrollToId("waitlist")}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Readlo
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <button
                  onClick={() => scrollToId("how-it-works")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("faq")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("waitlist")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Join Waitlist
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Readlo. Made with love for readers.</p>
          <p>Built in India · Launching in Jammu</p>
        </div>
      </div>
    </footer>
  );
}