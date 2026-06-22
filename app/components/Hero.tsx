'use client'

export default function Hero({ onOpenTool }: { onOpenTool: () => void }) {
  const logos = ['Stripe', 'Notion', 'Linear', 'Vercel', 'Figma', 'Supabase']

  return (
    <header className="min-h-screen pt-36 pb-20 flex flex-col justify-center" id="hero">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-500 mb-6">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            AI-Powered Advertising Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            We're the first agency built for ChatGPT ads,{' '}
            <em className="not-italic text-stone-500">
              turning AI conversations into high-performing campaigns that convert.
            </em>
          </h1>

          <p className="text-lg text-stone-500 leading-relaxed max-w-2xl mb-8">
            Strategy, creative, media buying, and optimization — built specifically for the AI era. No fluff, just performance.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-all"
            >
              Start Your Campaign →
            </a>
            <button
              onClick={onOpenTool}
              className="inline-flex items-center px-7 py-3.5 border border-stone-200 text-stone-900 font-semibold rounded-lg hover:border-stone-400 transition-all"
            >
              Explore the Ad Library
            </button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-stone-200">
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-5">Trusted by teams at</p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-stone-300 tracking-tight">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
