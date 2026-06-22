import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, LineChart, Megaphone, PenTool, Target, Workflow } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "AI Strategy",
    description:
      "We identify where your buyers show up inside AI conversations and build a campaign plan around it.",
  },
  {
    icon: PenTool,
    title: "Automated Content",
    description:
      "Native ad creative built for chat interfaces — concise, contextual, and conversion-focused.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description:
      "Real-time dashboards that track what matters: reach, engagement, leads, and revenue.",
  },
  {
    icon: Megaphone,
    title: "Media Buying",
    description:
      "Placement, bidding, and budget allocation optimized for AI-native ad inventory.",
  },
  {
    icon: Bot,
    title: "ChatGPT Integrations",
    description:
      "Technical setup and brand-safe prompts that put your message inside the right conversations.",
  },
  {
    icon: Workflow,
    title: "Continuous Optimization",
    description:
      "We run experiments weekly — creative, audience, and offer tests that compound over time.",
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          What We Do
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Modular AI services built for high-growth brands
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
