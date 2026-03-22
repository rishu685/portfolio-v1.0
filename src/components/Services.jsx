import { useState } from 'react'
import { useInView } from '../hooks'
import { SERVICES } from '../data'

export default function Services() {
  const [ref, vis] = useInView()
  const [hov, setHov] = useState(null)

  return (
    <section id="services" className="px-6 md:px-16 py-24">
      <div ref={ref} className={`fade-in ${vis ? 'show' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-[10px] text-lime uppercase tracking-[3px] mb-3">
          <span className="w-6 h-px bg-lime/60" />What I Build
        </div>
        <h2 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-1.5px] mb-4">
          Four <em className="italic text-lime">capabilities.</em><br />One engineer.
        </h2>
        <p className="text-[16px] text-gray-400 leading-relaxed max-w-xl mb-14 font-light">
          Production-ready systems, not slide decks. Every service comes with clean code, documentation, and real metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.06]">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            className={`svc-card relative p-10 transition-colors duration-300
              ${i < 2 ? 'border-b border-white/[0.06]' : ''}
              ${i % 2 === 0 ? 'md:border-r border-white/[0.06]' : ''}
              ${hov === i ? 'bg-s2' : 'bg-bg'}`}
          >
            <div className="svc-left-bar absolute left-0 top-0 w-0.5 bg-lime" />
            <div className="font-mono text-[10px] text-lime/60 tracking-[2px] mb-5">
              {s.num}{s.tag && <span className="ml-2 text-lime/80">· {s.tag}</span>}
            </div>
            <h3 className="font-serif text-[26px] tracking-[-0.5px] mb-3 text-white">{s.title}</h3>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-6 font-light">{s.desc}</p>
            <div className="font-mono text-[22px] text-lime mb-1 font-medium">{s.price}</div>
            <div className="font-mono text-[10px] text-gray-600 tracking-wide mb-5">{s.note}</div>
            <div>
              {s.feats.map((f, j) => (
                <div key={j} className="flex items-center gap-2.5 text-[13px] text-gray-400 py-2 border-b border-white/[0.05] last:border-0">
                  <span className="w-1 h-1 rounded-full bg-lime/50 flex-shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
