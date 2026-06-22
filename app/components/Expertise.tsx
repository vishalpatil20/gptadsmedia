'use client'

const expertise = [
  'Campaign Strategy & Positioning',
  'Conversational Ad Creative',
  'Media Buying & Bid Optimization',
  'Audience Targeting & Segmentation',
  'A/B Testing & Experimentation',
  'Real-Time Analytics & Reporting',
  'Competitive Ad Intelligence',
  'Go-To-Market Campaign Launches',
]

export default function Expertise() {
  return (
    <section className="py-24" id="process">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              We're experts in ChatGPT advertising, creative, and performance
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {expertise.map((item) => (
              <li key={item} className="pl-6 relative text-stone-600">
                <span className="absolute left-0 text-blue-700 font-bold">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
