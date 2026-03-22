import { useState, useEffect } from 'react'
import { FEED_EVENTS } from '../data'

export default function LiveFeed() {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const init = [0, 1, 2].map(i => ({ ...FEED_EVENTS[i], id: i, ago: 5 + i * 14 }))
    setItems(init)
    setCount(3)
    setIdx(3)

    const iv = setInterval(() => {
      setIdx(i => {
        const ev = FEED_EVENTS[i % FEED_EVENTS.length]
        setItems(prev => [
          { ...ev, id: Date.now(), ago: Math.floor(Math.random() * 30) + 5 },
          ...prev.slice(0, 4),
        ])
        setCount(c => c + 1)
        return i + 1
      })
    }, 3500)
    return () => clearInterval(iv)
  }, [])

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex items-center gap-3 font-mono text-[10px] text-lime uppercase tracking-[3px] mb-3">
        <span className="w-6 h-px bg-lime/60" />Live Activity
      </div>
      <h3 className="font-serif text-[28px] tracking-[-0.5px] mb-6">
        What I'm <em className="italic text-lime">working on</em>
      </h3>

      <div className="bg-s1 border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
          <span className="font-mono text-[11px] text-white tracking-wide">ACTIVITY FEED</span>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Live
          </span>
        </div>

        <div>
          {items.map(item => (
            <div key={item.id}
              className="flex items-start gap-3 px-5 py-3.5 border-b border-white/[0.04] last:border-0 animate-slideIn">
              <span className="text-sm mt-0.5 flex-shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium text-white leading-snug">{item.main}</div>
                <div className="text-[11px] text-gray-500 mt-0.5">{item.sub}</div>
              </div>
              <div className="font-mono text-[10px] text-gray-600 flex-shrink-0 mt-0.5">{item.ago}s ago</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-white/[0.06]">
          <span className="font-mono text-[10px] text-gray-500">
            <span className="text-lime">{count}</span> events today
          </span>
          <div className="flex gap-3 font-mono text-[10px] text-gray-600">
            <span>IST</span><span>GMT</span><span>EST</span>
          </div>
        </div>
      </div>
    </div>
  )
}
