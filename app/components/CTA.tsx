'use client'

export default function CTA() {
  return (
    <section className="py-24 text-center" id="contact">
      <div className="w-[90%] max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Ready to up-level your ChatGPT advertising?
        </h2>
        <p className="text-stone-500 text-lg mb-8">
          Book a free strategy call. We'll show you exactly how to reach your audience inside AI conversations.
        </p>
        <a
          href="mailto:hello@gptadsmedia.com"
          className="inline-flex items-center px-8 py-4 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 transition-colors"
        >
          Contact Us →
        </a>
      </div>
    </section>
  )
}
