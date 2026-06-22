import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-gradient-to-br from-secondary to-card p-10 text-center md:p-16">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to advertise inside AI?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
          Book a free AI audit. We'll show you exactly where your brand can show
          up — and how to turn those impressions into revenue.
        </p>
        <a
          href="mailto:hello@gptadsmedia.com"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_30px_rgba(0,255,148,0.25)] transition-colors hover:bg-primary/90"
        >
          Start Your Campaign
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
