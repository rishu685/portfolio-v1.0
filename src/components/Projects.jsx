import { useState } from 'react'
import { useInView } from '../hooks'
import { PROJECTS } from '../data'

const CAT_TEXT  = { research: 'text-violet-400', industry: 'text-amber-400', github: 'text-emerald-400' }
const CAT_DOT   = { research: 'bg-violet-400',   industry: 'bg-amber-400',   github: 'bg-emerald-400' }

function ProjectCard({ p, delay }) {
  const [ref, vis] = useInView()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in ${vis ? 'show' : ''} bg-s1 border border-white/[0.06] rounded-lg p-7 flex flex-col hover:border-lime/20 hover:-translate-y-1 transition-all duration-300 hover:bg-s2`}
    >
      <div className={`flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[2px] mb-3 ${CAT_TEXT[p.cat]}`}>
        <span className={`w-1 h-1 rounded-full ${CAT_DOT[p.cat]}`} />{p.label}
      </div>
      <h3 className="font-serif text-[22px] tracking-[-0.3px] mb-2.5 text-white leading-tight">{p.title}</h3>
      <p className="text-[13px] text-gray-400 leading-relaxed flex-1 mb-5 font-light">{p.desc}</p>

      <div className="grid grid-cols-3 gap-2 py-3.5 border-t border-b border-white/[0.06] mb-4">
        {p.metrics.map(m => (
          <div key={m.l}>
            <div className="font-serif text-[19px] text-lime leading-none tracking-[-0.5px]">{m.v}</div>
            <div className="font-mono text-[9px] text-gray-600 mt-0.5 tracking-wide">{m.l}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {p.stack.map(s => (
          <span key={s} className="font-mono text-[9px] px-2 py-0.5 border border-white/[0.07] text-gray-500 rounded">{s}</span>
        ))}
      </div>

      <a href={p.link} target="_blank" rel="noopener"
        className="font-mono text-[10px] text-lime/70 hover:text-lime transition-colors mt-auto tracking-wide">
        {p.nda ? '🔒 NDA Protected' : `→ ${p.cat === 'github' ? 'View on GitHub' : 'View Project'}`}
      </a>
    </div>
  )
}

const TABS = ['all','research','industry','github']

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [ref, vis] = useInView()
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter)

  return (
    <section id="projects" className="px-6 md:px-16 py-24 bg-s1">
      <div ref={ref} className={`fade-in ${vis ? 'show' : ''}`}>
        <div className="flex items-center gap-3 font-mono text-[10px] text-lime uppercase tracking-[3px] mb-3">
          <span className="w-6 h-px bg-lime/60" />My Work
        </div>
        <h2 className="font-serif text-[clamp(36px,5vw,58px)] leading-[1.05] tracking-[-1.5px] mb-4">
          Built by me.<br /><em className="italic text-lime">Measured in results.</em>
        </h2>
        <p className="text-[16px] text-gray-400 leading-relaxed max-w-xl mb-10 font-light">
          Production systems across LLM engineering, data science, agentic AI, and full-stack development.
        </p>
      </div>

      <div className="flex gap-1 border-b border-white/[0.06] mb-10">
        {TABS.map(t => (
          <button key={t} onClick={() => setFilter(t)}
            className={`font-mono text-[10px] uppercase tracking-[1.5px] px-5 py-2.5 transition-all duration-200 border-b-2 mb-[-1px] ${filter === t ? 'text-lime border-lime' : 'text-gray-500 border-transparent hover:text-gray-300'}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((p, i) => <ProjectCard key={p.title} p={p} delay={i * 55} />)}
      </div>
    </section>
  )
}
