import { useInView } from '../hooks'
import { EXPERIENCE } from '../data'
import LiveFeed from './LiveFeed'

export default function Experience() {
  const [ref, vis] = useInView()

  return (
    <section id="experience" className="px-6 md:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div ref={ref} className={`fade-in ${vis ? 'show' : ''}`}>
            <div className="flex items-center gap-3 font-mono text-[10px] text-lime uppercase tracking-[3px] mb-3">
              <span className="w-6 h-px bg-lime/60" />Experience
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,50px)] leading-[1.05] tracking-[-1px] mb-10">
              Where I've <em className="italic text-lime">worked.</em>
            </h2>
          </div>

          <div>
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`exp-row ${vis ? 'show' : ''} grid grid-cols-[130px_1fr] gap-8 py-8 border-b border-white/[0.05] first:border-t`}
              >
                <div>
                  <div className="font-mono text-[11px] text-lime tracking-wide pt-0.5">{e.yr}</div>
                  <div className="text-[12px] text-gray-500 mt-1.5">{e.co}</div>
                </div>
                <div>
                  <div className="font-serif text-[22px] tracking-[-0.3px] mb-2 text-white">{e.role}</div>
                  <div className="text-[13px] text-gray-400 leading-relaxed mb-3 font-light">{e.desc}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map(t => (
                      <span key={t} className="font-mono text-[9px] px-2.5 py-0.5 border border-white/[0.07] text-gray-500 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LiveFeed />
      </div>
    </section>
  )
}
