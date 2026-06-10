import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-foreground";

function RadioGroup({
  name,
  options,
  required,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <label
          key={opt}
          className="group relative flex cursor-pointer items-center"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            required={required}
            checked={value !== undefined ? value === opt : undefined}
            onChange={onChange ? () => onChange(opt) : undefined}
            className="peer sr-only"
          />
          <span className="rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all peer-checked:border-primary peer-checked:bg-light-accent peer-checked:text-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30 hover:border-primary/40">
            {opt}
          </span>
        </label>
      ))}
    </div>
  );
}

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Pre-launch MVP: no backend. Capture intent locally and show success.
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: window.scrollY, behavior: "smooth" });
    }
  };

  return (
    <section id="waitlist" className="py-20">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-light-accent text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
                You're on the list.
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                Thank you for believing in Readlo. We'll reach out as soon as we launch in your city.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Get Early Access
                </h2>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  We're building Readlo for readers like you. Join the waitlist and help shape what
                  we build.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="e.g. Jammu"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className={labelClass}>Interested In</legend>
                  <RadioGroup
                    name="interest"
                    options={["Borrowing", "Lending", "Both"]}
                    required
                    value={interest}
                    onChange={setInterest}
                  />
                </fieldset>

                {(interest === "Borrowing" || interest === "Both") && (
                  <div>
                    <label htmlFor="bookToBorrow" className={labelClass}>
                      What book would you most like to borrow?
                    </label>
                    <input
                      id="bookToBorrow"
                      name="book_to_borrow"
                      type="text"
                      placeholder="e.g. Atomic Habits, The Alchemist..."
                      className={fieldClass}
                    />
                  </div>
                )}

                {(interest === "Lending" || interest === "Both") && (
                  <div>
                    <label htmlFor="bookToLend" className={labelClass}>
                      What book would you most like to lend?
                    </label>
                    <input
                      id="bookToLend"
                      name="book_to_lend"
                      type="text"
                      placeholder="e.g. The book sitting on your shelf right now..."
                      className={fieldClass}
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="comments" className={labelClass}>
                    Additional Comments
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    placeholder="Anything you'd like us to know"
                    className={cn(fieldClass, "resize-none")}
                  />
                </div>

                <Button type="submit" variant="hero" size="pillLg" className="w-full">
                  Join Early Access
                  <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  No spam. We'll only contact you regarding Readlo.
                </p>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}