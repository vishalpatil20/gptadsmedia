import { CheckCircle, Lightbulb, Rocket, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We audit your current funnel, identify AI conversation opportunities, and define your ideal buyer intent.",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We design a campaign architecture: messaging, creative formats, targeting, and KPIs aligned to revenue.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "We build and deploy your campaigns across AI ad surfaces, with tracking and brand safety in place.",
  },
  {
    icon: CheckCircle,
    title: "Scale",
    description:
      "We optimize creative, bids, and audiences weekly — doubling down on what drives real pipeline.",
  },
];

export function HowItWorks() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          How It Works
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          A simple, repeatable system for AI advertising
        </h2>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line for desktop */}
          <div className="absolute top-12 left-0 hidden h-px w-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 lg:block" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
