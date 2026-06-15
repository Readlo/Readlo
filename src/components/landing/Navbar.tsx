import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/lib/scroll";


const navLinks = [
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQ", id: "faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    if (router.state.location.pathname !== "/") {
      router.navigate({ to: "/", hash: id });
    } else {
      scrollToId(id);
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => go("top")}
          className="flex items-center gap-2.5"
          aria-label="Readlo home"
        >
          <img
            src="/booki.png"
            alt="Readlo logo"
            className="h-10 w-auto"
          />
          <span className="text-lg font-extrabold tracking-tight text-foreground">Readlo</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="hero"
            size="pill"
            className="hidden md:inline-flex"
            onClick={() => go("waitlist")}
          >
            Join Waitlist
          </Button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </button>
            ))}
            <Button variant="hero" size="pill" className="mt-2 w-full" onClick={() => go("waitlist")}>
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
