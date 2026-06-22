'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Campaigns Launched' },
  { value: 340, suffix: '%', label: 'Average ROAS Boost' },
  { value: 98, suffix: '%', label: 'Client Retention' },
]

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || started.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now: number) => {
            const p = Math.min((now - start) / 1800, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setCount(Math.floor(ease * value))
            if (p < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-20 bg-stone-50 border-y border-stone-200" id="stats">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-extrabold tracking-tight text-stone-900">
                <AnimatedNumber value={stat.value} />
                <span className="text-3xl text-stone-400">{stat.suffix}</span>
              </div>
              <p className="text-stone-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
