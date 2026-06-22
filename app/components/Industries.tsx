'use client'

const industries = [
  {
    title: 'SaaS & Developer Tools',
    examples: ['HubSpot', 'Vercel', 'Linear', 'Supabase'],
  },
  {
    title: 'FinTech & Insurance',
    examples: ['Stripe', 'Mercury', 'Brex', 'Carta'],
  },
  {
    title: 'AI & Machine Learning',
    examples: ['OpenAI', 'Anthropic', 'Jasper', 'Copy.ai'],
  },
  {
    title: 'Health Tech & Benefits',
    examples: ['Elation', 'Gusto', 'Levels', 'Hims'],
  },
]

export default function Industries() {
  return (
    <section className="py-24" id="industries">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Industries</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">We have deep experience in B2B tech</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {industries.map((industry) => (
            <div key={industry.title}>
              <h4 className="text-base font-bold mb-3">{industry.title}</h4>
              <div className="flex flex-wrap gap-2">
                {industry.examples.map((example) => (
                  <span
                    key={example}
                    className="text-xs text-stone-500 bg-white border border-stone-200 px-3 py-1 rounded-full"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
