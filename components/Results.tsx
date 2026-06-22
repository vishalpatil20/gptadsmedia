export function Results() {
  const stats = [
    { value: "340%", label: "Average ROAS lift" },
    { value: "500+", label: "AI campaigns launched" },
    { value: "98%", label: "Client retention" },
  ];

  return (
    <section id="results" className="border-y border-border bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Results
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
          Performance that compounds
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <p className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
