import { Quote } from "lucide-react";

const logos = ["Stripe", "Notion", "Linear", "Vercel", "Figma", "Shopify"];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-secondary/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by category-leading teams
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-bold text-muted-foreground/60 grayscale transition-all hover:text-white hover:grayscale-0"
            >
              {logo}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-10">
          <Quote className="h-8 w-8 text-primary" />
          <blockquote className="mt-4 text-lg font-medium text-white md:text-xl">
            “GPT Ads Media helped us become the first brand in our category to
            advertise inside AI conversations. The leads are warmer, the CAC is
            lower, and the creative actually feels native.”
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
            <div>
              <p className="text-sm font-semibold text-white">Alex Chen</p>
              <p className="text-xs text-muted-foreground">Head of Growth, Notion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
