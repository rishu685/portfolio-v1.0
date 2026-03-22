import { useState } from 'react'
import { useInView } from '../hooks'
import { FAQS } from '../data'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [ref, vis] = useInView()

  return (
    <section id="faq" className="px-6 md:px-16 py-24 bg-s1">
      <div ref={ref} className={`fade-in ${vis ? 'show' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-[10px] text-lime uppercase tracking-[3px] mb-3">
          <span className="w-6 h-px bg-lime/60" />FAQ
        </div>
        <h2 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-1.5px] mb-4">
          Questions I hear <em className="italic text-lime">every week.</em>
        </h2>
        <p className="text-[16px] text-gray-400 leading-relaxed max-w-xl mb-14 font-light">
          Straight answers. No jargon.
        </p>
      </div>

      <div className="max-w-2xl">
        {FAQS.map((f, i) => (
          <div key={i} className="border-b border-white/[0.06] first:border-t">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-5 py-5 text-left group"
            >
              <span className={`text-[15px] font-medium transition-colors duration-200 ${open === i ? 'text-lime' : 'text-white group-hover:text-lime'}`}>
                {f.q}
              </span>
              <span className={`font-mono text-[20px] text-lime flex-shrink-0 transition-transform duration-300 leading-none ${open === i ? 'rotate-45' : 'rotate-0'}`}>
                +
              </span>
            </button>
            <div className={`faq-body ${open === i ? 'open' : ''}`}>
              <p className="text-[14px] text-gray-400 leading-relaxed font-light pb-1">{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
