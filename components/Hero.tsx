import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-24 pb-32 md:pt-32 md:pb-40">
      {/* Animated grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium text-muted-foreground">
            The first agency for ChatGPT advertising
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
          AI-native ad campaigns{" "}
          <span className="text-glow text-primary">that convert</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We build, launch, and scale ad campaigns inside ChatGPT and AI
          conversations — so your brand shows up where attention is moving.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,255,148,0.25)] transition-colors hover:bg-primary/90"
          >
            Get Your AI Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="https://www.chatgptadlibrary.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-base font-semibold text-white transition-colors hover:bg-white/5"
          >
            Explore Ad Library
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Trusted by teams at Stripe, Notion, Linear, Vercel, Figma
        </p>
      </div>
    </section>
  );
}
