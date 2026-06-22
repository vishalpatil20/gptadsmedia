'use client'

const testimonials = [
  {
    quote: "GPT Ads Media completely transformed our acquisition strategy. Our cost per lead dropped 60% in the first month, and the quality of leads improved dramatically.",
    name: 'Tatiana Morozova',
    role: 'Director of Marketing at TechFlow',
    initials: 'TM',
  },
  {
    quote: "The ChatGPT Ad Library alone is worth the partnership. We use it weekly to benchmark our creatives against the best-performing ads in our space.",
    name: 'Marcus Reid',
    role: 'Head of Growth at NexGen',
    initials: 'MR',
  },
  {
    quote: "Finally, an agency that genuinely understands AI-native advertising. Their team moved fast, communicated clearly, and delivered real results within weeks.",
    name: 'Elena Lopez',
    role: 'VP Marketing at Orbitly',
    initials: 'EL',
  },
  {
    quote: "They didn't just run ads — they helped us rethink our entire approach to AI conversational marketing. Our campaigns now feel native to the platform.",
    name: 'Will Chen',
    role: 'CMO at Stellar',
    initials: 'WC',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-50" id="testimonials">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Client Results</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by growth teams</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div key={t.initials} className="flex flex-col gap-6">
              <blockquote>
                <p className="text-lg leading-relaxed text-stone-800 mb-4">"{t.quote}"</p>
                <footer className="text-sm font-semibold text-stone-900">
                  {t.name.toUpperCase()} <span className="font-normal text-stone-400">— {t.role}</span>
                </footer>
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm font-bold text-stone-500">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
