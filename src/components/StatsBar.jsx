import { useRef } from 'react'
import { useInView, useCounter } from '../hooks'

function StatBox({ target, suffix, label, sublabel, border }) {
  const [ref, vis] = useInView({ threshold: 0.3 })
  const val = useCounter(target, vis)
  return (
    <div ref={ref} className={`py-9 px-8 text-center ${border ? 'border-r border-white/[0.06]' : ''}`}>
      <div className="font-serif text-[52px] text-lime leading-none tracking-[-2px]">{val}{suffix}</div>
      <div className="text-[14px] text-gray-300 mt-2 leading-snug">{label}</div>
      <div className="font-mono text-[10px] text-gray-600 mt-1 tracking-widest uppercase">{sublabel}</div>
    </div>
  )
}

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-s1 border-b border-white/[0.06]">
      <StatBox target={94} suffix="%+" label="Retrieval Precision"  sublabel="Hybrid BM25 + vector"  border />
      <StatBox target={7}  suffix=""   label="Days to Production"   sublabel="Avg turnaround"        border />
      <StatBox target={3} label="Industry Internships" sublabel="C-DAC · Airtel · IBM"  border />
      <StatBox target={12} suffix="+"  label="Projects Shipped"     sublabel="LLM, RAG, Data Science" border={false} />
    </div>
  )
}
