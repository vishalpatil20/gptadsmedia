'use client'

export default function Tool({ onOpenTool }: { onOpenTool: () => void }) {
  const brands = ['HubSpot', 'Notion', 'Stripe', 'Vercel', 'Linear', 'Figma', 'Supabase', 'OpenAI']

  return (
    <section className="py-24 bg-stone-50" id="tool">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">Our Tool</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            See what your competitors are running on ChatGPT
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl">
            The ChatGPT Ad Library is the first searchable database of real ads appearing inside AI conversations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {brands.map((brand) => (
            <div
              key={brand}
              className="aspect-[4/3] bg-white border border-stone-200 rounded-xl flex items-center justify-center text-lg font-bold text-stone-300 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              {brand}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenTool}
            className="inline-flex items-center px-7 py-3.5 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
          >
            Open the Ad Library →
          </button>
        </div>
      </div>
    </section>
  )
}
