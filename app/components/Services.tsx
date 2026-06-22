'use client'

const services = [
  {
    title: 'Done-For-You Agency',
    description: 'Full-service campaign strategy, creative production, media buying, and optimization for ChatGPT advertising.',
    cta: 'Work with us →',
    href: '#contact',
  },
  {
    title: 'ChatGPT Ad Library',
    description: 'Searchable database of real ChatGPT ads. Spy on competitors, get inspired, and build better campaigns.',
    cta: 'Browse the library →',
    onClick: true,
  },
  {
    title: 'Advisory & Training',
    description: 'Fractional support and team training to help your marketing org master AI-native advertising.',
    cta: 'Learn more →',
    href: '#contact',
  },
]

export default function Services({ onOpenTool }: { onOpenTool: () => void }) {
  return (
    <section className="py-24" id="services">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            We help B2B brands grow inside the world's most engaged AI conversations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 border border-stone-200 rounded-xl hover:border-stone-300 hover:shadow-sm transition-all bg-white"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-5">{service.description}</p>
              {service.onClick ? (
                <button
                  onClick={onOpenTool}
                  className="text-sm font-semibold text-blue-700 group-hover:gap-2 inline-flex items-center gap-1 transition-all"
                >
                  {service.cta}
                </button>
              ) : (
                <a
                  href={service.href}
                  className="text-sm font-semibold text-blue-700 group-hover:gap-2 inline-flex items-center gap-1 transition-all"
                >
                  {service.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
